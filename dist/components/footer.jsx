import Link from "next/link";
import Image from "next/image";
export default function Footer() {
    return (<>
            <div className="flex flex-col sm:flex-row justify-between text-sm w-full bg-slate-50">
                <div className="w-full sm:w-1/3 p-2 border border-black ">
                    <h2 className="text-center text-xl">As lojas</h2>
                    <p className="">
                        O projeto tem a finalidade de reunir o comércio local e integra as seguintes avenidas principais:
                    </p>
                    <ul className="">
                        <li className="list-disc">Roland Garros</li>
                        <li>Jardim Japão</li>
                        <li>Eduardo Chaves</li>
                    </ul>
                </div>
                <div className="w-full sm:w-1/3 p-2 border border-black">
                    <h2 className="text-center text-xl">Projeto</h2>
                    <p className="text-justify">O Lojas Jardim Brasil é o portal de busca de lojas, produtos e serviços, das pricipais avenidas e é um guia local. A página oferece ferramentas digitais para fazer seu negócio ser encontrado por quem precisa.</p>
                </div>
                <div className="w-full sm:w-1/3 p-2 border border-black">
                    <h2 className="text-center text-xl">Encontre-nos</h2>
                    <div className="flex flex-row justify-around p-2">
                        <Link href={"https://www.instagram.com/luciano.oliveira.3154284/"} target="_blank">
                                <Image src={"/instagram-40P.png"} width={40} height={40} alt="icone whatsapp"></Image>
                        </Link>
                        <Link href={"https://wa.me/5511963591532"} target="_blank">
                            <Image src={"/whatsapp-33P.png"} width={40} height={40} alt="icone whatsapp"></Image>
                        </Link>
                        <Link href={"https://www.linkedin.com/in/luciano-oliveira-87a17682/"} target="_blank">
                            <Image src={"/linkedin.png"} width={40} height={40} alt="icone whatsapp"></Image>
                        </Link>
                    </div>
                    <p className="text-center p-4">luciano96@yahoo.com.br</p>
                    <p className="text-center">11 96359-1532</p>
                </div>
            </div>
        </>);
}
