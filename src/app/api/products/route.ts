// src/app/api/products/route.ts
import pool from '@/app/api/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get('store_id');
  // const query = searchParams.get('q');
 console.log('Received store_id:', storeId);
  if (!storeId) {
    return Response.json({ error: 'Missing store_id' }, { status: 400 });
  }


  try {
    const result = await pool.query(
      `
      SELECT
        sp.id, sp.store_id, sp.product_id, sp.price, sp.image_url,
        p.nome, p.descricao
      FROM store_products sp
      INNER JOIN products p ON sp.product_id = p.id
      WHERE sp.store_id = $1
      ORDER BY p.nome ASC
      `,
      [storeId]
    );
    return Response.json(result.rows);

  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
