import { NextResponse } from "next/server";

export async function POST() {
  const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      items: [{ title: "Meu produto", quantity: 1, unit_price: 2000 }],
    }),
  });

  const data = await res.json();
  return NextResponse.json({ preferenceId: data.id });
}