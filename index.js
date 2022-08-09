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
        /* --------------Start Monitor Collection---------------- */
        const MonitorDellCollection = client.db('Monitor').collection('MonitorDell');
        /* --------------end Monitor Collection---------------- */

        /* --------------Start Component Collection---------------- */
        const ComponentsPorcessorIntelCollection = client.db('Components').collection('IntelProcessor');
        const ComponentsProcessorAMDCollection = client.db('Components').collection('AMDProcessor');
        const ComponentsRamAdataCollection = client.db('Components').collection('AdataRam');
        /* --------------End Component Collection---------------- */

        /* --------------Start Networking Collection---------------- */
        const NetworkingRouterTPLinkCollection = client.db('Networking').collection('TPLinkRouter');
        /* --------------End Networking Collection------------------ */

        /* --------------Start Office Equipment Collection------------------ */
        const OfficeEquipmentPrinterHPCollection = client.db('OfficeEquipment').collection('PrinterHP');
        /* --------------End Office Equipment Collection------------------ */

        /* --------------Start Accessories Collection---------------- */
        const AccessoriesKeyboardMicropackCollection = client.db('Accessories').collection('KeyboardMicropack');
        /* --------------End Acceessories Collection---------------- */

        /* --------------Start Security Collection---------------- */
        const SecurityCcCameraHikvisionCollection = client.db('Security').collection('CcCameraHikvision');
        /* --------------End Security Collection---------------- */

        /* --------------Start Storage Collection---------------- */
        const StorageSSDHPCollection = client.db('Storage').collection('SSDHP');
        /* --------------End Storage Collection---------------- */

        /* --------------Start Storage Collection---------------- */
        const SoundSystemSpeakerDigitalXCollection = client.db('SoundSystem').collection('SpeakerDigitalX');
        /* --------------End Storage Collection---------------- */


        // Monitor/Dell
        app.get('/monitor-dells', async (req, res) => {
            const query = {};
            const cursor = MonitorDellCollection.find(query);
            const MonitorDells = await cursor.toArray();
            res.send(MonitorDells);
        });

        app.get('/monitor-dells/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const MonitorDell = await MonitorDellCollection.findOne(query);
            res.send(MonitorDell);
        })

        // Components/Processor/Intel
        app.get('/intels', async (req, res) => {
            const query = {};
            const cursor = ComponentsPorcessorIntelCollection.find(query);
            const Intels = await cursor.toArray();
            res.send(Intels);
        });

        app.get('/intels/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const Intel = await ComponentsPorcessorIntelCollection.findOne(query);
            res.send(Intel);
        });

        //Components/Ram/Adata
        app.get('/ram-adatas', async (req, res) =>{
            const query = {};
            const cursor = ComponentsRamAdataCollection.find(query);
            const RamAdatas = await cursor.toArray();
            res.send(RamAdatas);
        });

        app.get('/ram-adatas/:id', async(req, res) =>{
            const id = req.params.id;
            const query ={_id: ObjectId(id)};
            const RamAdata = await ComponentsRamAdataCollection.findOne(query);
            res.send(RamAdata);
        })

        // Networking/Router/TPLink
        app.get('/tplinks', async (req, res) => {
            const query = {};
            const cursor = NetworkingRouterTPLinkCollection.find(query);
            const TPLinks = await cursor.toArray();
            res.send(TPLinks);
        });

        app.get('/tplinks/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const TPLink = await NetworkingRouterTPLinkCollection.findOne(query);
            res.send(TPLink);
        });

        // Office Equipment/Printer/
        app.get('/printer-hps', async (req, res) => {
            const query = {};
            const cursor = OfficeEquipmentPrinterHPCollection.find(query);
            const PrinterHPs = await cursor.toArray();
            res.send(PrinterHPs);
        });

        app.get('/printer-hps/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const PrinterHP = await OfficeEquipmentPrinterHPCollection.findOne(query);
            res.send(PrinterHP);
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
            const keyboardMicropacks = await cursor.toArray();
            res.send(keyboardMicropacks);
        });

        app.get('/micropacks/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const keyboardMicropack = await AccessoriesKeyboardMicropackCollection.findOne(query);
            res.send(keyboardMicropack);
        });

        // Storage/SSD/HP
        app.get('/ssd-hps', async (req, res) => {
            const query = {};
            const cursor = StorageSSDHPCollection.find(query);
            const SSDHPs = await cursor.toArray();
            res.send(SSDHPs);
        });

        app.get('/ssd-hps/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const SSDHP = await StorageSSDHPCollection.findOne(query);
            res.send(SSDHP);
        });

        //Sound system/Speaker/Digital-X
        app.get('/speakerDigitalXs', async (req, res) => {
            const query = {};
            const cursor = SoundSystemSpeakerDigitalXCollection.find(query);
            const SpeakerDigitalXs = await cursor.toArray();
            res.send(SpeakerDigitalXs);
        });

        app.get('/speakerDigitalXs/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const SpeakerDigitalX = await SoundSystemSpeakerDigitalXCollection.findOne(query);
            res.send(SpeakerDigitalX);
        })


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