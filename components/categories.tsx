
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import manageHight from "@utils/manageHight";
export default function Categories({adjustcategoria, categoriaHome}: any) {

    const [categoria, updateCategoria] = useState<string>('Lojas Roland Garros')
    console.log("categoria", categoria);
   
    const [altura, updateAltura] = useState<number>(270); 
    
    function handleSelect(e: any) {
        updateCategoria(e);
        adjustcategoria(e);
        console.log("handleSelect:", e);
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
            <h1 className="bg-gray-500 flex items-center justify-center text-2xl w-full text-white border h-10">Categorias</h1>
            <div className="overflow-y-scroll mt-1 bg-slate-50" style={{height: `${altura}px`, overflowX: "hidden"}}>
                <ul className="">
                    {/* o que vai escrito sobre o hero é nome do updateCategoria(este nome) */}
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => handleSelect('Farmácias')}>Farmácia</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => handleSelect('Mercados')}>Mercado</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => handleSelect('Óticas')}>Óticas</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => updateCategoria('Vestuário')}>Vestuário</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => updateCategoria('Construção')}>Construção</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => updateCategoria('Categoria 6')}>Categoria 6</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => updateCategoria('Categoria 7')}>Categoria 7</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => updateCategoria('Categoria 8')}>Categoria 8</button>
                        </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => updateCategoria('Categoria 9')}>Categoria 9</button>
                    </li>
                    <li className="categories p-2 text-2xl">
                        <button className="w-full" onClick={() => updateCategoria('Categoria 10')}>Categoria 10</button>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}