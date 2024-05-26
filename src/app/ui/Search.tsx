'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import search from '@utils/search';
import CardsLojas from '@components/cards_lojas';


export default function Search({placeholder}: {placeholder: string}) {
    
    const [inputtxt, setInputtxt] = useState("");
    const [lojas, setLojas] = useState<any[]>([]);

    // var lojas: any[] = [];

    async function handleSearch(term: string){
        setInputtxt(term);
        
        // await search(term).then((results) => results.forEach((result) => lojas?.push(result)));
        // console.log(lojas);

        try {
            const results = await search(term);
            setLojas(results); // Atualiza o estado das lojas com os resultados da busca
          } catch (error) {
            console.error("Erro ao buscar lojas:", error);
          }
    }

    return (
        <>
            <div className='relative flex flex1 flex-shrink-0'>
                <label htmlFor="search" className='sr-only'>Search</label>
                <input
                className='w-full rounded-md border border-gray-200 py-1 pl-10 text-xl text-neutral-950 placeholder:text-gray-400'
                placeholder={'Buscar pelas melhores lojas'}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={inputtxt}
                name='search'
                id='search'
                />
                <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />

                {/* <button className='absolute right-0 top-1/2 h-full rounded-md w-[55px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900 bg-fuchsia-400' onClick={() => console.log(inputtxt)}>Buscar</button> */}
            </div>
            <div className={lojas.length <= 0? 'hidden': 'flex flex-row w-full items-center gap-1 h-12 p-0 mt-1' }>
                {(lojas.length > 0) && lojas.map((loja) => (
                    <div className='w-1/6' key={loja.numLoja}>
                        <CardsLojas nome={loja.numLoja} image={loja.imageUrl} href={"/page_loja"}/>
                    </div>
                ))}
            </div>
        </>

    )
}
