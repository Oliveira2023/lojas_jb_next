import { ListaLojas } from '@utils/listaLojas';
export default async function handleSearch(term) {
    var resultado = [];
    for (let igeral = 0; igeral < ListaLojas.length; igeral++) {
        let nomeLoja = ListaLojas[igeral].nomeLoja;
        let nomeParcial = '';
        for (let i = 0; i < nomeLoja.length; i++) {
            nomeParcial += nomeLoja[i];
            // console.log(term + "|" + nomeParcial.toLocaleLowerCase());
            if (term.toLowerCase() == nomeParcial.toLowerCase()) {
                resultado.push(ListaLojas[igeral]); // = ListaLojas[igeral]
            }
            else {
                continue;
            }
        }
    }
    return resultado;
}
