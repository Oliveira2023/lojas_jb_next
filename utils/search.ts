import { ListaLojas } from '@utils/listaLojas';

export default async function handleSearch(term : string) {

    var resultado: any[]=[];

        for(let igeral=0; igeral<ListaLojas.length;igeral++) {
            
            let nomeLoja = ListaLojas[igeral].titulo;
            let nomeParcial: string = '';
            // let resultado;
            // console.log(nomeLoja);
            
            for(let i=0; i<nomeLoja.length; i++){
                nomeParcial += nomeLoja[i];
                // console.log(term + "|" + nomeParcial.toLocaleLowerCase());
                
                if(term.toLowerCase() == nomeParcial.toLowerCase()) {
                    resultado.push(ListaLojas[igeral])// = ListaLojas[igeral]
                }else {
                    // console.log("resultado undefined")
                    continue;
                }
                // console.log(nomeParcial);
                // resultado = ListaLojas.filter(loja => nomeParcial.toLowerCase() === term.toLowerCase());
                // console.log("lojas: ");

            }
        }
        return resultado;
}