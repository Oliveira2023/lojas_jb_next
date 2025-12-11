import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import manageHight from "@utils/manageHight";
import styles from "./Produtos.module.css";

export default function Produtos({adjustcategoria, categoriaHome}: any) {

    // const [categoria, updateCategoria] = useState<string>('Lojas Roland Garros')
    // console.log("categoria", categoria);
   
    const [altura, updateAltura] = useState<number>(270); 
    
    function handleSelect(e: any) {
        // updateCategoria(e);
        adjustcategoria(e);
        // window.scrollTo({ top: 1000, behavior: 'smooth' });
        console.log("handleSelect1:", e);
    }

    const handleHight =  () => {
        var data =  manageHight();
        updateAltura(data);
        console.log("retorno altura", data);
    }
    useEffect(() => {
        handleHight();
        window.addEventListener('resize', handleHight);
        return () => {
            window.removeEventListener('resize', handleHight);
        }
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

    return (
        <div className="p-0">
            <h1 className={`${styles.title} flex items-center justify-center text-2xl w-full text-white border h-10`}>Produtos</h1>
            <div className="overflow-y-scroll mt-1 bg-slate-50" style={{height: `${altura}px`, overflowX: "hidden"}}>
                <ul className="">
                    {/* o que vai escrito sobre o hero é nome do updateCategoria(este nome) */}
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Farmácias')}>Remédios</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Mercados')}>Roupas</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Óticas')}>Pão</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Vestuário')}>Vinhos</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Construção')}>Refrigerante</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Salão de Beleza')}>Cerveja</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Avículas')}>Arroz</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Categoria 8')}>Produto 8</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Categoria 9')}>Produto 9</button></Link>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <Link href={"/#cards"}><button className="w-full" onClick={() => handleSelect('Categoria 10')}>Produto 10</button></Link>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}
