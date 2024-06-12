import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { translate } from "ol/transform";
import { useState } from "react";

type CardsLojasProps = {
    nome: string;
    gruppo: string;
    image: string;
    numLoja: string
  };
export default function CardsLojas({ gruppo, image, nome, numLoja }: CardsLojasProps) {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <>
                  
            <div className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            >
                <Link href={{pathname: "/page_loja", query: {loja: numLoja, grupo: gruppo}}}>
                    <Image className="" src={image} width={1000} height={1000} alt={nome}/>
                </Link>
                {isHovered && <p className="text-center absolute bottom-0 left-1/2 w-full z-10" style={{background: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '5px', borderRadius: '5px', transform: 'translate(0,-100%)', fontSize: "1vw"}}>{nome}</p>}
            </div>
        </>       
    )
}
