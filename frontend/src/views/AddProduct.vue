<template>
    <div class="container">
  
  <section style="margin-top:20px;" class="panel panel-default">
        <div class="panel-heading"> 
        <h3 class="panel-title" style="text-align:center">Unos proizvoda</h3> 
        </div> 
        <div class="panel-body">
        
        <form class="form-horizontal" role="form">

        <div class="form-group">
            <label for="name" class="col-sm-3 control-label">Piće</label>
            <div class="col-sm-9">
            <input v-model="naziv" type="text" class="form-control" name="name" id="name" placeholder="Naziv pića">
            </div>
        </div>
        <div class="form-group">
            <label for="name" class="col-sm-3 control-label">Vrsta pića</label>
            <div class="col-sm-6">
                <select v-model="vrste" class="form-control">
                    <option style="text-align:center" selected disabled value="">--- Odaberite vrstu svog pića ---</option>
                    <option>Pivo</option>
                    <option>Crno vino</option>
                    <option>Bijelo vino</option>
                    <option>Liker</option>
                    <option>Vodka</option>
                    <option>Whiskey</option>
                    <option>Cocktail</option>
                </select>
            </div>
        </div>
        <br>
        <div class="form-group">
            <label for="name" class="col-sm-3 control-label">Unesite cijenu proizvoda</label>
            <div class="col-sm-9">
            <input type="number" v-model="cijena" class="form-control" min="1" step="any" placeholder="npr. 99,99" />
            </div>
        </div>
        <div class="form-group">
            <label for="about" class="col-sm-3 control-label">Opis slike</label>
            <div class="col-sm-9">
            <textarea v-model="opis" class="form-control" placeholder="Detaljan opis..."></textarea>
            </div>
        </div> 
        <div class="form-group">
            <label for="qty" class="col-sm-3 control-label">URL slike</label>
            <div class="col-sm-9">
            <input v-model="slika" type="text" class="form-control" name="url" id="url">
            </div>
        </div> 
        <hr>
        <div class="form-group">
            <div class="col-sm-offset-3 col-sm-9">
                <button type="submit" class="btn btn-primary" style="border-radius: 10px;background-color: lightblue;color: black" @click="dodajProizvod()">Objavi</button>
            </div>
        </div>
        </form>
        
        </div>
</section>

  
</div>
</template>

<script>

import { Products } from '@/services'

export default{
    data() {
		return {
			naziv: "",
			vrste: "",
			cijena: 0,
            opis: "",
            slika: ""
		};
    },
    methods:{
        async dodajProizvod(){
            if(this.noviOpisSlike=="" || this.naslov==""){
                store.prazno=true;
            }
            else{
            let podaci = {
                naziv: this.naziv,
                vrste:this.vrste,
                cijena: this.cijena,
                opis: this.opis,
                slika: this.slika,
                
            }
            await Products.postProducts(podaci);
            }
        },
    }
	 
};
</script>
