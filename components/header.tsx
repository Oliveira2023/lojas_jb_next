
import Search from "@/app/ui/Search";
import { useEffect, useState } from "react";
import { sedan } from "@/app/ui/fonts";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import Select from "react-select";
import SelectCategories from "./selectCategories";

export default function Header({localLoja, pageLoja}: {localLoja: any, pageLoja: string | null}) {


    const [loja, setLoja] = useState<string>('Lojas Roland Garros')
    // const [lojaPage, setLojaPage] = useState<string>('')

    // useEffect(() =>{
    //   localLoja(loja);
    //     },[loja])

    function handleLocalLoja(loja: string) {
      setLoja(loja);
      localLoja(loja);
    }
      interface Option {
      value: string;
      label: string;
    }
    
    
   
    return (
      <>
        <nav className="">
          <ul className="flex flex-row items-start sm:items-center justify-between">
            <li>
              <Link className="w-14" href={"/"}>
                <div onClick={() => console.log("voltar ao inicio")}>
                  <Image src="/home_24dp_FILL0_wght400_GRAD0_opsz24.svg" width={30} height={30} alt="logo" />
                </div>
              </Link>
            </li>
            <li className="flex flex-row items-center hover:scale-110">
              <select
                className={pageLoja !== null ? "hidden" : "select w-full text-lg sm:text-lg py-1 appearance-none cursor-pointer transition"}
                name="lojas"
                onChange={(e) => handleLocalLoja(e.target.value)}
                aria-label="Selecione a Loja"
                style={{ height: '100%', boxShadow: 'none', background: 'transparent', border: 'none', outline: 'none', paddingLeft: 0, paddingRight: 0, color: '#fff' }}
              >
              <option className={`${styles.selectOption}`} value="Lojas Roland Garros">Lojas Roland Garros</option>
              <option className={`${styles.selectOption}`} value="Lojas Jardim Japão">Lojas Jardim Japão</option>
              <option className={`${styles.selectOption}`} value="Lojas Edu Chaves">Lojas Edu Chaves</option>
            </select>
            </li>
            <li>
              <SelectCategories
                getStyles
              />
            </li>
            <li className="transition-hover duration-300 hover:scale-110">
              <select
                className={`${styles.select} text-lg sm:text-lg ease-in-out`}
                name="categorias"
                aria-label="Selecione a Categoria"
                defaultValue=""
                onChange={e => e.target.value && handleLocalLoja(e.target.value)}
              >
                <option value="" disabled hidden>Categorias</option>
                <option className={`${styles.selectOption}`} value="Farmácias">Farmácia</option>
                <option className={`${styles.selectOption}`} value="Mercados">Mercado</option>
                <option className={`${styles.selectOption}`} value="Bebidas">Bebidas</option>
                <option className={`${styles.selectOption}`} value="Celulares">Celulares</option>
                <option className={`${styles.selectOption}`} value="Óticas">Óticas</option>
                <option className={`${styles.selectOption}`} value="Vestuário">Vestuário</option>
                <option className={`${styles.selectOption}`} value="Construção">Construção</option>
                <option className={`${styles.selectOption}`} value="Salão de Beleza">Salão de Beleza</option>
                <option className={`${styles.selectOption}`} value="Avículas">Avículas</option>
                <option className={`${styles.selectOption}`} value="Utilidades">Utilidades</option>
                <option className={`${styles.selectOption}`} value="Presentes">Presentes</option>
                <option className={`${styles.selectOption}`} value="Restaurantes">Restaurantes</option>
              </select>
            </li>
            <li className="flex flex-row items-center hover:scale-110">
              <select
                className={`${styles.select} w-full text-lg sm:text-lg py-1 appearance-none cursor-pointer transition bg-transparent border-none outline-none text-white`}
                name="produtos"
                aria-label="Selecione o Produto"
                defaultValue=""
                onChange={e => e.target.value && handleLocalLoja(e.target.value)}
                >
                <option className={`${styles.selectOption}`} value="" disabled hidden>Produtos</option>
                <option className={`${styles.selectOption}`} value="Remédios">Remédios</option>
                <option className={`${styles.selectOption}`} value="Roupas">Roupas</option>
                <option className={`${styles.selectOption}`} value="Pão">Pão</option>
                <option className={`${styles.selectOption}`} value="Vinhos">Vinhos</option>
                <option className={`${styles.selectOption}`} value="Refrigerante">Refrigerante</option>
                <option className={`${styles.selectOption}`} value="Cerveja">Cerveja</option>

              </select>
            </li>
            <li>
              <Search placeholder= "Buscar pelas melhores lojas" />
            </li>

          </ul>
        </nav>
      </>
    )
}
