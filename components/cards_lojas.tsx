import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Query } from "pg";

type CardsLojasProps = {
    nome: string;
    image: string;
    href: any;
  };
export default function CardsLojas({ nome, image, href }: CardsLojasProps) {
    
    return (
        <>
            <div className="">
                <Link href={{pathname: href, query: {loja: nome}}}>
                    <Image className="" src={image} width={1000} height={1000} alt={nome}/>
                </Link>
            </div>
        </>       
    )
}
