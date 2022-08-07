const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();

// middle ware
app.use(cors());
app.use(express.json());

/* const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.qgjox.mongodb.net/?retryWrites=true&w=majority`; */
/* const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }); */


/* ---------------------------------------------------- */
/* const { MongoClient, ServerApiVersion } = require('mongodb'); */
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jfv4vgd.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

/* client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('ehan technology connected');
  // perform actions on the collection object
  client.close();
}); */
/* ---------------------------------------------------- */



async function run() {
    try {
        await client.connect();
        /* --------------Start Component Collection---------------- */
        const ComponentsPorcessorIntelCollection = client.db('Components').collection('IntelProcessor');
        const ComponentsProcessorAMDCollection = client.db('Components').collection('AMDProcessor');
        /* --------------End Component Collection---------------- */

        /* --------------Start Networking Collection---------------- */
        const NetworkingRouterTPLinkCollection = client.db('Networking').collection('TPLinkRouter');
        /* --------------End Networking Collection------------------ */

        /* --------------Start Accessories Collection---------------- */
        const AccessoriesKeyboardMicropackCollection = client.db('Accessories').collection('KeyboardMicropack');
        /* --------------End Acceessories Collection---------------- */
        
        /* --------------Start Security Collection---------------- */
        const SecurityCcCameraHikvisionCollection = client.db('Security').collection('CcCameraHikvision');
        /* --------------End Security Collection---------------- */

        // Components/Processor/Intel
         app.get('/intels', async (req, res) =>{
             const query = {};
             const cursor = ComponentsPorcessorIntelCollection.find(query);
             const Intels = await cursor.toArray();
             res.send(Intels);
         });

         app.get('/intels/:id', async (req, res) =>{
             const id = req.params.id;
             const query = {_id: ObjectId(id)};
             const Intel = await ComponentsPorcessorIntelCollection.findOne(query);
             res.send(Intel);
         })

        // Networking/Router/TPLink
        app.get('/tplinks', async (req, res) =>{
            const query = {};
            const cursor = NetworkingRouterTPLinkCollection.find(query);
            const TPLinks = await cursor.toArray();
            res.send(TPLinks);
        });

        app.get('/tplinks/:id', async (req, res) =>{
            const id = req.params.id;
            const query ={_id: ObjectId(id)};
            const TPLink = await NetworkingRouterTPLinkCollection.findOne(query);
            res.send(TPLink);
        })

        // Components/Processor/AMD
        app.get('/amds', async (req, res) => {
            const query = {};
            const cursor = ComponentsProcessorAMDCollection.find(query);
            const AMDS = await cursor.toArray();
            res.send(AMDS);
        });

        app.get('/amds/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const AMD = await ComponentsProcessorAMDCollection.findOne(query);
            res.send(AMD);
        })


        // security/CcCamera/hikvision
        app.get('/hikvisions', async (req, res) => {
            const query = {};
            const cursor = SecurityCcCameraHikvisionCollection.find(query);
            const hikvisions = await cursor.toArray();
            res.send(hikvisions);
        });

        app.get('/hikvisions/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const hikvision = await SecurityCcCameraHikvisionCollection.findOne(query);
            res.send(hikvision);
        });

        // Accessories/keyboard/micropack
        app.get('/micropacks', async (req, res) => {
            const query = {};
            const cursor = AccessoriesKeyboardMicropackCollection.find(query);
            const micropacks = await cursor.toArray();
            res.send(micropacks);
        });

        app.get('/micropacks/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const micropack = await AccessoriesKeyboardMicropackCollection.findOne(query);
            res.send(micropack);
        });



    }
    finally {

    }
}
run().catch(console.dir);

/* client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log('ehan technology connected');
  // perform actions on the collection object
  client.close();
}); */


app.get('/', (req, res) => {
    res.send('Running Ehan Server');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});