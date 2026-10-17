// src/app/api/categories/route.ts
import pool from '@/app/api/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const street = searchParams.get('street');

  const conditions = ["s.categoria IS NOT NULL"];
  const values: any[] = [];

  if (street) {
    values.push(street);
    conditions.push(`s.grupo ILIKE $${values.length}`);
  }
  try {
    const result = await pool.query(
      `SELECT DISTINCT categoria
       FROM stores s
       WHERE ${conditions.join(' AND ')}
       ORDER BY s.categoria`,
       values
    );
    const categories = result.rows.map((row) => row.categoria);
    return Response.json(categories);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}