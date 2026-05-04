// src/app/api/stores/route.ts
import pool from '@/app/api/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const grupo = searchParams.get('grupo');
  const query = searchParams.get('q');

  try {
    let result;

    if (query) {
      result = await pool.query(
        `SELECT *
         FROM stores
         WHERE nome_loja ILIKE $1
            OR categoria ILIKE $1
            OR grupo ILIKE $1
         ORDER BY id`,
        [`%${query}%`]
      );
    } else if (!grupo || grupo === 'all') {
      result = await pool.query('SELECT * FROM stores ORDER BY id');
    } else {
      result = await pool.query(
        'SELECT * FROM stores WHERE grupo = $1 OR categoria = $1 ORDER BY id',
        [grupo]
      );
    }

    return Response.json(result.rows);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch stores' }, { status: 500 });
  }
}