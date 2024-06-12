'use client'
import Header from "@components/header"
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ListaLojas } from "@utils/listaLojas";
import { Suspense, useEffect, useState } from "react"
import Maps from "@components/maps";
import Link from "next/link";
import Footer from "@components/footer";




export default function PaginaLoja({image}: any) {

    const searchParams = useSearchParams();
    const search = searchParams.get('loja');
    const grupo = searchParams.get('grupo');

    let imageUrl;
    let descricao;
    let titulo;
    let buscaMapa;
    ListaLojas.map((loja)=>{
        if (search == loja.numLoja){
            imageUrl= loja.imageUrl
            descricao = loja.descricao
            titulo = loja.nomeLoja
            buscaMapa = loja.mapa
        }
    })
    const [loja, updateLoja] = useState<string>('')
    const [isMobile, setIsMobile] = useState<boolean>(false)

    // useEffect(() => {
    // },[])
    const updateSelecao = (resultado: string) => {
        updateLoja(resultado)
    }
    // window.innerWidth < 640 ? setIsMobile(true) : setIsMobile(false)
    console.log(isMobile)

    return (
        <>
            <div className="w-full pl-4 sm:pl-24 pr-4 sm:pr-24 pt-2 pb-2 bg-yellow-400" >
                <Header localLoja={updateSelecao} pageLoja={grupo} />
            </div>
            {/* <h1>Pagina Loja {loja}</h1> */}
            <div className="flex flex-col sm:flex-row pl-4 sm:pl-24 pr-4 sm:pr-24 gap-2 items-center mt-4">
                <div className="w-full sm:w-1/3">
                        <Image src={imageUrl? imageUrl : "/next.svg"} width={1000} height={1000} alt={"imagem da loja"}></Image>
                    </div>
                    <div className="w-full sm:w-2/3 p-1 text-justify">
                        <h1 className="text-3xl">{titulo}</h1>
                        <p>{descricao}</p>
                    </div>
            </div>
            <div className="pl-4 sm:pl-24 pr-4 sm:pr-24">
                <hr className=" bg-slate-600 w-full pt-2 mt-2"/>
            </div>
            <div className="flex flex-col sm:flex-row pl-4 sm:pl-24 pr-4 sm:pr-24 justify-between mt-3 pt-2">
                <div className="w-full flex flex-col gap-5">
                    <h2 className="text-center text-xl">Entre em contato conosco</h2>
                    <div>
                        <div className="flex flex-row justify-around w-full">
                            <Link href={"/"} className="hover:scale-110">
                                <Image src={"/whatsapp-33P.png"} width={60} height={60} alt="icone whatsapp"></Image>
                            </Link>

                            <div className="text-center flex flex-row items-center bg-blue-500 justify-center w-1/2 rounded-md hover:scale-95">
                                <Image src={"/phone_in_talk_24dp_FILL0_wght400_GRAD0_opsz24.svg"} width={40} height={40} alt={"icone telefone"}/>
                                <button className="w-2/3 rounded text-lg sm:text-3xl text-white">Telefone</button>
                            </div>

                            <Link href={"/"} className="hover:scale-110">
                                <Image src={"/instagram-40P.png"} width={60} height={60} alt="icone whatsapp"></Image>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" bg-green-500 p-2 w-52 h-52 rounded-full m-auto">
                            <div className="m-auto bg-orange-500 p-2 rounded-full w-48 h-48 text-center flex flex-col align-center justify-center items-center text-white cursor-pointer">
                                <p>Gerador de Cupons.</p>
                                <p>Verifique aqui se a loja oferece descontos</p>
                                <p>*lista cupons/loja</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="m-auto w-full border border-black overflow-hidden mt-1">
                <Maps local={buscaMapa} width={323}/>
                </div>
            </div>
            <div className="pr-4 sm:pr-24 pl-4 sm:pl-24 w-full m-auto">
                <p className="text-center">Principais produtos da loja:</p>
                <ul className=" bg-slate-300 grid grid-cols-2 sm:grid-cols-4 w-full justify-center gap-0 items-center">
                    <li className="w-auto sm:w-52 p-2 m-1 bg-blue-500"> 
                        <Image src={"/camera500.jpg"} width={500} height={500} alt={"imagem da loja"} />
                    <p className="text-center">produto1</p>
                    </li>
                    <li className="w-auto sm:w-52 p-2 m-1 bg-blue-500">
                        <Image src={"/camera500.jpg"} width={500} height={500} alt={"imagem da loja"} />
                        <p className="text-center">produto2</p>
                    </li>
                    <li className="w-auto sm:w-52 p-2 m-1 bg-blue-500"> 
                        <Image src={"/camera500.jpg"} width={500} height={500} alt={"imagem da loja"} />
                    <p className="text-center">produto3</p>
                    </li>
                    <li className="w-auto sm:w-52 p-2 m-1 bg-blue-500"> 
                        <Image src={"/camera500.jpg"} width={500} height={500} alt={"imagem da loja"} />
                    <p className="text-center">produto4</p>
                    </li>
                    <li className="w-auto sm:w-52 p-2 m-1 bg-blue-500"> 
                        <Image src={"/camera500.jpg"} width={500} height={500} alt={"imagem da loja"} />
                    <p className="text-center">produto4</p>
                    </li>
                    <li className="w-auto sm:w-52 p-2 m-1 bg-blue-500"> 
                        <Image src={"/camera500.jpg"} width={500} height={500} alt={"imagem da loja"} />
                    <p className="text-center">produto4</p>
                    </li>
                </ul>
            </div>
            <div className="pl-4 sm:pl-24 pr-4 sm:pr-24 mt-1 mb-1"><Footer/></div>

        </>
    )
}