<template>
<div v-if="drink">
    <SingleDrink :single-item="drink"/>
</div>

</template>

  

<script>
import SingleDrink from '@/components/SingleDrink.vue'
import { Products } from '@/services'
export default {
  components: { SingleDrink },
  name: "Drinks",
  props: ['name'],
  data(){
    return{
        /*drinks: [
                    {proizvod:"Graševina", cijena: 149.99, url: require('../assets/images/grasevina.jpg'), detalji: "U Hrvatskoj je to jedna od najpopularnijih bijelih sorti. Boce kvalitetnog vina graševina iz međimurskog vinogorja, sjeverna Hrvatska Vino graševine je najčešće slamnatožute boje, izraženog mirisa, suho, srednjeg sadržaja alkohola i ekstrakta, ugodno gorkasto i već kao mlado vino razvija sortni miris i aromu istaknute svježine."},
                    {proizvod:"Corona", cijena: 12.99, url: require('../assets/images/corona.jpg'), detalji: "Corona Extra je blijedi lager koji proizvodi tvrtka Cervecería Modelo u Meksiku, a u vlasništvu je AB InBev u Belgiji. Jedna je od najprodavanijih piva u svijetu. Corona se obično poslužuje s kriškom limete ili limuna na grlu boce kako bi se dodala tvrdoća i okus."},
                    {proizvod:"Vodka Smirnoff", cijena: 119.99, url: require('../assets/images/smirnoff.jpg'), detalji: "Smirnoff je marka votke u vlasništvu i koju proizvodi britanska tvrtka Diageo . Brend Smirnoff započeo je s destilerijom votke koju je u Moskvi osnovao Pjotr ​​Arsenijevič Smirnov (1831. – 1898.).  Distribuira se u 130 zemalja."},
                    {proizvod:"Cocktail Malibu", cijena: 89.99, url: require('../assets/images/malibu.jpg'), detalji: "Malibu je liker s okusom kokosa , napravljen od karipskog ruma , s volumnim udjelom alkohola od 21,0 % (42 dokaza ). Od 2017. brend Malibu u vlasništvu je Pernod Ricarda , koji ga naziva 'rumom s okusom', gdje je ta oznaka dopuštena lokalnim zakonima."},
                    {proizvod:"Jack Daniels Honey", cijena: 169.99, url: require('../assets/images/jack_daniels.jpg'), detalji: "Jack Daniel's je vrsta whiskeya, poznata po četvrtastoj boci i crnoj naljepnici. Proizvodi se u Lynchburgu, Tennessee, SAD, od strane Jack Daniel's Distillery osnovana u 1866. godini."},
                    {proizvod:"Liker od maline", cijena: 149.99, url: require('../assets/images/liker-malina.jpg'), detalji: "Likeri se prave od rakija, kojima se za aromu dodaje neko voće ili neke mirišljave trave i šećerni sirup i to tako da ga ima više od 2, 5 % uukupnom volumenu. Ovaj liker ima aromu maline."}	
			    ],*/
        drink: []
        
    }
  },
  async created(){
    
    this.drink = await Products.singleProduct(this.name); 
    console.log("Single drink: ",this.drink);

  },
};
</script>