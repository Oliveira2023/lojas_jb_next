// src/app/api/products/route.ts
import pool from '@/app/api/db';

const candidateStoreKeys = ['store_id', 'storeId', 'loja_id', 'id_loja', 'loja', 'grupo'];
const candidateNameKeys = ['product_name', 'nome', 'nome_produto', 'product', 'title'];
const candidateImageKeys = ['image_url', 'imageUrl', 'imagem', 'foto'];
const candidateDescriptionKeys = ['descricao', 'description', 'details'];

const pickFirst = (row: Record<string, unknown>, keys: string[]) => {
  for (const key of keys) {
    const value = row[key];
    if (typeof value === 'string' && value.trim()) return value;
  }
  return '';
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const storeId = searchParams.get('store_id');
  const query = searchParams.get('q');

  try {
    const result = await pool.query('SELECT * FROM products');
    let rows = result.rows as Record<string, unknown>[];

    if (storeId) {
      rows = rows.filter((product) => {
        return candidateStoreKeys.some((key) => String(product[key] ?? '').trim() === String(storeId).trim());
      });
    }

    if (query) {
      const normalizedQuery = query.toLowerCase();
      rows = rows.filter((product) => {
        const searchableValues = [
          ...candidateNameKeys.map((key) => String(product[key] ?? '')),
          ...candidateStoreKeys.map((key) => String(product[key] ?? '')),
          String(product.id ?? ''),
        ];

        return searchableValues.some((value) => value.toLowerCase().includes(normalizedQuery));
      });
    }

    const normalizedRows = rows.map((product) => ({
      ...product,
      product_name: pickFirst(product, candidateNameKeys),
      image_url: pickFirst(product, candidateImageKeys),
      descricao: pickFirst(product, candidateDescriptionKeys),
    }));

    normalizedRows.sort((a: Record<string, unknown>, b: Record<string, unknown>) => Number(a.id ?? 0) - Number(b.id ?? 0));

    return Response.json(normalizedRows);
  } catch (error) {
    return Response.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}
