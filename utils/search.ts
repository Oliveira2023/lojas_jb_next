import { ListaLojas } from '@utils/listaLojas';

export default async function handleSearch(term : string) {

    var resultado: any[]=[];

        for(let igeral=0; igeral<ListaLojas.length;igeral++) {
            
            let nomeLoja = ListaLojas[igeral].nomeLoja;
            let nomeParcial: string = '';
           
            for(let i=0; i<nomeLoja.length; i++){
                nomeParcial += nomeLoja[i];
                // console.log(term + "|" + nomeParcial.toLocaleLowerCase());
                
                if(term.toLowerCase() == nomeParcial.toLowerCase()) {
                    resultado.push(ListaLojas[igeral])// = ListaLojas[igeral]
                }else {
                    continue;
                }
            }
        }
        return resultado;
}