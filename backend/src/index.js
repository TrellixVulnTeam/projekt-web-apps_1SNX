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


   
app.listen(port, () => console.log(`Slušam na portu ${port}!`))