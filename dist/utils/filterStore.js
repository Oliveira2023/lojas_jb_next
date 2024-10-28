import { ListaLojas } from "@utils/listaLojas";
// const fetchLojas = require('./fetchLojas');
async function manipulaMongoTeste() {
    // const lojas = await fetchLojas();
    // console.log(lojas);
}
export default function FilterStore(grupo) {
    // const lojasEncontradas = ListaLojas.filter((loja: { grupo: string; categoria: string }) => loja.grupo === grupo || loja.categoria === grupo);
    const lojasEncontradas = ListaLojas.filter(loja => loja.grupo === grupo || loja.categoria === grupo);
    return { lojasEncontradas };
}
