// src/app/api/stores/route.ts
import pool from '@/app/api/db';

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);
  const searchTerm = searchParams.get('q')?.trim() ?? '';
  const street = searchParams.get('street')?.trim() ?? '';
  const category = searchParams.get('category')?.trim() ?? '';
  const product = searchParams.get('product')?.trim() ?? '';
  const conditions: string[] = [];
  const values: any[] = [];

  if (searchTerm) {
    const searchResults = await pool.query(
      `SELECT *
       FROM stores s
       WHERE s.nome_loja ILIKE $1
       ORDER BY s.nome_loja ASC
       LIMIT 10`,
      [`%${searchTerm}%`]
    );
    return Response.json(searchResults.rows);
  }

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