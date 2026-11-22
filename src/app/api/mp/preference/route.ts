import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const externalReference = `pedido_${Date.now()}`;
  const {cartItems} = await request.json();
  const items = cartItems.map((item: any) => ({
    id: String(item.id),
    title: item.name,
    quantity: item.quantity,
    description: item.description,
    currency_id: "BRL",
    unit_price: Number.parseFloat(String(item.price)),
  }));
  const baseUrl = "https://www.lojasjardimbrasil.com.br";

  const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      external_reference: externalReference,
      additional_info: '',
      // auto_return: "approved",
      // back_urls: {
      //   success: "https://www.lojasjardimbrasil.com.br/",
      //   failure: "https://www.lojasjardimbrasil.com.br/",
      //   pending: "https://www.lojasjardimbrasil.com.br/",
      // },
      payer: {
        phone: { area_code: '', number: '' },
        address: { zip_code: '', street_name: '', street_number: null },
        email: "test_user_8982233191030839527@testuser.com", // Placeholder email for testing; replace with actual payer email in production
        identification: { number: '', type: '' },
        name: '',
        surname: '',
        date_created: null,
        last_purchase: null
      },
      notification_url: "https://www.lojasjardimbrasil.com.br/api/webhooks/mercadopago",
      items
    }),
    cache: "no-store",
  });
  console.log("MercadoPago API response status:", res.status);
  console.log("Itens sent to MercadoPago API:", items);
  const data = await res.json();
  if (!res.ok) {
    console.error("Error creating preference:", data);
    return NextResponse.json({ error: "Erro ao criar preferência de pagamento" }, { status: res.status });
  }
  console.log("Preference created successfully:", data);
  // return NextResponse.json({ preferenceId: data.id });
  return NextResponse.json(
    { preferenceId: data.id, checkoutUrl: data.init_point },
    { status: res.status }
    );
}