
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://lojasjbnet:rQ96UcaTjOGqp6R9@clusterl0.cjzxcsq.mongodb.net/?retryWrites=true&w=majority&appName=ClusterL0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("lojasjbnet");
    // console.log("Pinged your deployment. You successfully connected to MongoDB!");
    console.log('conectado')


  } finally {
    // Ensures that the client will close when you finish/error
    console.log("conexão encerrada!")
    await client.close();
  }
}
run().catch(console.dir);
