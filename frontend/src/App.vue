<template>
<div>
  <header id="header"><!--header-->
			
		
		<div class="header-middle"><!--header-middle-->
			<div class="container">
				<div class="row">
					<div class="col-sm-4">
						<div class="logo pull-left">
							<router-link to="/"><img src="@/assets/images/logo.png" alt="" /></router-link>
						</div>
						
					</div>
					<div class="col-sm-8">
						<div class="shop-menu pull-right">
							<ul class="nav navbar-nav nav-color">
								<li><router-link to="/cart">{{itemQty}}<i class="fa fa-shopping-cart"></i> Košarica</router-link></li>
								<li v-if="!auth.authenticated"><router-link to="/login"><i class="fa fa-lock"></i> Prijava</router-link></li>
								<li v-if="auth.authenticated" class="username"><i class="fa fa-user"></i><p style="display:inline;margin-left:5px"> {{auth.userEmail}}</p></li>
								<li v-if="auth.authenticated" @click="logout()"><router-link to=""><i class="fa fa-sign-out"></i> Odjava</router-link></li>
								<br>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-middle-->
	
		<div class="header-bottom"><!--header-bottom-->
			<div class="container">
				<div class="row">
					<div class="col-sm-9">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
								<span class="sr-only">Toggle navigation</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
						</div>
						<div class="mainmenu pull-left">
							<ul class="nav navbar-nav collapse navbar-collapse">
								<li><a href="/" >Početna</a></li>
								<li><router-link to="/contact">Kontakt</router-link></li>
								<li v-if="admin"><router-link to="/add_product">Dodaj piće</router-link></li>
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<!--<div class="search_box pull-right">
							<input v-model="store.searchTerm" type="text" placeholder="Traži"/>
						</div>-->
					</div>
				</div>
			</div>
		</div>
	</header>
  <router-view/>
</div>
</template>

<script>

import { Auth, Cart } from '@/services';
import store from '@/store';

export default {
	data(){
		return {
			auth: Auth.state,
			admin: false,
			store,
			itemQty: 0,
		};
	},
	methods:{
		logout(){
			Auth.logout();
			this.$router.go();
		},
		async fetchQty(){
			let cartData = await Cart.fetchCart();
			this.itemQty = cartData.cart.ukupnaKol;
		}
	},
	async created(){
		this.fetchQty();
		console.log('Current user: ',Auth.state.userEmail);
		if(Auth.state.userEmail==='aa@gmail.com'){
			this.admin=true;
		}
		else{
			this.admin=false;
		}
	}
}

</script>

<style scoped>

@import './assets/styles/bootstrap.min.css';
@import './assets/styles/font-awesome.min.css';
@import './assets/styles/price-range.css';
@import './assets/styles/animate.css';
@import './assets/styles/main.css';
@import './assets/styles/responsive.css';

</style>
