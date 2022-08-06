import mongo from 'mongodb';
import connect from './db';


(async () => {
    let db = await connect();
    await db.collection('korisnik').createIndex({ Email: 1 }, { unique: true });
})();

export default {
    async registerUser(user) {
        let db = await connect();

        let doc = {
            Ime_i_prezime: user.Ime_i_prezime,
            Email: user.Email,
            Lozinka: user.Lozinka
        }
        try{
            let result = await db.collection('korisnik').insertOne(doc);
            if (result && result.insertedId){
                return result.insertedId;
            }
        } catch(e){
            if(e.name == 'MongoError' || e.code == 11000) {
                throw new Error('Korisnik već postoji');
            }
        }
    },

     }