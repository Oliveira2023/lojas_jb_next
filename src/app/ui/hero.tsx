'use client'

import Image from "next/image";
import Descriptions from "@components/descriptions";
import right from "@public/chevron_right_FILL0_wght400_GRAD0_opsz24.svg";
import left from "@public/chevron_left_FILL0_wght400_GRAD0_opsz24.svg";
import banerLateral from "@public/pexels-a-darmel-h844.jpg"
import { useEffect,useRef, useState } from "react";
import { images } from "@utils/heroslide";
import Categories from "@components/categories";
import manageHight from "@utils/manageHight";

export default function Hero({local}: {local: string}) {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [loja, updateLoja] = useState<string>('Lojas Roland Garros');
    const node: any = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const clickNext = () => {
        if (activeImgIndex < images.length - 1) {
            setActiveImgIndex(activeImgIndex + 1)
        }else {
            setActiveImgIndex(0)
        }
    }
    const clickPrev = () => {
        if (activeImgIndex > 0) {
            setActiveImgIndex(activeImgIndex - 1)
        }else {
            setActiveImgIndex(images.length - 1)
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            clickNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [activeImgIndex]);

    const updateSelecao = (selecao: string) => {
        updateLoja(selecao)
      }
    return (
        <>
            {/* <h1 className="bg-[#3B9F4E] mx-1 flex items-center justify-center text-1xl sm:text-3xl text-white h-10 border">{local}</h1> */}
            {/*  carrousel + banner lateral */}
            <div id="hero" className="flex flex-row justify-between ">
                
                {/* div carrousel */}
                <div className="w-full relative">
                    {images.map((image, index) => (
                        <div key={image.Id} className={`${
                            index === activeImgIndex ? "block w-full": "hidden"}`}>
                            <Image
                            src={image.src}
                            width={1280} height={844}
                            alt={image.alt}
                            priority={true}
                            placeholder = 'empty'
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                            />
                        </div>
                        
                    ))}
                    <div className="text-center text-white bg-black bg-opacity-50 p-2 w-full absolute bottom-0">
                        <p>{images[activeImgIndex].title}</p>
                        <p>{images[activeImgIndex].description}</p>
                    </div>

                    <div onClick={clickPrev} className="z-10 absolute top-1/3 left-1 transform-translate-y-1/2 hover:bg-opacity-50 hover:bg-slate-400 rounded-full">
                        <Image src={left} width={44} height={44} alt="seta a esquerda"></Image>
                    </div>
                    <div onClick={clickNext} className="absolute top-1/3 right-0 transform-translate-y-1/2 hover:bg-opacity-50 hover:bg-slate-400 rounded-full">
                        <Image src={right} width={44} height={44} alt=""></Image>
                    </div>
                </div>
            </div>
        </>

    )
}
