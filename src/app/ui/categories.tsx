export default function Categories() {
    return (
        <div className="p-0">
            <h1 className="bg-gray-500 p-2 text-center text-3xl w-full">Categorias</h1>
            <div className="h-[365px] overflow-scroll overflow-x-hidden">
                <ul className="">
                <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/farmacia">Farmácia</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/mercado">Mercado</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/otica">Ótica</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/vestuario">Vestuário</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/construcao">Construção</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/contato">Categoria 6</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/sobre">Categoria 7</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/sobre">Categoria 8</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/sobre">Categoria 9</a></li>
                    <li className="p-2 text-2xl border-b-2 border-dashed border-gray-100"><a href="/sobre">Categoria 10</a></li>
                </ul>
            </div>
            
        </div>
    );
}