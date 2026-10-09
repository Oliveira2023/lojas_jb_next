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
import { clear } from "console";

export default function Hero({local}: {local: string}) {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
    const [loja, updateLoja] = useState<string>('Lojas Roland Garros');
    const node: any = useRef(null);
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const [isManualMode, setIsManualMode] = useState<boolean>(false);

    const clickNext = () => {
        setIsManualMode(true);
        stopAutoPlay();
        if (activeImgIndex < images.length - 1) {
            setActiveImgIndex(activeImgIndex + 1)
        }else {
            setActiveImgIndex(0)
        }
    }
    const clickPrev = () => {
        setIsManualMode(true);
        stopAutoPlay();
        if (activeImgIndex > 0) {
            setActiveImgIndex(activeImgIndex - 1)
        }else {
            setActiveImgIndex(images.length - 1)
        }
    }

    const startAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setActiveImgIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
        }, 2000);
    }
    const stopAutoPlay = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
    }

    const handleMouseEnter = () => {
        stopAutoPlay();
    }

    const handleMouseLeave = () => {
        setIsManualMode(false);
        startAutoPlay();
    }

    useEffect(() => {
        startAutoPlay();
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        }
    }, []);

    const updateSelecao = (selecao: string) => {
        updateLoja(selecao)
      }
    return (
        <>
            <div id="hero" className="h-full flex flex-row justify-between" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                
                {/* div carrousel */}
                <div className="w-full aspect-[1280/844] relative">
                    {images.map((image, index) => (
                        <div key={image.Id} className={`${
                            index === activeImgIndex ? "block w-full": "hidden"} relative`}>
                            <Image
                            src={image.src}
                            width={1280} height={844}
                            alt={image.alt}
                            priority={index === 0}
                            unoptimized={image.src.startsWith('http')}
                            placeholder = 'empty'
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            />
                            <div className="text-center text-white bg-black bg-opacity-50 p-2 w-full absolute bottom-0">
                                <p>{images[activeImgIndex].title}</p>
                                <p>{images[activeImgIndex].description}</p>
                            </div>
                        </div>
                    ))}
                    {/* arrows */}
                    <div onClick={clickPrev} className="z-10 absolute top-1/2 left-1 -translate-y-1/2 hover:bg-opacity-50 hover:bg-slate-400 rounded-full cursor-pointer">
                    <Image src={left} width={44} height={44} alt="seta a esquerda" />
                    </div>
                    <div onClick={clickNext} className="z-10 absolute top-1/2 right-1 -translate-y-1/2 hover:bg-opacity-50 hover:bg-slate-400 rounded-full cursor-pointer">
                    <Image src={right} width={44} height={44} alt="seta a direita" />
                    </div>

                    {/* dots (only this one block) */}
                    <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((image, index) => (
                            <div
                            key={index}
                            onClick={() => {
                                setIsManualMode(true);
                                stopAutoPlay();
                                setActiveImgIndex(index);
                            }}
                            className={`h-2 rounded-full transition-all cursor-pointer ${
                                index === activeImgIndex ? 'w-8 bg-gray-400' : 'w-2 bg-gray-400 hover:bg-gray-300'
                            }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
            
        </>

    )
}
