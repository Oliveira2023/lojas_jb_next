'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import search from '@utils/search';
import CardsLojas from '@components/cards_lojas';


export default function Search({placeholder, resetToken}: {placeholder: string, resetToken?: number}) {
    
    const [inputtxt, setInputtxt] = useState("");
    const [lojas, setLojas] = useState<any[]>([]);

    useEffect(() => {
        setInputtxt("");
        setLojas([]);
    }, [resetToken]);

    async function handleSearch(term: string){
        setInputtxt(term);
        
        try {
            const results = await search(term);
            setLojas(results); // Atualiza o estado das lojas com os resultados da busca
          } catch (error) {
            console.error("Erro ao buscar lojas:", error);
          }
    }
    return (
        <>
            <div className='relative flex flex-1 flex-shrink-0 w-full'>
                <label htmlFor="search" className='sr-only'>Search</label>
                <input
                className='w-full rounded-md border border-gray-200 py-1 pl-10 text-lg text-neutral-950 placeholder:text-gray-400'
                placeholder={'Buscar pelas melhores lojas'}
                onChange={(e) => handleSearch(e.target.value)}
                defaultValue={inputtxt}
                name='search'
                id='search'
                />
                <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />

                {/* Search Results Dropdown */}
                {inputtxt.length > 0 && (
                    <div className='absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-50 overflow-hidden'>
                        {lojas.length <= 0 ? (
                            <div className='w-full h-12 bg-fuchsia-400 flex items-center justify-center text-sm'>
                                Nenhuma loja encontrada
                            </div>
                        ) : (
                            <div className='relative'>
                                <div className='flex flex-row flex-wrap items-start gap-3 p-3 max-h-96 overflow-y-auto pb-10'>
                                    {lojas.map((loja) => (
                                        <div className='w-20 sm:w-24' key={loja.numLoja}>
                                            <CardsLojas gruppo={loja.numLoja} image={loja.imageUrl} nome={loja.nomeLoja} numLoja={loja.numLoja}/>
                                        </div>
                                    ))}
                                </div>
                                <div className='pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-b from-transparent to-white' />
                            </div>
                        )}
                    </div>
                )}

            </div>
        </>

    )
}
