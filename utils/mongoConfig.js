const { MongoClient } = require('mongodb');

const uri=process.env.MONGODB_URI; // URL de conexão com o MongoDB
const client = new MongoClient(uri);

async function connectToDatabase() {
    try {
        await client.connect();
        console.log("Conectado ao MongoDB");
        return client.db('lojas_jb'); // Substitua 'nomeDoBancoDeDados' pelo nome do seu banco de dados
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB", error);
    }
}

module.exports = connectToDatabase;