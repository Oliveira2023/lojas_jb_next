
import Search from "@/app/ui/Search";
import { useEffect, useState } from "react";
import { sedan } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header({localLoja, pageLoja}: {localLoja: any, pageLoja: string | null}) {

  const router = useRouter();

  const handleNavigate = () => {
    router.push('/');
  };

    const [loja, setLoja] = useState<string>('Lojas Roland Garros')
    // const [lojaPage, setLojaPage] = useState<string>('')

    useEffect(() =>{
      localLoja(loja);
      // console.log("useEffect de atualizar loja")
    },[loja])
    
   
    return (
      <>
        <div className={`${sedan.className} flex flex-col sm:flex-row p-0 justify-between`}>

          <div className={pageLoja !== null ? 'bg-green-500 rounded-md' : "w-2/3 sm:w-1/3 flex rounded-md text-lg bg-green-500"} style={{marginBottom: '0.5rem'}}>
          {/* icone casa-home para voltar ao inicio */}
              <Link href={"/"}><Image src="/home_24dp_FILL0_wght400_GRAD0_opsz24.svg" width={30} height={30} alt="logo"/></Link>
            <select className={pageLoja !== null ? "hidden" : "w-full text-black text-lg sm:text-lg py-1 rounded-md"} name="lojas" onChange={(e) => 
                setLoja(e.target.value)
                } aria-label="Selecione a Loja" style={{ height: '100%'}}>
              <option className="text-black" value="Lojas Roland Garros">Lojas Roland Garros</option>
              <option className="text-black" value="Lojas Jardim Japão">Lojas Jardim Japão</option>
              <option className="text-black" value="Lojas Edu Chaves">Lojas Edu Chaves</option>
            </select>
          </div>
          <div className='w-2/5 sm:w-1/3'>
              <Search placeholder= "Buscar pelas melhores lojas" />
          </div>
        </div>

        <nav className="text-white hidden">
          <ul className="flex flex-row items-start sm:items-center justify-between">
            <li className="text-lg sm:text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
              
              setLoja('Farmácias');
              // handleNavigate();
              
            }}>Farmácia</li>
            <li className="text-lg sm:text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
              setLoja('Mercados');
            }}>Mercado</li>
            <li className="text-lg sm:text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
              setLoja('Celulares');
            }}>Celular</li>
            {/* <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
              setLoja('Vestuário');
            }}>Vestuário</li> */}
            {/* <li className="text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
              setLoja('Variedades');
            }}>Variedades</li> */}
            <li className="text-lg sm:text-2xl font-light hover:scale-110 cursor-pointer" onClick={() => {
              setLoja('Óticas');
            }}>Ótica</li>
          </ul>
        </nav>
      </>
    )
}