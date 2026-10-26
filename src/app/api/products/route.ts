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
        p.id, p.name, p.description, p.price, p.image_url
      FROM products p
      WHERE p.store_id = $1
      ORDER BY p.name ASC
      `,
      [storeId]
    );
    return Response.json(result.rows);

  } catch (error) {
    console.error('Error fetching products:', error);
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
