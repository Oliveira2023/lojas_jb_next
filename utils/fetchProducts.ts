// src/utils/fetchProducts.ts
export default async function FetchProducts() {
  console.log('FetchProducts called');
  const res = await fetch('/api/productlist');

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