// src/utils/filterStore.ts
export default async function FilterStore(street: string, category: string, product: string) {
  console.log('FilterStore called with:', { street, category, product });
  const queryParams = new URLSearchParams();
  if (street) queryParams.append('street', street);
  if (category) queryParams.append('category', category);
  if (product) queryParams.append('product', product);
  const query = queryParams.toString() ? `?${queryParams.toString()}` : '';
  const res = await fetch(`/api/stores${query}`);
  const lojasEncontradas = await res.json();
  return { lojasEncontradas };
}