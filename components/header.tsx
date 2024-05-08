
import Search from "@/app/ui/Search";
import { useEffect, useState } from "react";
export default function Header({localLoja}: any) {

    const [loja, setLoja] = useState<string>('Roland Garros')
    
    useEffect(() =>{
      localLoja(loja)
    },[])
    

    return (
      <header className="w-full pl-24 pr-24 pt-4 pb-4">
        <div className="fixed top-0 left-0 flex h-48 items-center justify-between bg- lg:static lg:h-auto lg:w-auto lg:bg-none">
          <div className="w-3/12 h-14 ">
            <h1 className="text-black">Lojas</h1>
            <select className="w-full h-7 text-black" name="lojas" id="lojas" onChange={(e) => 
                setLoja(e.target.value)
                }>
              <option className="text-black" value="Roland Garros" id="lojas-select ">Roland Garros</option>
              <option className="text-black" value="Jardim Japão" id="lojas-select ">Jardim Japão</option>
              <option className="text-black" value="Edu Chaves" id="lojas-select">Edu Chaves</option>
            </select>
          </div>
            <Search placeholder= "Buscar pelas melhores lojas" />
        </div>
        <div>
          <nav className="text-white">
            <ul className="flex flex-row items-center justify-between gap-4 p-6 lg:flex-row text-slate-50">
              <li><a className="text-2xl font-light hover:bg-red-400" href="/">Farmácia</a></li>
              <li><a className="text-2xl font-light text-white" href="/">Mercado</a></li>
              <li><a className="text-2xl font-light" href="/">Ótica</a></li>
              <li><a className="text-2xl font-light" href="/">Vestuário</a></li>
              <li><a className="text-2xl font-light" href="/">Contato</a></li>
              <li><a className="text-2xl font-light" href="/">Sobre</a></li>
            </ul>
             
          </nav>
        </div>
      </header>
    )
}