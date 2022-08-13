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
									<li v-for="item in items" :key="item.id"><a @click="categoryFilter(item.vrste)" href="#"><span class="pull-right">()</span>{{item.vrste}}</a></li>
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
											<router-link to="/cart" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Dodaj u košaricu</router-link>
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>{{item.cijena}} kn</h2>
												<p>{{item.naziv}}</p>
												<button @click.prevent="RouteName(item)" class="btn btn-default add-to-cart">Detalji</button><br>
												<router-link to="/cart" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Dodaj u košaricu</router-link>
												
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
import { Products } from '@/services'
import store from '@/store'
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
			newItems: [],
			items: [],
			searchTerm: store.searchTerm,
			search: '',
			searchingTerm:'',
			filteredItems:[],
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
		}
	},
	async created(){
		this.items = await Products.fetchProducts();
		console.log("Items: ",this.items) 
		this.fetchProducts();
	}
}
</script>

<style>

</style>