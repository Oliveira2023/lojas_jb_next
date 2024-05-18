import connectToDb from "@utils/conectDB";
import connectToDatabase from "@utils/mongoC";

const {MongoClient} = require("mongodb")

export default function handler(term : String) {
   
    // connectToDb();
    async function run() {

        const uri = "mongodb+srv://lojasjbnet:rQ96UcaTjOGqp6R9@clusterl0.cjzxcsq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterL0";

        const client = new MongoClient(uri);

        await client.connect();

        const dbName = "lojasjbnet";
        const collectionName = "lojas";

        const database = client.db(dbName);
        const collection = database.collection(collectionName);

        const findQuery = {nome: "teste"}

        try {
            const cursor = await collection.find("teste").sort({name: 1})
            console.log("dentro do try no handler")

        }catch (err) {
            console.log("algo deu errado na busca dos documentos: " + {err})
        }
    }
    run().catch(console.dir);
    
    
}