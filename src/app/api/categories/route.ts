// src/app/api/categories/route.ts
import pool from '@/app/api/db';

export async function GET() {
  
  try {
    const result = await pool.query(
      `SELECT DISTINCT categoria
       FROM stores
       WHERE categoria IS NOT NULL
       ORDER BY categoria`
    );
    const categories = result.rows.map((row) => row.categoria);
    return Response.json(categories);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch categories' }, { status: 500 });
  }
}