const { MongoClient } = require(`mongodb`)

user = "saray78544"
password = "Saraysolar@1"
uri = "mongodb+srv://saray78544:Saraysolar1@cluster0.c8kin.mongodb.net/"
const client = new MongoClient(uri)



async function run() {
    try {
      await client.connect();
      const db = client.db('saray78544');
      //const collection = db.collection('articulos');
  
      // Find the first document in the collection
      const articulo = await collection(`articulos`).findOne();
      console.log(articulo.title);
    } finally {
      // Close the database connection when finished or an error occurs
      await client.close();
    }
  }
  run().catch(console.error);