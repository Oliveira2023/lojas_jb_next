'use client'
import Image from "next/image";
import Categories from "../../components/categories";
import Hero from "./ui/hero";
import Footer from "@components/footer";
import { useEffect, useState } from "react";
import CardsLojas from "@components/cards_lojas";
import FilterStore from "@utils/filterStore";
import PaginaLoja from "./page_loja/page";
import Header from "@components/header";
import GoTopButton from "@components/goTopButton";
import { ListaLojas } from "@utils/listaLojas";
// import selectStreet from "@utils/streetSelection";

export default function Home() {

  const [loja, updateLoja] = useState<string>('Lojas Roland Garros')
  const [grupo, setGrupo] = useState<string>('roland')
  const filteredLojas = FilterStore(grupo);
  const lojasEncontradas = filteredLojas.lojasEncontradas;

  useEffect(() => {

    if (loja === 'Lojas Roland Garros') {
      setGrupo('roland');
    } else if (loja === 'Lojas Jardim Japão') {
      setGrupo('japao');
    } else if (loja === 'Lojas Edu Chaves') {
      setGrupo('chaves');
    } else if (loja === 'Farmácias') {
      setGrupo('Farmácia');
    } else if (loja === 'Mercados') {
      setGrupo('Mercado');
    } else if (loja === 'Celulares') {
      setGrupo('Celular');
    } else if (loja === 'Vestuário') {
      setGrupo('vestuario');
    } else if (loja === 'Variedades') {
      setGrupo('variedades');
    } else if (loja === 'Sobre') {
      setGrupo('sobre');
    }
  }, [loja])

  useEffect(() => {
    console.log("grupo atualizado: " + grupo);
  }, [grupo]);

  const updateSelecao = (selecao: string) => {
    updateLoja(selecao)
    
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <div className="w-full pl-24 pr-24 pt-2 pb-2 bg-yellow-400">
        <Header localLoja={updateSelecao} pageLoja={null}/>
      </div>

      <div className="z-10 w-full items-start justify-between font-mono text-sm lg:flex flex-row pl-24 pr-24 pt-4 pb-4">
        <div className="bg-green-400 min-h-96 mt-2 w-[25%]">
        <Categories adjustcategoria={updateSelecao} />
        </div>
        <div className="mt-2 w-[75%] ml-2 mr-2">
          <Hero local={loja} />
        </div>
      </div>
      <div className="w-full pl-24 pr-24">
        <div>
          <Image src={"/padariaJb-original1200x900.jpg"} width={1200} height={900} alt="banner central"></Image>
          <p className="descript-banner-central">Foto original da padaria jardim Brasil</p>
        </div>
      </div>
      <div className="w-full pl-24 pr-24">
      <h1 className="bg-gray-500 p-2 text-center text-2xl">Seleção das Lojas</h1>
      </div>


      <div className="w-full items-center flex flex-row gap-1 m-1 pl-24 pr-24">

      {
        // testes para encontrar as lojas

        lojasEncontradas.length > 0?(
          lojasEncontradas.map((lojas) => (
            // console.log(loja.imageUrl),
            <div key={lojas.numLoja} className="w-1/4 ">
              <CardsLojas nome={loja} image={lojas.imageUrl} href={"/page_loja"} numLoja={lojas.numLoja}/>
            </div>
          ))
        ) : (
          <div className="w-full text-center bg-red-400 p-2 ">
            <p>Nenhum item corresponde a pesquisa.</p>
          </div>
        )

        // testes para encontrar as lojas
        
      }

      </div>

      <div className="w-full pl-24 pr-24">
        <Footer />
      </div>
      <div>
        <GoTopButton />
      </div>
    </main>
    
  );
}
