
import Search from "@/app/ui/Search";
import { useEffect, useState } from "react";
import { sedan } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";



export default function Header({localLoja}: any) {

    const [loja, setLoja] = useState<string>('Lojas Roland Garros')

    useEffect(() =>{
      localLoja(loja);
      // console.log("atualizado a loja: " + loja)
      // console.log(loja)
    }, [loja])
   
    return (
      <>
        <div className={`${sedan.className} flex flex-row p-0 justify-between`}>
          <div className="w-1/3 flex rounded-md text-xl bg-green-500" style={{marginBottom: '0.5rem'}}>
              <Link href="javascript:location.reload()"><Image src="/home_24dp_FILL0_wght400_GRAD0_opsz24.svg" width={30} height={30} alt="logo"/></Link>
            <select className="w-full text-black text-xl py-1 rounded-md" name="lojas" onChange={(e) => 
                setLoja(e.target.value)
                } aria-label="Selecione a Loja" style={{ height: '100%'}}>
              <option className="text-black" value="Lojas Roland Garros">Lojas Roland Garros</option>
              <option className="text-black" value="Lojas Jardim Japão">Lojas Jardim Japão</option>
              <option className="text-black" value="Lojas Edu Chaves">Lojas Edu Chaves</option>
            </select>
          </div>
            <div className='w-1/3'>
              <Search placeholder= "Buscar pelas melhores lojas" />
            </div>
        </div>
          <nav className="text-white">
            <ul className="flex flex-row items-center justify-between">
              <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
                setLoja('Farmácia');
              }}>Farmácia</li>
              <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
                setLoja('Mercado');
              }}>Mercado</li>
              <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
                setLoja('Celular');
              }}>Celular</li>
              <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
                setLoja('Vestuário');
              }}>Vestuário</li>
              <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
                setLoja('Variedades');
              }}>Variedades</li>
              <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
                setLoja('Sobre');
              }}>Sobre</li>
            </ul>
          </nav>
      </>
    )
}