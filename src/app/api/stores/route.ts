// src/app/api/stores/route.ts
import pool from '@/app/api/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const street = searchParams.get('street');
  const category = searchParams.get('category');
  const product = searchParams.get('product');

  console.log('Received query parameters:', { street, category, product });

  const conditions: string[] = [];
  const values: any[] = [];

  if (street) {
    values.push(street);
    conditions.push(`grupo ILIKE $${values.length}`);
  }

  if (category) {
    values.push(category);
    conditions.push(`categoria ILIKE $${values.length}`);
  }

  if (product) {
    values.push(product);
    conditions.push(`product ILIKE $${values.length}`);
  }

  const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';

  try {
    const result = await pool.query(
        `SELECT *
         FROM stores
         ${whereClause}
         ORDER BY id`,
        values
      );
    return Response.json(result.rows);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch stores' }, { status: 500 });
  }
}