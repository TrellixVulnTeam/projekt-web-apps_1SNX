<template>
  <div class="home">
    
	
	<br><br><br>
	
	<section>
		<div class="container">
			<div class="row">
				<div class="col-sm-3">
					<div class="left-sidebar">
						
						
						<div class="brands_products"><!--brands_products-->
							<h2>Vrste pića</h2>
							<div class="brands-name">
								<ul class="nav nav-pills nav-stacked">
									<li v-for="item in removeDuplicates" :key="item.vrste"><a @click="categoryFilter(item.vrste)" href="#"><span class="pull-right" style="color: grey;">({{item.counter}})</span>{{item.vrste}}</a></li><li><a @click="fetchProducts()" href="#"><span style="color: grey" class="pull-right">({{categorySum}})</span>SVA PIĆA</a></li>
								</ul>
							</div>
						</div>
						
						
					
					</div>
				</div>
				
				<div class="col-sm-9 padding-right">
					<div class="features_items"><!--features_items-->
					<input v-model="searchingTerm" placeholder="Traži..." style="margin-bottom:20px"/>
						<h2 class="title text-center">Naša ponuda</h2>
						<div class="col-sm-4" v-for="item in filteredItems" :key="item.id">
							<div class="product-image-wrapper">
								<div class="single-products">
										<div class="productinfo text-center">
											<img :src="item.slika" alt="" />
											<h2>{{item.cijena}} kn</h2>
											<p>{{item.naziv}}</p>
											<router-link to="" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Dodaj u košaricu</router-link>
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>{{item.cijena}} kn</h2>
												<p>{{item.naziv}}</p>
												<button @click.prevent="RouteName(item)" class="btn btn-default add-to-cart">Detalji</button><br>
												<p @click="sendCartData(item.naziv);" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Dodaj u košaricu</p>
												
											</div>
										</div>
								</div>
								<div class="choose">
									<ul class="nav nav-pills nav-justified">
										<li><a href="#"><i class="fa fa-plus-square"></i>Dodaj u omiljene</a></li>
									</ul>
								</div>
							</div>
						</div>
						
					</div>
					
				</div>
				
			</div>
		</div>
	</section>
	<Footer />
	
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/footer.vue'
import { Products, Cart } from '@/services'
import store from '@/store'
import category from '@/category'
import axios from 'axios'
import AsyncComputed from 'vue-async-computed'

export default {
  name: 'Home',
  components: {
	Footer
  },

  data() {
		return {
			store,
			category,
			newItems: [],
			items: [],
			searchTerm: store.searchTerm,
			search: '',
			searchingTerm:'',
			filteredItems:[],
			removeDuplicates:[],
			categorySum:0,
		};
    },
	watch: {
		searchingTerm() {
			this.fetchProducts();
		}, 
		
		
	},
	methods:{
		RouteName(items){
			console.log(items.naziv)
            this.$router.push({ path: `/drinks/${items.naziv}` })
            console.log(this.$route.naziv);
        },
		async fetchProducts(){
			this.filteredItems=this.items;
			console.log("fetch products: ",this.filteredItems)
			
			this.filteredItems = await Products.searchProducts(this.searchingTerm);
		},
		async categoryFilter(product){

			this.filteredItems = await Products.productCategory(product)
			console.log(this.filteredItems.length)
			return this.filteredItems;
		},
		isDuplicate(){
			let categories = {
				counterPivo:0,
				counterCrnoVino:0,
				counterBijeloVino:0,
				counterLiker:0,
				counterVodka:0,
				counterWhiskey:0,
				counterCocktail:0,
			}

			this.items.forEach(item=>{
			if(item.vrste == 'Pivo'){
				categories.counterPivo++
				item.counter = categories.counterPivo;
				this.categorySum = this.categorySum + 1;
			}
			else if(item.vrste == 'Vodka'){
				categories.counterVodka++
				item.counter =  categories.counterVodka;
				this.categorySum = this.categorySum + 1;
			}
			else if(item.vrste == 'Bijelo vino'){
				categories.counterBijeloVino++
				item.counter =  categories.counterBijeloVino;
				this.categorySum = this.categorySum + 1;
			}
			else if(item.vrste == 'Whiskey'){
				categories.counterWhiskey++
				item.counter = categories.counterWhiskey;
				this.categorySum = this.categorySum + 1;
			}
			else if(item.vrste == 'Crno vino'){
				categories.counterCrnoVino++
				item.counter = categories.counterCrnoVino;
				this.categorySum = this.categorySum + 1;
			}
			else if(item.vrste == 'Liker'){
				categories.counterLiker++
				item.counter = categories.counterLiker;
				this.categorySum = this.categorySum + 1;
			}
			else if(item.vrste == 'Cocktail'){
				categories.counterCocktail++
				item.counter = categories.counterCocktail;
				this.categorySum = this.categorySum + 1;
			}
			})

			let products = this.items;
			function getUniqueListBy(products, key) {
			return [...new Map(products.map(item => [item[key], item])).values()]
			}
			this.removeDuplicates = getUniqueListBy(products, 'vrste')
			
			console.log("Kategorije bez duplikata: ",this.removeDuplicates)
		},
		async sendCartData(naziv){
			Cart.addToCart(naziv);
		},
		
	},
	async created(){
		this.items = await Products.fetchProducts();
		console.log("Items: ",this.items) 
		
		this.fetchProducts();
		
		this.isDuplicate();
		
	}
}
</script>

<style>

</style>