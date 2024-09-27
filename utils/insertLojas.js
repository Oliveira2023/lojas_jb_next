const connectToDatabase = require('./mongoConfig');

const lojas = [
    {
        grupo: "japao",
        numLoja: "loja190",
        nomeLoja: "teste2",
        categoria: "Celulares",
        imageUrl: "/padrao.jpg",
        mapa: "MEGA ACESSORIOS",
        telefone: "",
        whatsapp: "5511948996243",
        linkInstagram: "",
        site: "",
        descricao: "Loja de acessórios para celular",
        produtos: [],
    },

    // Adicione mais lojas conforme necessário
];

async function insertLojas() {
    const db = await connectToDatabase();
    const collection = db.collection('lojas'); // Substitua 'lojas' pelo nome da sua coleção

    try {
        const result = await collection.insertMany(lojas);
        console.log(`${result.insertedCount} lojas inseridas com sucesso`);
    } catch (error) {
        console.error("Erro ao inserir lojas", error);
    } finally {
        await db.client.close();
    }
}

insertLojas();