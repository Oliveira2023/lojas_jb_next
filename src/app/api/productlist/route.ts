// src/app/api/categories/route.ts
import pool from '@/app/api/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const street = searchParams.get('street');
  const category = searchParams.get('category');

  const conditions = ["p.nome IS NOT NULL"];
  const values: any[] = [];

  console.log('Fetching products from the database...');

  if (street) {
    values.push(street);
    conditions.push(`s.grupo ILIKE $${values.length}`);
  }
  if (category) {
    values.push(category);
    conditions.push(`s.categoria ILIKE $${values.length}`);
  }
  try {
    const result = await pool.query(
      `SELECT DISTINCT p.nome
       FROM stores s
       INNER JOIN store_products sp ON s.id = sp.store_id
       INNER JOIN products p
        ON p.id = sp.product_id
       WHERE ${conditions.join(' AND ')}
       ORDER BY p.nome`,
        values
    );
    const products = result.rows.map((row) => row.nome);
    return Response.json(products);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}