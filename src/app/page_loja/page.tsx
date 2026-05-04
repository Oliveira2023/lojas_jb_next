'use client'

import { Suspense, useEffect, useState } from 'react'
import Header from "@components/header"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import Maps from "@components/maps";
import Link from "next/link";
import Footer from "@components/footer";

type Loja = {
  id: number;
  grupo: string;
  nome_loja: string;
  categoria: string;
  image_url: string;
  endereco: string;
  mapa: string;
  telefone: string;
  whatsapp: string;
  instagram: string;
  site: string;
  descricao: string;
}

type Product = {
  id: number;
  store_id?: number | string;
  product_name?: string;
  nome?: string;
  descricao?: string;
  image_url?: string;
}

function PaginaLojaContent() {
  const [mapsApiKey, setMapsApiKey] = useState<string | null>(null);
  const [loja, setLoja] = useState<Loja | null>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const searchParams = useSearchParams();
  const lojaId = searchParams.get('loja');
  const grupo = searchParams.get('grupo');

  useEffect(() => {
    if (!lojaId) return;

    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products?store_id=${lojaId}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        setProducts(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, [lojaId]);

  useEffect(() => {
    if (!lojaId) return;
    
    fetch(`/api/stores/${lojaId}`)
      .then(res => res.json())
      .then(data => {
        setLoja(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [lojaId]);

  useEffect(() => {
    async function getMapsApiKey() {
      const response = await fetch('/api/getMapsApiKeys');
      if (!response.ok) return;
      const data = await response.json();
      setMapsApiKey(data.apiKey ?? null);
    }
    getMapsApiKey();
  }, []);

  const [selectedLoja, updateSelectedLoja] = useState<string>('')
  const updateSelecao = (resultado: string) => updateSelectedLoja(resultado)

  const showTelefone = () => {
    const phoneImage = document.getElementById('phoneImage');
    const telefoneButton = document.getElementById('telefone');
    if (telefoneButton?.innerHTML == 'Telefone') {
      if (phoneImage) phoneImage.className = 'hidden';
      telefoneButton.innerHTML = loja?.telefone || 'Telefone não disponível';
    } else {
      if (telefoneButton) {
        if (phoneImage) phoneImage.className = '';
        telefoneButton.innerHTML = 'Telefone';
      }
    }
  }

  const getCupons = async () => {
    let divCupons = document.querySelector('.cupons')
    if (true) {
      let desconto = Math.floor(Math.random() * 26) + 5;
      divCupons ? divCupons.innerHTML = `Você ganhou <b>${desconto}% de desconto</b> em sua compra` : ""
      let codigoCupom = Math.random().toString(36).substring(2, 15);
      divCupons ? divCupons.innerHTML += `<p>Use o cupom: ${codigoCupom}</p>` : ""
      try {
        const response = await fetch('/sendMail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: 'luciano.oliveira9603@gmail.com',
            subject: `Cupom ${codigoCupom}`,
            text: `Cupom de ${desconto}% de desconto. Cupom: ${codigoCupom}`
          }),
        });
        if (response.ok) console.log("Email enviado com sucesso")
        else console.log("Erro ao enviar email")
      } catch (error) {
        console.log("Erro ao enviar email no catch")
      }
    }
  }

  const productLabel = (product: Product) => product.product_name || product.nome || 'Produto';
  const productImage = (product: Product) => product.image_url || '/next.svg';

  if (loading) return <p className="text-center mt-10">Carregando...</p>
  if (!loja) return <p className="text-center mt-10">Loja não encontrada.</p>

  return (
    <>
      <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24 pt-2 pb-2 bg-[#6B6E4F]">
        <Header localLoja={updateSelecao} pageLoja={grupo} />
      </div>

      <div className="flex flex-col sm:flex-row pl-4 sm:pl-24 pr-4 sm:pr-24 gap-2 items-center mt-4">
        <div className="w-full sm:w-1/3">
          <Image src={loja.image_url || "/next.svg"} width={1000} height={1000} alt={"imagem da loja"} />
        </div>
        <div className="w-full sm:w-2/3 p-1 text-justify">
          <h1 className="text-3xl">{loja.nome_loja}</h1>
          <p>{loja.descricao}</p>
        </div>
      </div>

      <div className="pl-4 sm:pl-24 pr-4 sm:pr-24">
        <hr className="bg-slate-600 w-full pt-2 mt-2" />
      </div>

      <div className="flex flex-col sm:flex-row pl-4 sm:pl-24 pr-4 sm:pr-24 justify-between mt-3 pt-2">
        <div className="w-full flex flex-col gap-5">
          <h2 className="text-center text-xl">Entre em contato conosco</h2>
          <div>
            <div className="flex flex-row justify-around w-full">
              <Link href={`https://wa.me/${loja.whatsapp}`} className="hover:scale-110" target="_blank">
                <Image src={"/whatsapp-33P.png"} width={60} height={60} alt="icone whatsapp" />
              </Link>
              <div className="text-center flex flex-row items-center bg-blue-500 justify-center w-1/2 rounded-md hover:scale-95">
                <div id="phoneImage">
                  <Image src={"/phone_in_talk_24dp_FILL0_wght400_GRAD0_opsz24.svg"} width={40} height={40} alt={"icone telefone"} />
                </div>
                <button id="telefone" className="w-2/3 rounded text-lg sm:text-sm md:text-2xl lg:text-3xl text-white" onClick={showTelefone}>Telefone</button>
              </div>
              <Link href={loja.instagram || "/"} className="hover:scale-110" target="_blank">
                <Image src={"/instagram-40P.png"} width={60} height={60} alt="icone instagram" />
              </Link>
            </div>
          </div>

          <div className="w-full">
            <div className="bg-green-500 p-2 w-52 h-52 rounded-full m-auto">
              <button className="m-auto bg-orange-500 p-2 rounded-full w-48 h-48 text-center flex flex-col align-center justify-center items-center text-white cursor-pointer cupons" onClick={getCupons}>
                <p>Gerador de Cupons.</p>
                <p>Verifique aqui se a loja oferece descontos</p>
                <p>*lista cupons/loja</p>
              </button>
            </div>
          </div>
        </div>

        <div className="m-auto w-full border border-black overflow-hidden mt-1">
          <Maps local={loja.mapa} width={323} mapsApi={mapsApiKey} />
        </div>
      </div>

      <div className="pl-4 sm:pl-24 pr-4 sm:pr-24">
        <hr className="bg-slate-600 w-full pt-2 mt-2" />
      </div>

      <div className="pr-4 sm:pr-24 pl-4 sm:pl-24 w-full m-auto">
        <p className="text-center text-lg font-semibold p-2">Principais produtos da loja:</p>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 pb-2 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative h-40 w-full bg-slate-100">
                  <Image src={productImage(product)} alt={productLabel(product)} fill className="object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-slate-900">{productLabel(product)}</h3>
                  {product.descricao ? <p className="mt-2 text-sm text-slate-600">{product.descricao}</p> : null}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-slate-500 pb-2">Nenhum produto cadastrado para esta loja.</p>
        )}
      </div>

      <div className="pl-4 sm:pl-24 pr-4 sm:pr-24 mt-1 mb-1"><Footer /></div>
    </>
  )
}

export default function PaginaLoja() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Carregando...</p>}>
      <PaginaLojaContent />
    </Suspense>
  );
}
