'use client'
import Image from "next/image";
import Categories from "../../components/categories";
import Hero from "./ui/hero";
import Footer from "@components/footer";
import { useEffect, useRef, useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const node: any = useRef(null);

  // erro de desaparecer as categorias**
  // const handleClickOutside = (e: any) => {
  //   if (node.current && node.current.contains(e.target)) {
  //     return;
  //   }
  //   setIsOpen(false);
  // }
  // useEffect(() => {
  //   document.addEventListener("mousedown", handleClickOutside);
  //   console.log("evento criado")
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //     console.log("evento removido")
  //    };
  // }, []);

  useEffect(() => {
    // Detectar o tamanho da tela e atualizar isMenuOpen conforme necessário
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768); // Exemplo: 768px como limite para desktop
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Verificar o tamanho inicial da tela

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    console.log("Toggling menu", isOpen);
    setIsOpen(!isOpen);
    console.log("isOpen:", isOpen);
  }

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
      setGrupo('Vestuario');
    } else if (loja === 'Variedades') {
      setGrupo('variedades');
    } else if (loja === 'Óticas') {
      setGrupo('Óticas');
    } else if (loja === "Contrução") {
      setGrupo('Construção');
    }
  }, [loja])

  useEffect(() => {
    console.log("grupo atualizado: " + grupo);
    
    setIsOpen(window.innerWidth > 768);
  }, [grupo]);

  const updateSelecao = (selecao: string) => {
    updateLoja(selecao)
    
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
      {/* menu dispositivos moveis -icone */}
      <div className="absolute top-2 right-0 pr-8" onClick={toggleMenu}>
          <svg className="menuHidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </div>

      <div className="w-full pl-4 pr-4 sm:pl-24 sm:pr-24 pt-2 pb-2 bg-blue-300 sm:bg-yellow-400 ">
        <Header localLoja={updateSelecao} pageLoja={null}/>
      </div>
      {/* menu das categorias fechado para celulares - lateral para desktop */}
      <div className="z-10 w-full items-start justify-between font-mono text-sm lg:flex flex-row pl-4 sm:pl-24 pr-4 sm:pr-24 pt-0 sm:pt-4 pb-1">
        <div ref={node} className= {isOpen ? 'block mt-2 w-3/4 sm:w-[25%] h-[420px] sm:block absolute sm:relative md:top-0 top-8 right-0 z-10' : 'hidden'}>
        <Categories adjustcategoria={updateSelecao} />
        </div>
        <div className="mt-2 w-full sm:w-[75%] ml-0 sm:ml-2 mr-0 sm:mr-2 h-[auto] sm:h-[420px] bg-orange-400">
          <Hero local={loja} />
        </div>
      </div>
      <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24">
        <div>
          <Image src={"/padariaJb-original1200x900.jpg"} width={1200} height={900} alt="banner central"></Image>
          <p className="descript-banner-central">Foto original da padaria jardim Brasil</p>
        </div>
      </div>
      <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24">
      <h1 className="bg-gray-500 p-2 text-center text-xl sm:text-2xl">Seleção das Lojas</h1>
      </div>
      <div className="w-full items-center flex flex-row gap-1 m-1 pl-4 sm:pl-24 pr-4 sm:pr-24">

      {
        //  para encontrar as lojas

        lojasEncontradas.length > 0?(
          lojasEncontradas.map((lojas) => (
            <div key={lojas.numLoja} className="w-1/4">
              <CardsLojas gruppo={loja} image={lojas.imageUrl} nome={lojas.nomeLoja} numLoja={lojas.numLoja}/>
            </div>
          ))
        ) : (
          <div className="w-full text-center bg-red-400 p-2 ">
            <p>Nenhum item corresponde a pesquisa.</p>
          </div>
        )

        // para encontrar as lojas
        
      }
      </div>
      <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24">
        <Footer />
      </div>
      <div>
        <GoTopButton />
      </div>
    </main>
    
  );
}
