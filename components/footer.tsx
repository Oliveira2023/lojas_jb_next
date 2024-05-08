export default function Footer() {
    return (
        <>
            <div className="flex flex-row gap-1 text-sm w-full" >
                <div className="w-1/3 bg-red-300 p-2">
                    <h2 className="text-center">As lojas</h2>
                    <p className="">
                        O projeto tem a finalidade de reunir o comércio local e integra as seguintes avenidas principais:
                    </p>
                    <ul className="list-disc">
                        <li>Roland Garros</li>
                        <li>Jardim Japão</li>
                        <li>Eduardo Chaves</li>
                    </ul>
                </div>
                <div className="bg-blue-500 w-1/3 p-2">
                    <h2 className="text-center">Projeto</h2>
                    <p>O Lojas Jardim Brasil é o portal de busca de lojas, produtos e serviços, das pricipais avenidas e é um guia local. A página oferece ferramentas digitais para fazer seu negócio ser encontrado por quem precisa.</p>
                </div>
                <div className="bg-green-300 w-1/3 p-2">
                    <h2 className="text-center">Encontre-nos</h2>
                    <div className="flex flex-row">
                        <div>Instagram</div>
                        <div>Facebook</div>
                        <div>Linkedin</div>
                    </div>
                    <p>luciano96@yahoo.com.br</p>
                    <p>11 96359-1532</p>
                </div>
            </div>
        </>
    )
}