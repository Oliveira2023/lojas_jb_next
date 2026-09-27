// src/utils/fetchCategories.ts
export default async function FetchCategories() {
  console.log('FetchCategories called');
  const res = await fetch('/api/categories');
  const categorias = await res.json();
  const categoryOptions = categorias.map((categoria: string) => ({
    value: categoria,
    label: categoria,
  }));
  return { categoryOptions };
}