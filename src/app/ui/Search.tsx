'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Search({placeholder}: {placeholder: string}) {
    
    const [inputtxt, setInputtxt] = useState("");
    function handleSearch(term: string){
        setInputtxt(term);
    }

    return (
        <div className='relative flez flex1 flex-shrink-0'>
            <label htmlFor="search" className='sr-only'>Search</label>
            <input
            className='peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-neutral-950 outline-2 placeholder:text-gray-500' 
            placeholder={placeholder}
            onChange={(e) => handleSearch(e.target.value)}
            defaultValue={inputtxt}
            name='search'
            id='search'
            />
            <MagnifyingGlassIcon className='absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900' />
        </div>

    )
}
