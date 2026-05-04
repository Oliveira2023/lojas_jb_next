import pool from '@/app/api/db';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await pool.query('SELECT * FROM stores WHERE id = $1 LIMIT 1', [id]);

    if (result.rows.length === 0) {
      return Response.json({ error: 'Store not found' }, { status: 404 });
    }

    return Response.json(result.rows[0]);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch store' }, { status: 500 });
  }
}