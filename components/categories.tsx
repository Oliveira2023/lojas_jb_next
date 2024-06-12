
import { useEffect, useState } from "react";
export default function Categories({adjustcategoria}: any) {

    const [categoria, updateCategoria] = useState<string>('Lojas Roland Garros')

    useEffect(() => {
        adjustcategoria(categoria);
    }, [categoria])

    return (
        <div className="p-0">
            <h1 className="bg-gray-500 p-2 text-center text-3xl w-full text-white">Categorias</h1>
            <div className="overflow-scroll overflow-x-hidden mt-1" style={{height: '370px', overflowX: 'hidden'}}>
                <ul className="">
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button className="" onClick={() => updateCategoria('Farmácias')}>Farmácia</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Mercados')}>Mercado</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Oticas')}>Ótica</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Vestuário')}>Vestuário</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Construção')}>Construção</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Categoria 6')}>Categoria 6</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Categoria 7')}>Categoria 7</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Categoria 8')}>Categoria 8</button>
                        </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Categoria 9')}>Categoria 9</button>
                    </li>
                    <li className="categories p-2 text-2xl" style={{borderBottom: '2px dashed black'}}>
                        <button onClick={() => updateCategoria('Categoria 10')}>Categoria 10</button>
                    </li>
                </ul>
            </div>
            
        </div>
    );
}