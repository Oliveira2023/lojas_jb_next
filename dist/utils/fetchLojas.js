"use strict";
const connectToDatabase = require('./mongoConfig');
async function fetchLojas() {
    const db = await connectToDatabase();
    const collection = db.collection('lojas'); // Substitua 'lojas' pelo nome da sua coleção
    try {
        const lojas = await collection.find({}).toArray();
        return lojas;
    }
    catch (error) {
        console.error("Erro ao buscar lojas", error);
        return []; // Return an empty array in case of error
    }
    finally {
        await db.client.close();
    }
}
module.exports = fetchLojas;
