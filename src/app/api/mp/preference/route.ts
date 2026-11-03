import { NextResponse } from "next/server";

export async function POST(request: Request) {

  const {cartItems} = await request.json();
  const items = cartItems.map((item: any) => ({
    id: String(item.id),
    title: item.name,
    quantity: item.quantity,
    description: item.description,
    currency_id: "BRL",
    unit_price: Number.parseFloat(String(item.price)),
  }));
  const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      items
    }),
    cache: "no-store",
  });
  console.log("MercadoPago API response status:", res.status);
  console.log("items sent to MercadoPago API:", items);
  const data = await res.json();
  if (!res.ok) {
    console.error("Error creating preference:", data);
    return NextResponse.json({ error: "Erro ao criar preferência de pagamento" }, { status: res.status });
  }
  // return NextResponse.json({ preferenceId: data.id });
  return NextResponse.json(
    { preferenceId: data.id, checkoutUrl: data.sandbox_init_point },
    { status: res.status }
    );
}