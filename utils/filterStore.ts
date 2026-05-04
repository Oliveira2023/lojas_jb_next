// src/utils/filterStore.ts
export default async function FilterStore(grupo: string) {
  const query = grupo && grupo !== 'all' ? `?grupo=${grupo}` : '';
  const res = await fetch(`/api/stores${query}`);
  const lojasEncontradas = await res.json();
  return { lojasEncontradas };
}