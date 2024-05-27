import Image from "next/image";
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { Query } from "pg";

type CardsLojasProps = {
    nome: string;
    image: string;
    href: any;
    numLoja: string
  };
export default function CardsLojas({ nome, image, href, numLoja }: CardsLojasProps) {
    // console.log({image})
    return (
        <>
            <div className="">
                <Link href={{pathname: href, query: {loja: numLoja, grupo: nome}}}>
                    <Image className="" src={image} width={1000} height={1000} alt={nome}/>
                </Link>
            </div>
        </>       
    )
}
