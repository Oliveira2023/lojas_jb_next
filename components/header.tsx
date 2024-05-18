
import Search from "@/app/ui/Search";
import { useEffect, useState } from "react";
import { sedan } from "@/app/ui/fonts";
export default function Header({localLoja}: any) {

    const [loja, setLoja] = useState<string>('Roland Garros')

    useEffect(() =>{
      localLoja(loja)
    },[])
   
    return (
      <>
        <div className={`${sedan.className} flex h-48 items-center justify-between bg-lg:static lg:w-auto lg:bg-none`}>
          <div className="h-16 w-1/3 bg-green-400">
              <h1 className="h-8 bg-red-400">Lojas</h1>
            <select className="h-8 w-1/2 text-black bg-red-400" name="lojas" onChange={(e) => 
                setLoja(e.target.value)
                }>
              <option className="text-black" value="Roland Garros" id="lojas-select ">Roland Garros</option>
              <option className="text-black" value="Jardim Japão" id="lojas-select ">Jardim Japão</option>
              <option className="text-black" value="Edu Chaves" id="lojas-select">Edu Chaves</option>
            </select>
          </div>
            <div className='w-1/3 bg-green-400 h-16'>
              <Search placeholder= "Buscar pelas melhores lojas" />
            </div>
        </div>
          <nav className="text-white">
            <ul className="flex flex-row items-center justify-between">
              <li><a className="text-2xl font-light hover:bg-red-400" href="/">Farmácia</a></li>
              <li><a className="text-2xl font-light" href="/">Mercado</a></li>
              <li><a className="text-2xl font-light" href="/">Ótica</a></li>
              <li><a className="text-2xl font-light" href="/">Vestuário</a></li>
              <li><a className="text-2xl font-light" href="/">Contato</a></li>
              <li><a className="text-2xl font-light" href="/">Sobre</a></li>
            </ul>
          </nav>
      </>
    )
}