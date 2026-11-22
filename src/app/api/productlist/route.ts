// src/app/api/categories/route.ts
import pool from '@/app/api/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const street = searchParams.get('street');
  const category = searchParams.get('category');

  console.log('Fetching products from the database...');

  const conditions = ["p.name IS NOT NULL"];
  const values: any[] = [];

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
      `SELECT DISTINCT p.name
       FROM products p
       INNER JOIN stores s ON s.id = p.store_id
       WHERE ${conditions.join(' AND ')}
       ORDER BY p.name ASC`,
        values
    );
    const products = result.rows.map((row) => row.name);
    return Response.json(products);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}