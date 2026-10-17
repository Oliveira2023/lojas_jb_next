// src/utils/fetchCategories.ts
export default async function FetchCategories(street?: string, category?: string) {
  console.log('FetchCategories called');
  const params = new URLSearchParams();

  if (street) {
    params.set('street', street);
  }
  if (category) {
    params.set('category', category);
  }

  const res = await fetch(`/api/categories?${params.toString()}`);

  if (!res.ok) {
    throw new Error('Failed to fetch categories');
  }
  const categorias: string[] = await res.json();
  const categoryOptions = categorias.map((categoria) => ({
    value: categoria,
    label: categoria,
  }));
  return { categoryOptions };
}