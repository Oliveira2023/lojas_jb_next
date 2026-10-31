"use server";

export async function createPreference() {
  const res = await fetch("https://api.mercadopago.com/checkout/preferences", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.MP_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      items: [{ title: "Meu produto", quantity: 1, unit_price: 2000 }],
    }),
    cache: "no-store",
  });

  const data = await res.json();

  if (!res.ok) throw new Error("Erro ao criar preferência");
  return data.id as string; // esse é o preference_id
}