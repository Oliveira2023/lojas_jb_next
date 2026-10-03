
import Search from "@/app/ui/Search";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Select from "react-select";
import FetchCategories from "@utils/fetchCategories";
import FetchProducts from "@utils/fetchProducts";

type HeaderProps = {
  pageLoja: string | null;
};

const streetOptions = [
  { value: "roland", label: "Lojas Roland Garros" },
  { value: "japao", label: "Lojas Jardim Japão" },
  { value: "chaves", label: "Lojas Edu Chaves" },
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

export default function Header({pageLoja}: HeaderProps) {

    const [resetCounter, setResetCounter] = useState(0)
    const router = useRouter();
    const searchParams = useSearchParams();

    const [street, setStreet] = useState("");
    const [category, setCategory] = useState("");
    const [product, setProduct] = useState("");
    const [productOptions, setProductOptions] = useState<{ value: string; label: string }[]>([]);
    const [categoryOptions, setCategoryOptions] = useState<{ value: string; label: string }[]>([]);

    useEffect(() => {
      FetchCategories().then(({ categoryOptions }) => {
        setCategoryOptions(categoryOptions);
      })
      FetchProducts().then(({ productOptions }) => {
        setProductOptions(productOptions);
      })
    }, []);

    useEffect(() => {
      setStreet(searchParams.get('street') ?? '');
      setCategory(searchParams.get('category') ?? '');
      setProduct(searchParams.get('product') ?? '');
    }, [searchParams]);

    function buildFilterQuery(
      streetValue: string,
      categoryValue: string,
      productValue: string
    ) {
      const params = new URLSearchParams();
      if (streetValue) params.append("street", streetValue);
      if (categoryValue) params.append("category", categoryValue);
      if (productValue) params.append("product", productValue);
      const queryString = params.toString();
      console.log('Built filter query:', queryString);
      return queryString ? `/?${queryString}` : "/";
    }
    
    function handleStreetSelect(streetValue: string) {
      setStreet(streetValue);
      setCategory("");
      setProduct("");
      router.push(buildFilterQuery(streetValue, "", ""));
    }

    function handleCategorySelect(categoryValue: string) {
      setCategory(categoryValue);
      setProduct("");
      router.push(buildFilterQuery(street, categoryValue, ""));
    }

    function handleProductSelect(productValue: string) {
      setProduct(productValue);
      router.push(buildFilterQuery(street, category, productValue));
    }

    function handleHomeClick() {
      setStreet('')
      setCategory('')
      setProduct('')
    }

    const menuPortalTarget = typeof window !== "undefined" ? document.body : null;

    return (
      <>
        <nav className="">
          <ul className="flex flex-row items-start sm:items-center justify-between">
            <li>
              <Link className="w-14" href={"/"}>
                <div onClick={handleHomeClick} className="flex h-8 w-8 items-center justify-center rounded-full text-white font-bold text-sm leading-none transition-hover duration-300 hover:scale-110" style={{ backgroundColor: "#000", border: "2px solid #fff" }}>
                  <p>JB</p>
                </div>
              </Link>
            </li>
            <li className="w-[13rem] sm:w-[16rem] transition-hover duration-300 hover:scale-110">
              <Select
                key={'street-select'}
                options={streetOptions}
                value={streetOptions.find(option => option.value === street) ?? null}
                isSearchable={false}
                placeholder="Selecione a Avenida"
                styles={streetSelectStyles}
                menuPortalTarget={menuPortalTarget}
                onChange={(option: any) =>  {option?.value && handleStreetSelect(option.value);
                  // console.log('Selected street:', option.value)
                }}
                aria-label="Selecione a avenida"
              />
            </li>
            <li className="w-[7rem] sm:w-[8rem] transition-hover duration-300 hover:scale-110">
              <Select
                key={'category-select'}
                options={categoryOptions}
                value={categoryOptions.find(option => option.value === category) ?? null}
                isSearchable
                placeholder="Categorias"
                styles={secondarySelectStyles}
                menuPortalTarget={menuPortalTarget}
                onChange={(option: any) => option?.value && handleCategorySelect(option.value)}
                aria-label="Selecione a Categoria"
              />
            </li>
            <li className="w-[7rem] sm:w-[8rem] flex flex-row items-center hover:scale-110">
              <Select
                key={'product-select'}
                options={productOptions}
                value={productOptions.find(option => option.value === product) ?? null}
                isSearchable
                placeholder="Produtos"
                styles={secondarySelectStyles}
                menuPortalTarget={menuPortalTarget}
                onChange={(option: any) => option?.value && handleProductSelect(option.value)}
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
