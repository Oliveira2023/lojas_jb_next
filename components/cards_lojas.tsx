import Image from "next/image";
import Link from 'next/link'

type CardsLojasProps = {
    nome: string;
    gruppo: string;
    image: string;
    numLoja: number;
  };
export default function CardsLojas({ gruppo, image, nome, numLoja }: CardsLojasProps) {
    return (
        <>
            <div className="flex flex-col gap-2">
                <Link href={{pathname: "/page_loja", query: {loja: numLoja, grupo: gruppo}}}>
                    <div className="relative w-full h-auto overflow-hidden rounded-md hover:opacity-80 transition">
                        <Image className="w-full h-auto" src={image} width={200} height={200} alt={nome}/>
                    </div>
                </Link>
                <p className="text-xs text-left text-gray-700 truncate">{nome}</p>
            </div>
        </>       
    )
}
