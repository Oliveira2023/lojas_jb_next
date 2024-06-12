'use client'

import Image from "next/image";
import Descriptions from "@components/descriptions";
import right from "@public/chevron_right_FILL0_wght400_GRAD0_opsz24.svg";
import left from "@public/chevron_left_FILL0_wght400_GRAD0_opsz24.svg";
import banerLateral from "@public/pexels-a-darmel-h844.jpg"
import { useEffect, useState } from "react";
import { images } from "@utils/heroslide";

export default function Hero({local}: {local: string}) {
    const [activeImgIndex, setActiveImgIndex] = useState(0);
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
    return (
        <>
            <h1 className="bg-gray-500 p-2 text-center text-1xl sm:text-3xl text-white">{local}</h1>
            <div className="flex flex-row  bg-blue-500 justify-between mt-1 h-auto sm:h-[370px]">
                <div className="w-[1280px] m-2 relative">
                    {images.map((image, index) => (
                        <div key={image.Id} className={`${
                            index === activeImgIndex ? "block w-full bg-slate-50 priority={false}": "hidden"}`}>
                            <Image
                            src={image.src}
                            width={1280} height={844}
                            alt={image.alt} />
                        </div>
                    ))}
                    <div className="">
                    <Descriptions 
                    clickNext={clickNext}
                    clickPrev={clickPrev}
                    activeImgIndex={activeImgIndex}
                    />
                    </div>

                    <div onClick={clickPrev} className="absolute top-1/2 left-0">
                        <Image src={left} width={44} height={44} alt=""></Image>
                    </div>
                    <div onClick={clickNext} className="absolute top-1/2 right-0">
                        <Image src={right} width={44} height={44} alt=""></Image>
                    </div>
                </div>
                <div className=" w-[450px] m-2 p-0 relative ">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'top', backgroundColor: 'green' }}>
                    <Image src={banerLateral} width={450} height={844} alt="banner lateral"/>
                    </div>
                    <div className="border-2 border" style={{height: "50px"}}>
                        <p>descrição banner lateral</p>
                    </div>
                    
                </div>
            </div>
        </>

    )
}