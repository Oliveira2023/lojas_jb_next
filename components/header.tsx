
import Search from "@/app/ui/Search";
import { useState } from "react";
import Link from "next/link";
import Select from "react-select";

const streetOptions = [
  { value: "Lojas Roland Garros", label: "Lojas Roland Garros" },
  { value: "Lojas Jardim Japão", label: "Lojas Jardim Japão" },
  { value: "Lojas Edu Chaves", label: "Lojas Edu Chaves" },
];

const categoryOptions = [
  { value: "Farmácias", label: "Farmácia" },
  { value: "Mercados", label: "Mercado" },
  { value: "Bebidas", label: "Bebidas" },
  { value: "Celulares", label: "Celulares" },
  { value: "Óticas", label: "Óticas" },
  { value: "Vestuário", label: "Vestuário" },
  { value: "Construção", label: "Construção" },
  { value: "Salão de Beleza", label: "Salão de Beleza" },
  { value: "Avículas", label: "Avículas" },
  { value: "Utilidades", label: "Utilidades" },
  { value: "Presentes", label: "Presentes" },
  { value: "Restaurantes", label: "Restaurantes" },
];

const productOptions = [
  { value: "Remédios", label: "Remédios" },
  { value: "Roupas", label: "Roupas" },
  { value: "Pão", label: "Pão" },
  { value: "Vinhos", label: "Vinhos" },
  { value: "Refrigerante", label: "Refrigerante" },
  { value: "Cerveja", label: "Cerveja" },
];

const selectLikeStreetStyles = {
  container: (base: any) => ({
    ...base,
    width: "100%",
  }),
  control: (base: any) => ({
    ...base,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
    minHeight: "auto",
    cursor: "pointer",
    alignItems: "center",
    fontSize: "1.125rem",
    flexWrap: "nowrap",
  }),
  valueContainer: (base: any) => ({
    ...base,
    padding: "0 2px",
  }),
  placeholder: (base: any) => ({
    ...base,
    color: "#fff",
    fontSize: "1.125rem",
    whiteSpace: "nowrap",
  }),
  singleValue: (base: any) => ({
    ...base,
    color: "#fff",
    fontSize: "1.125rem",
    whiteSpace: "nowrap",
  }),
  menu: (base: any) => ({
    ...base,
    zIndex: 9999,
    width: "max-content",
    minWidth: "100%",
    maxWidth: "min(24rem, calc(100vw - 1rem))",
    boxSizing: "border-box",
  }),
  menuPortal: (base: any) => ({
    ...base,
    zIndex: 9999,
  }),
  menuList: (base: any) => ({
    ...base,
    width: "max-content",
    minWidth: "100%",
  }),
  option: (base: any, state: any) => ({
    ...base,
    fontSize: "1rem",
    color: "#000",
    backgroundColor: state.isFocused ? "#f3f4f6" : "#fff",
    whiteSpace: "nowrap",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (base: any) => ({
    ...base,
    display: "flex",
    color: "#fff",
    padding: "0 4px",
  }),
  input: (base: any) => ({
    ...base,
    color: "#fff",
  }),
};

const streetSelectStyles = {
  ...selectLikeStreetStyles,
  container: (base: any) => ({
    ...base,
    width: "100%",
    minWidth: "14rem",
    maxWidth: "18rem",
  }),
};

const secondarySelectStyles = {
  ...selectLikeStreetStyles,
  container: (base: any) => ({
    ...base,
    width: "100%",
    minWidth: "7rem",
    maxWidth: "10rem",
  }),
};

export default function Header({localLoja, pageLoja}: {localLoja: any, pageLoja: string | null}) {

    const [loja, setLoja] = useState<string>('Lojas Roland Garros')
    const [resetCounter, setResetCounter] = useState(0)

    function handleLocalLoja(loja: string) {
      setLoja(loja);
      localLoja(loja);
    }

    function handleHomeClick() {
      setLoja('')
      localLoja('')
      setResetCounter(counter => counter + 1)
    }

    const selectedStreetOption = streetOptions.find(option => option.value === loja) ?? null;
    const menuPortalTarget = typeof window !== "undefined" ? document.body : null;

    return (
      <>
        <nav className="">
          <ul className="flex flex-row items-start sm:items-center justify-between">
            <li>
              <Link className="w-14" href={"/"}>
                <div onClick={handleHomeClick} className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-blue-500 text-white font-bold text-sm leading-none cursor-pointer">
                  <p>JB</p>
                </div>
              </Link>
            </li>
            <li className="w-[13rem] sm:w-[16rem] transition-hover duration-300 hover:scale-110">
              <Select
                key={`street-${resetCounter}`}
                options={streetOptions}
                value={selectedStreetOption}
                isSearchable={false}
                placeholder="Selecione a Avenida"
                styles={streetSelectStyles}
                menuPortalTarget={menuPortalTarget}
                onChange={(option: any) => option?.value && handleLocalLoja(option.value)}
                aria-label="Selecione a Loja"
              />
            </li>
            <li className="w-[7rem] sm:w-[8rem] transition-hover duration-300 hover:scale-110">
              <Select
                key={`category-${resetCounter}`}
                options={categoryOptions}
                isSearchable={false}
                placeholder="Categorias"
                styles={secondarySelectStyles}
                menuPortalTarget={menuPortalTarget}
                onChange={(option: any) => option?.value && handleLocalLoja(option.value)}
                aria-label="Selecione a Categoria"
              />
            </li>
            <li className="w-[7rem] sm:w-[8rem] flex flex-row items-center hover:scale-110">
              <Select
                key={`product-${resetCounter}`}
                options={productOptions}
                isSearchable={false}
                placeholder="Produtos"
                styles={secondarySelectStyles}
                menuPortalTarget={menuPortalTarget}
                onChange={(option: any) => option?.value && handleLocalLoja(option.value)}
                aria-label="Selecione o Produto"
              />
            </li>
            <li>
              <Search key={`search-${resetCounter}`} placeholder="Buscar pelas melhores lojas" />
            </li>
          </ul>
        </nav>
      </>
    )
}
