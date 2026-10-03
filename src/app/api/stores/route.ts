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
    console.log('Filtering by product:', product);
    values.push(`%${product}%`);
    conditions.push(`
      EXISTS (
        SELECT 1
        FROM store_products sp
        INNER JOIN products p
        ON p.id = sp.product_id
        WHERE sp.store_id = s.id
        AND p.nome ILIKE $${values.length})
      `);
  }
console.log('values:', values);
  const whereClause = conditions.length ? `WHERE ${conditions.join(' AND ')}` : '';
//console.log(whereClause ? `WHERE clause: ${whereClause}` : 'No WHERE clause applied.');
  try {
    const result = await pool.query(
        `SELECT *
         FROM stores s
         ${whereClause}
         ORDER BY s.nome_loja ASC`,
        values
      );
    return Response.json(result.rows);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch stores' }, { status: 500 });
  }
}