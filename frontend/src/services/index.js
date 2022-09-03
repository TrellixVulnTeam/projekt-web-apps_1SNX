import axios from 'axios';
import $router from '@/router';

//axios.defaults.withCredentials = true

let Service = axios.create({ 
    baseURL: 'http://localhost:3006/',  
});


let Auth = {
    async SendRegisterData(ime_prezime, email, lozinka) {
        let send = await Service.post('/korisnici', ime_prezime, email, lozinka);
        return send
    },
    async login(email, lozinka) {
        let response = await Service.post('/auth', {
            Email: email,
            Lozinka: lozinka
        });

        let userData = response.data

        localStorage.setItem('user', JSON.stringify(userData))

        return true;
    },
    logout(){
        localStorage.removeItem('user');
    },
    getUser(){
        return JSON.parse(localStorage.getItem('user'));
    },
    getToken(){
        let user = Auth.getUser();
        if (user && user.token){
            return user.token
        }
        else {
            return false;
        }
    },
    authenticated(){
        let user = Auth.getUser();
        if (user && user.token) {
            return true;
        }

        return false;
    },
    state: {
        get authenticated() {
            return Auth.authenticated();
        },
        get userEmail(){
            let user = Auth.getUser()
            if (user){
                return user.Email;
            }
        }
    }
}
let Products = {
    postProducts(podaci){
        return Service.post('/proizvodi', podaci);
    },
    async fetchProducts(){
        
            let response = await Service.get(`/svi_proizvodi`);
            let data = response.data;
            console.log("Data prije")
            data=data.map((docProduct)=>{
            return {
                    id: docProduct._id,
                    naziv: docProduct.naziv,
                    vrste: docProduct.vrste,
                    cijena: docProduct.cijena,
                    opis: docProduct.opis,
                    slika: docProduct.slika,
            }      
            });
            console.log("Data: ",data)
            return data;
    },
    async singleProduct(naziv){

        let response = await Service.get(`/proizvodi/${naziv}`);
        console.log(response);
        let singleDoc = response.data;
        
        return {
            naziv: singleDoc.naziv,
            vrste: singleDoc.vrste,
            cijena: singleDoc.cijena,
            opis: singleDoc.opis,
            slika: singleDoc.slika,
        };
    },
    async searchProducts(termin){
        let response = await Service.get(`/proizvodi?_any=` + termin);
        let data = response.data;
			data = data.map((docProduct)=>{
			return {
					id: docProduct._id,
					naziv: docProduct.naziv,
					vrste: docProduct.vrste,
					cijena: docProduct.cijena,
					opis: docProduct.opis,
					slika: docProduct.slika,
			}
			});
			return data;
    },
    async productCategory(imeKategorije){

        let response = await Service.get(`/proizvodi/kategorija/${imeKategorije}`);
        let doc = response.data;
        doc = doc.map((doc)=>{
        console.log(doc);
        return {
            naziv: doc.naziv,
            vrste: doc.vrste,
            cijena: doc.cijena,
            opis: doc.opis,
            slika: doc.slika,
        }
        });
        return doc;
    },
    async deleteProduct(imeProizvoda){
        let response = await Service.get(`/proizvodi/brisi/${imeProizvoda}`);
        let data = response.data;
        return data;
    }
}

let Cart = {
    addToCart(naziv){
        return Service.post(`/dodaj_u_kosaricu/${naziv}`)
    },
    async fetchCart(){
        let response = await Service.get(`/dohvati_kosaricu`);
        let cart = response.data;
        console.log("cartt",cart)
        console.log("Evo cart: ",cart);
        return cart;
    },
}
let Payment = {
    pay(podaci){
        return Service.post('/placanje', podaci);
    }
}

export { Service, Auth, Products, Cart, Payment }