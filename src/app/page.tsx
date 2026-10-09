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
import { useSearchParams } from "next/navigation";
// import selectStreet from "@utils/streetSelection";
import manageHight from "@utils/manageHight";
import Produtos from "@components/produtos";

export default function Home() {

  const [loja, updateLoja] = useState<string>('')
  const [grupo, setGrupo] = useState<string>('all')
  const searchParams = useSearchParams();
  // const filteredLojas = FilterStore(grupo);
  // const lojasEncontradas = filteredLojas.lojasEncontradas;
  const [lojasEncontradas, setLojasEncontradas] = useState<any[]>([]);

  
  const [street, setStreet] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [product, setProduct] = useState<string>('');
  const [numeroLojas, setNumeroLojas] = useState<number>(0);

  useEffect(() => {
    FilterStore(street, category, product).then(({ lojasEncontradas }) => {
    setLojasEncontradas(lojasEncontradas);
    setNumeroLojas(lojasEncontradas.length);
  });
  }, [street, category, product]);
 

  // seleção da catetorias
  // Grupo selecionado no select das avenidas ou nas categorias
  // updateselecao recebe a cagegoria atualizando a selecao atualiza o grupo
  useEffect(() => {

    if (!loja) {
      setGrupo('all');
    } else if (loja === 'Lojas Roland Garros') {
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
    } else if (loja === "Bebidas") {
      setGrupo('Bebidas');
    } else {
      setGrupo('none');
    }
  }, [loja])

  const updateSelecao = (selecao: string) => {
    updateLoja(selecao)
    
  }

  useEffect(() => {
    const streetValue = searchParams.get('street') ?? '';
    const categoryValue = searchParams.get('category') ?? '';
    const productValue = searchParams.get('product') ?? '';
    
    setStreet(streetValue);
    setCategory(categoryValue);
    setProduct(productValue);

  }, [searchParams]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 ">
      {/* menu dispositivos moveis -icone */}
      <div className="header-container relative w-full pl-4 pr-4 sm:pl-24 sm:pr-24 pt-2 pb-2 bg-[#6B6E4F] ">
        <Header pageLoja={null}/>
      </div>
      <div className="w-full pl-4 pr-4 sm:pl-24 sm:pr-24">
        <div className="pointer-events-none h-8 sm:h-12 rounded-b-2xl bg-white/25 backdrop-blur-sm border-b border-white/30 shadow-sm flex items-center justify-center">
        <p className="text-center">Mostrando {numeroLojas} Lojas abaixo</p>
        </div>
      </div>
      
      {/* container banners */}
      <div className="z-1 w-full items-start justify-between font-mono text-sm flex flex-row pl-4 sm:pl-24 pr-4 sm:pr-24 pt-4 pb-1 ">
        {/* banner central da pagina - carrousel */}
        <div className="mt-4 w-full flex flex-col sm:flex-row items-stretch justify-between bg-[#F1F5F0]">
          <div className="w-full sm:w-[65%] mx-0 p-2">
            <Hero local={loja} />
          </div>
          <div className="w-full sm:w-[34%] p-2 relative">
            <div className="sm:absolute sm:inset-0 my-auto text-sm sm:text-lg flex flex-col overflow-y-auto ">
              <h1 className="mb-2 text-center">Lojas Jardim Brasil</h1>
              <p>O site das lojas do Jardim Brasil foi criado para facilitar a busca por produtos e serviços em uma única plataforma, as 3 principais
                avenidas do bairro estão representadas, cada uma com suas lojas e categorias específicas. O site é fácil de usar,
                basta selecionar a loja ou categoria desejada para encontrar o que precisa. Além disso,
                o site oferece promoções exclusivas e descontos para os clientes das lojas do Jardim Brasil.
                Com o site das lojas do Jardim Brasil, você pode economizar tempo e dinheiro, encontrando tudo o que precisa em um só lugar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 sm:px-24">
        <div className="w-full flex items-center justify-center mt-4 mb-2">
          <Image className="border border-gray-300 sm:block" src="/logoHeader.png" width={816} height={445} alt="logo lojas jb"/>
        </div>
      </div>
      <div className="w-full sm:pl-24 sm:pr-24 z-10 bg-white/70 border-b border-white/20 shadow-sm py-4">
      <h1 className="text-center text-xl font-semibold text-blue-900 tracking-wide uppercase">Lojas</h1>
      </div>
      <div id="cards" className="flex w-full items-center grid grid-cols-3 sm:grid-cols-5 flex-row gap-1 m-1 pl-4 sm:pl-24 pr-4 sm:pr-24">
      {
        //  para encontrar as lojas
        lojasEncontradas.length > 0?(
          lojasEncontradas.map((lojas) => (
            <div key={lojas.id} className="w-[100%] mb-2">
              <CardsLojas
                gruppo={loja}
                image={lojas.image_url}
                nome={lojas.nome_loja}
                numLoja={lojas.id}
              />
              <p className= "whitespace-nowrap overflow-x-auto">
                {lojas.endereco}
              </p>
            </div>
          ))
        ) : (
          <div className="col-span-5 flex justify-center items-center bg-blue-500 p-4">
            <p className="text-white text-center">Nenhum item corresponde a pesquisa.</p>
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
