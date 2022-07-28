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
									<li><a href="#"> <span class="pull-right">(1)</span>Pivo</a></li>
									<li><a href="#"> <span class="pull-right">(1)</span>Bijelo vino</a></li>
									<li><a href="#"> <span class="pull-right">(1)</span>Vodka</a></li>
									<li><a href="#"> <span class="pull-right">(1)</span>Liker</a></li>
									<li><a href="#"> <span class="pull-right">(1)</span>Whiskey</a></li>
									<li><a href="#"> <span class="pull-right">(1)</span>Cocktail</a></li>
									<!--<li><a href="#"> <span class="pull-right">(0)</span>Crno vino</a></li>
									<li><a href="#"> <span class="pull-right">(0)</span>Stock</a></li>
									<li><a href="#"> <span class="pull-right">(0)</span>Rum</a></li>-->
								</ul>
							</div>
						</div><!--/brands_products-->
						
						<!--<div class="price-range">
							<h2>Price Range</h2>
							<div class="well text-center">
								 <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" ><br />
								 <b class="pull-left">$ 0</b> <b class="pull-right">$ 600</b>
							</div>
						</div>-->
						
						
					
					</div>
				</div>
				
				<div class="col-sm-9 padding-right">
					<div class="features_items"><!--features_items-->
						<h2 class="title text-center">Naša ponuda</h2>
						
						<div class="col-sm-4" v-for="item in items" :key=item.id>
							<div class="product-image-wrapper">
								<div class="single-products">
										<div class="productinfo text-center">
											<img :src="item.url" alt="" />
											<h2>{{item.cijena}} kn</h2>
											<p>{{item.proizvod}}</p>
											<router-link to="/cart" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Dodaj u košaricu</router-link>
										</div>
										<div class="product-overlay">
											<div class="overlay-content">
												<h2>{{item.cijena}} kn</h2>
												<p>{{item.proizvod}}</p>
												<button @click.prevent="RouteName(item)" class="btn btn-default add-to-cart">Detalji</button>
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

export default {
  name: 'Home',
  components: {
	Footer
  },
  data() {
		return {
			items: [
				{proizvod:"Graševina", cijena: 149.99, url: require('../assets/images/grasevina.jpg')},
				{proizvod:"Corona", cijena: 12.99, url: require('../assets/images/corona.jpg')},
				{proizvod:"Vodka Smirnoff", cijena: 119.99, url: require('../assets/images/smirnoff.jpg')},
				{proizvod:"Cocktail Malibu", cijena: 89.99, url: require('../assets/images/malibu.jpg')},
				{proizvod:"Jack Daniels Honey", cijena: 169.99, url: require('../assets/images/jack_daniels.jpg')},
				{proizvod:"Liker od maline", cijena: 149.99, url: require('../assets/images/liker-malina.jpg')}	
			]
		};
    },
	methods:{
		RouteName(items){
			console.log(items.proizvod)
            this.$router.push({ path: `/drinks/${items.proizvod}` })
            console.log(this.$route.proizvod);
        },
	},
}
</script>

<style>

</style>