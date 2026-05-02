import { ListaLojas } from '@utils/listaLojas';

export default async function handleSearch(term : string) {

    var resultado: any[]=[];

        for(let igeral=0; igeral<ListaLojas.length;igeral++) {
            
            let nomeLoja = ListaLojas[igeral].nomeLoja.toLowerCase();
            let searchTerm = term.toLowerCase();
           
            if(nomeLoja.includes(searchTerm)) {
                resultado.push(ListaLojas[igeral]);
            }
        }
        return resultado;
}