'use client'

import Header from "@components/header"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react"
import Maps from "@components/maps";
import Link from "next/link";
import Footer from "@components/footer";
import BtnMPago from "@components/btnMPago";

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
  store_id: number;
  product_id: number;
  price: number | string;
  name: string;
  description?: string;
  image_url?: string | null;
}
type CartItem = Product & {
  quantity: number;
}

export default function PaginaLoja() {
  const [mapsApiKey, setMapsApiKey] = useState<string | null>(null);
  const [loja, setLoja] = useState<Loja | null>(null);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  const searchParams = useSearchParams();
  const lojaId = searchParams.get('loja');
  // const grupo = searchParams.get('grupo');
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (!lojaId) return;

    async function fetchProducts() {
      try {
        const response = await fetch(`/api/products?store_id=${lojaId}`);
        if (!response.ok) throw new Error('Failed to fetch products');
        const data = await response.json();
        console.log('Fetched products:', data);
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

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(
        item => item.id === product.id
      );
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1}
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  }

  const removeFromCart = (productId: number) => {
    setCart((currentCart) =>
      currentCart.map(item =>
        item.id === productId
          ? { ...item, quantity: item.quantity - 1}
          : item
      ).filter((item) => item.quantity > 0)
    );
  }

  const cartTotal = cart.reduce((total, item) => total + (Number(item.price) * item.quantity), 0);

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

  const productLabel = (product: Product) => product.name || 'Produto';
  const productImage = (product: Product) => {
    if (product.image_url) {
    return `/api/avatar/view?pathname=${encodeURIComponent(product.image_url)}`;
    }
    return '/camera500.jpg';
  }

  if (loading) return <p className="text-center mt-10">Carregando...</p>
  if (!loja) return <p className="text-center mt-10">Loja não encontrada.</p>

  return (
    <>
      <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24 pt-2 pb-2 bg-[#6B6E4F]">
        <Header isSingleStorePage={true} />
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
          <div className="grid grid-cols-2 gap-4 pb-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 max-h-[70vh] overflow-y-auto">
            {products.map((product) => (
              <article key={product.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-md transition hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-square w-full bg-slate-100">
                  <Image src={productImage(product)} alt={productLabel(product)} fill className="object-contain" />
                </div>
                <div className="p-2">
                  <h3 className="text-base font-semibold text-slate-900  whitespace-normal break-words">{product.name}</h3>
                  {product.description ? <p className="mt-2 text-sm text-slate-600 overflow-y-auto whitespace-normal break-words leading-6">{product.description}</p> : null}
                  <div>
                    <p className="mt-2 font-semibold text-slate-900">
                      R$ {Number(product.price).toFixed(2)}
                    </p>
                    <button
                      type="button"
                      onClick={() => addToCart(product)}
                      className="mt-2 w-full rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-400">
                    
                      Adic. ao carrinho
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-center text-sm text-slate-500 pb-2">Nenhum produto cadastrado para esta loja.</p>
        )}
      </div>
      <div className="pl-4 sm:pl-24 pr-4 sm:pr-24">
        <hr className="bg-slate-600 w-full pt-2 mt-2" />
      </div>
      <div className="ml-4 sm:ml-24 mr-4 sm:mr-24 mt-6 rounded-xl border border-slate-300 bg-white p-4 shadow-md">
        <h2 className="text-xl font-semibold text-slate-900">
          Carrinho
        </h2>

        {cart.length === 0 ? (
          <p className="mt-3 text-sm text-slate-500">
            Nenhum produto selecionado.
          </p>
        ) : (
          <>
            <div className="mt-4 max-h-64 space-y-3 overflow-y-auto">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between gap-3 border-b border-slate-200 pb-3"
                >
                  <div className="min-w-0">
                    <p className="break-words font-medium text-slate-900">
                      {item.name}
                    </p>

                    <p className="text-sm text-slate-600">
                      R$ {Number(item.price).toFixed(2)} x {item.quantity}
                    </p>
                  </div>

                  <div className="flex shrink-0 items-center gap-2">
                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="rounded bg-slate-200 px-2 py-1 text-slate-800 hover:bg-slate-300"
                      aria-label={`Remover uma unidade de ${item.name}`}
                    >
                      −
                    </button>

                    <span className="min-w-6 text-center">
                      {item.quantity}
                    </span>

                    <button
                      type="button"
                      onClick={() => addToCart(item)}
                      className="rounded bg-blue-500 px-2 py-1 text-white hover:bg-blue-600"
                      aria-label={`Adicionar uma unidade de ${item.name}`}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-between border-t border-slate-300 pt-4 text-lg font-bold">
              <span>Total:</span>
              <span>R$ {cartTotal.toFixed(2)}</span>
            </div>
          </>
        )}
      </div>
      <div className="pl-4 sm:pl-24 pr-4 sm:pr-24 mt-1 mb-1">
        <BtnMPago />
      </div>
      <div className="pl-4 sm:pl-24 pr-4 sm:pr-24 mt-1 mb-1"><Footer /></div>
    </>
  )
}
