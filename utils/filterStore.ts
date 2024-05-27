
import { ListaLojas } from "@utils/listaLojas";
export default function FilterStore(grupo: string) {
    
    const lojasEncontradas = ListaLojas.filter(loja => loja.grupo === grupo || loja.categoria === grupo);
    
    return { lojasEncontradas };
  }
  
  