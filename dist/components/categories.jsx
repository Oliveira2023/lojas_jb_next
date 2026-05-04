import Link from "next/link";
import { useEffect, useState } from "react";
import manageHight from "@utils/manageHight";
export default function Categories({ adjustcategoria, categoriaHome }) {
    // const [categoria, updateCategoria] = useState<string>('Lojas Roland Garros')
    // console.log("categoria", categoria);
    const [altura, updateAltura] = useState(270);
    function handleSelect(e) {
        // updateCategoria(e);
        adjustcategoria(e);
        // window.scrollTo({ top: 1000, behavior: 'smooth' });
        console.log("handleSelect1:", e);
    }
    const handleHight = () => {
        var data = manageHight();
        updateAltura(data);
        console.log("retorno altura", data);
    };
    useEffect(() => {
        handleHight();
        window.addEventListener('resize', handleHight);
        return () => {
            window.removeEventListener('resize', handleHight);
        };
    }, []);
    // useEffect(() => {
    //     console.log("useEffect categories")
    //     adjustcategoria(categoria);
    //     window.addEventListener('resize', handleHight);
    //     handleHight();
    //     return () => {
    //         window.removeEventListener('resize', handleHight);
    //         // window.removeEventListener('load', handleHight);
    //     }
    // }, [categoria]);
    return (<div className="p-0">
            <h1 className="bg-gray-500 flex items-center justify-center text-2xl w-full text-white border h-10">Categorias</h1>
            <div className="overflow-y-scroll mt-1 bg-slate-50" style={{ height: `${altura}px`, overflowX: "hidden" }}>
                <ul className="">
                    {/* o que vai escrito sobre o hero é nome do updateCategoria(este nome) */}
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Farmácias')}>Farmácia</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Mercados')}>Mercado</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Óticas')}>Óticas</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Vestuário')}>Vestuário</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Construção')}>Construção</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Salão de Beleza')}>Salão de Beleza</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Avículas')}>Avículas</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Categoria 8')}>Categoria 8</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Categoria 9')}>Categoria 9</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Categoria 10')}>Categoria 10</button></Link>
                    </li>
                </ul>
            </div>
            
        </div>);
}
