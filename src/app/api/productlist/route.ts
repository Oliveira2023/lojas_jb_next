// src/app/api/categories/route.ts
import pool from '@/app/api/db';

export async function GET() {
  console.log('Fetching products from the database...');
  try {
    const result = await pool.query(
      `SELECT DISTINCT nome
       FROM products
       WHERE nome IS NOT NULL
       ORDER BY nome`
    );
    const products = result.rows.map((row) => row.nome);
    return Response.json(products);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}