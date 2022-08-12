import dotenv from 'dotenv'
dotenv.config();

import express from 'express';
import connect from './db.js';
import cors from 'cors';
import mongo from 'mongodb';
import auth from './auth';

const app = express() 
const port = 3005 
//const db = connect()

app.use(cors());
app.use(express.json());

/* --------- Autentifikacija --------- */

app.post('/korisnici', async (req, res) => {
    let UserData = req.body;

    let id;

    try {
        id = await auth.registerUser(UserData);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }

    res.json({ id:id });
});

app.get('/korisnici', async (req,res) => {
    let db = await connect()
    
    let cursor = await db.collection("korisnik").find({})
    let finalData = await cursor.toArray();
    
    res.json(finalData);
});

app.get('/secret', [auth.verify], (req, res) => {
    res.json({ message: 'Tajna ruta, vaš email: ' + req.jwt.Email });
});

app.post('/auth', async (req, res) => {
    let user = await req.body;
    try {
        let finalData = await auth.authenticateUser(user.Email, user.Lozinka);
        res.json(finalData);
    }
    catch(e) {
        res.status(401).json({ error: e.message })
    }
});

/* --------- Proizvodi --------- */

app.post ('/proizvodi', async (req , res) => {
    let db = await connect();
    let  proizvodi = req.body;

    let result = await db.collection('proizvodi').insertOne(proizvodi);
    if (result.insertedCount == 1) {
        res.send({
            status: 'success',
            id: result.insertedId,
        });
    } 
    else {
        res.send({
            status: 'fail',
        });
    }
    
    console.log(result);
});

app.get('/proizvodi', async (req , res) => {
    let db = await connect();
    let query = req.query;
    let selektiraj = {}
    
    if(query.naziv){
        selektiraj.naziv = new RegExp(query.naziv)
        console.log(query.naziv)
    }

    if(query._any) {
        
        let pretraga = query._any;
        let pojmovi = pretraga.split(' ');
        selektiraj = {
            $and: [],
        };
    
        pojmovi.forEach((pojam) => {
            selektiraj.$and.push({naziv: new RegExp(pojam)});
            console.log("Evo pojma iz baze: ",pojmovi, pojam, new RegExp(pojam))
        });
    }

    let pojam = query._any
    console.log(typeof(query._any),query._any)
    let cursor = await db.collection('proizvodi').find({naziv:{$regex: `${pojam}` ,$options: "i"}},selektiraj);
    let results = await cursor.toArray();

    res.json(results)
    
   
});

app.get('/svi_proizvodi', async (req , res) => {
    let db = await connect();
    let cursor = await db.collection("proizvodi").find({})
    let products = await cursor.toArray();

    console.log(products)
    res.json(products)
});


app.get('/proizvodi/:naziv', async (req , res) => {
    let nazivProizvoda = req.params.naziv;
    let db = await connect();
    let singleDoc = await db.collection("proizvodi").findOne({naziv: nazivProizvoda})

    console.log(singleDoc)
    res.json(singleDoc)
});


   
app.listen(port, () => console.log(`Slušam na portu ${port}!`))