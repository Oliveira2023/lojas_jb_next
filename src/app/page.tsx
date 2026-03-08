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
import manageHight from "@utils/manageHight";
import Produtos from "@components/produtos";

export default function Home() {

  const [loja, updateLoja] = useState<string>('Lojas Roland Garros')
  const [grupo, setGrupo] = useState<string>('roland')
  const filteredLojas = FilterStore(grupo);
  const lojasEncontradas = filteredLojas.lojasEncontradas;
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const node: any = useRef(null);
  const [teste, updateTeste] = useState<number>(0);
  
  const toggleMenu = () => {
    console.log("Toggling menu", isOpen);
    setIsOpen(!isOpen);
    console.log("isOpen:", isOpen);
  }
  // seleção da catetorias
  // Grupo selecionado no select das avenidas ou nas categorias
  // updateselecao recebe a cagegoria atualizando a selecao atualiza o grupo
  useEffect(() => {

    if (loja === 'Lojas Roland Garros') {
      setGrupo('roland');
    } else if (loja === 'Lojas Jardim Japão') {
      setGrupo('japao');
    } else if (loja === 'Lojas Edu Chaves') {
      setGrupo('chaves');
    } else if (loja === 'Farmácias') {
      setGrupo('Farmacia');
    } else if (loja === 'Mercados') {
      setGrupo('Mercado');
    } else if (loja === 'Celulares') {
      setGrupo('Celular');
    } else if (loja === 'Vestuário') {
      setGrupo('Vestuario');
    } else if (loja === 'Variedades') {
      setGrupo('variedades');
    } else if (loja === 'Óticas') {
      setGrupo('Otica');
    } else if (loja === "Construção") {
      setGrupo('Construcao');
    } else if (loja === "Salão de Beleza") {
      setGrupo('Beleza');
    } else if (loja === "Avículas") {
      setGrupo('Avicula');
    }
  }, [loja])

  // useEffect(() => {
  //   console.log("grupo atualizado: " + grupo);
    
  //   setIsOpen(window.innerWidth > 768);
  // }, [grupo]);

  const updateSelecao = (selecao: string) => {
    updateLoja(selecao)
    
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
      {/* menu dispositivos moveis -icone */}
      <div className="absolute top-2 right-0 pr-8" onClick={toggleMenu}>
          <svg className="menuHidden cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
      </div>

      <div className="header-container w-full pl-4 pr-4 sm:pl-24 sm:pr-24 pt-2 pb-2 bg-[#6B6E4F] ">
        <Header localLoja={updateSelecao} pageLoja={null}/>
      </div>
      
      {/* container categorias e banners */}
      <div className="z-1 w-full items-start justify-between font-mono text-sm flex flex-row pl-4 sm:pl-24 pr-4 sm:pr-24 pt-0 pb-1 ">
        {/* menu das categorias fechado para celulares - lateral para desktop */}
        {/* <div ref={node} className= {isOpen ? 'z-10 child-hero mt-2 w-[15%] sm:w-[15%] sm:static top-8 right-8' : 'hidden'}>
          <Categories adjustcategoria={updateSelecao} categoriaHome={loja}/>
        </div> */}

        {/* banner central da pagina - carrousel */}
        <div className="mt-4 w-full flex flex-row items-start justify-between">
          <div className=" w-[65%] h-[auto] mx-0 pb-1">
            <Hero local={loja} />
          </div>
          <div className="w-[30%] my-auto bg-[#5465A8] p-2 text-sm sm:text-lg flex flex-col items-center justify-center">
            <h1 className="mb-4 text-center">Lojas Jardim Brasil</h1>
            <p>O site das lojas do Jardim Brasil foi criado para facilitar a busca por produtos e serviços em uma única plataforma, as 3 principais
              avenidas do bairro estão representadas, cada uma com suas lojas e categorias específicas. O site é fácil de usar, 
              basta selecionar a loja ou categoria desejada para encontrar o que precisa. Além disso, 
              o site oferece promoções exclusivas e descontos para os clientes das lojas do Jardim Brasil. 
              Com o site das lojas do Jardim Brasil, você pode economizar tempo e dinheiro, encontrando tudo o que precisa em um só lugar.
            </p>
          </div>
        </div>
        {/* menu para busca de produtos, copiei das categorias */}
        {/* <div ref={node} className= {isOpen ? 'z-10 child-hero mt-2 w-[15%] sm:w-[15%] sm:static top-8 right-8' : 'hidden'}>
          <Produtos adjustcategoria={updateSelecao} categoriaHome={loja}/>
        </div> */}
      </div>

      <div className="w-full px-4 sm:px-24">
        <div className="w-full flex items-center justify-center mt-4 mb-2 bg-slate-400">
          <Image className=" sm:block" src="/logoHeader.png" width={816} height={445} alt="logo lojas jb"/>
          
        </div>
      </div>
      <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24">
      <h1 className="bg-gray-500 p-2 text-center text-xl sm:text-2xl">Seleção das Lojas</h1>
      </div>
      <div id="cards" className="w-full items-center grid grid-cols-5 flex-row gap-1 m-1 pl-4 sm:pl-24 pr-4 sm:pr-24">

      {
        //  para encontrar as lojas

        lojasEncontradas.length > 0?(
          lojasEncontradas.map((lojas) => (
            <div key={lojas.numLoja} className="w-[100%]">
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
      <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24 mb-3">
        <Footer />
      </div>
      <div>
        <GoTopButton />
      </div>
    </main>
    
  );
}
