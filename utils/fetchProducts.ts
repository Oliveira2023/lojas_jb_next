// src/utils/fetchProducts.ts
export default async function FetchProducts(street?: string, category?: string) {
  console.log('FetchProducts called');

  const params = new URLSearchParams();
  if (street) {
    params.set('street', street);
  }
  if (category) {
    params.set('category', category);
  }
  const res = await fetch(`/api/productlist?${params.toString()}`);

  if (!res.ok) {
    throw new Error('Failed to fetch product options');
  }
  const products = await res.json();
  const productOptions = products.map((product: string) => ({
    value: product,
    label: product,
  }));
  return { productOptions };
}