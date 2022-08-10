import axios from 'axios';
import $router from '@/router';


let Service = axios.create({     
    baseURL: 'http://localhost:3005/',  
    timeout: 1000,
});

/*
Service.interceptors.request.use((request) => {

    let token = Auth.getToken()

    if (!token) {
        $router.go();
        return;
    }
    else{
        request.headers['Authorization'] = 'Bearer ' + token;
        return request;
    }
});

Service.interceptors.use((response) => response, (error) => {
    if (error.response.status == 401 || error.response.status == 403){
        Auth.logout();
        $router.go();
    }
});

*/

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
        
            let response = await Service.get(`/proizvodi`);
            let data = response.data;
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
}

export { Service, Auth, Products }