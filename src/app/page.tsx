'use client'
import Image from "next/image";

import Categories from "./ui/categories";

import Hero from "./ui/hero";
import Footer from "@components/footer";
import { useState } from "react";
import CardsLojas from "@components/cards_lojas";
import estetica from "@public/estetica1000.jpg"
import PaginaLoja from "./page_loja/page";
import Header from "@components/header";

export default function Home() {

  const [loja, updateLoja] = useState<string>('Roland Garros')

  const updateSelecao = (resultado: string) => {
    updateLoja(resultado)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0">
      <Header localLoja={updateSelecao}/>

      <div className="z-10 w-full items-start justify-between font-mono text-sm lg:flex flex-row pl-24 pr-24 pt-4 pb-4">
        <div className="bg-green-400 min-h-96 mt-2 w-[25%]">
        <Categories />
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
      <h1 className="bg-gray-500 p-2 text-center text-2xl">Todas as Lojas</h1>
      </div>

      <div className="w-full items-center flex flex-row gap-1 m-1 pl-24 pr-24">
        <div className="w-1/4 ">
          <CardsLojas nome="loja1" image={estetica.src} href={"/page_loja"}/>
        </div>
        <div className="w-1/4">
          <CardsLojas nome="loja2" image="/sapatos1000.jpg" href="/page_loja"/>
        </div>
        <div className="w-1/4">
          <CardsLojas nome="loja3" image="/padaria1000.jpg" href="/page_loja"/>
        </div>
        <div className="w-1/4">
          <CardsLojas nome="loja4" image="/bar1000.jpg" href="/page_loja"/> 
        </div>
      </div>
      <div className="w-full pl-24 pr-24">
        <Footer />
      </div>
    </main>
    
  );
}
