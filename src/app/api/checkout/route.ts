export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: items.map((item: any) => ({
            id: String(item.id),
            title: item.title,
            quantity: item.quantity,
            currency_id: "BRL",
            unit_price: Number(item.unit_price),
          })),
          back_urls: {
            success: "http://localhost:3000/pagamento/sucesso",
            failure: "http://localhost:3000/pagamento/erro",
            pending: "http://localhost:3000/pagamento/pendente",
          },
          auto_return: "approved",
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return Response.json(data, { status: response.status });
    }

    return Response.json({
      id: data.id,
      init_point: data.init_point,
    });
  } catch {
    return Response.json(
      { error: "Erro ao criar preferência de pagamento" },
      { status: 500 }
    );
  }
}