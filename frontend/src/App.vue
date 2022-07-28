<template>
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
								<!--<li><router-link to="#"><i class="fa fa-user"></i> Profil</router-link></li>-->
								<li><router-link to="#"><i class="fa fa-star"></i> Lista želja</router-link></li>
								<li><router-link to="/cart"><i class="fa fa-shopping-cart"></i> Košarica</router-link></li>
								<li><router-link to="/login"><i class="fa fa-lock"></i> Prijava</router-link></li>
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
								<!--<li class="dropdown"><a href="#">Shop<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><a href="shop.html">Products</a></li>
										<li><a href="product-details.html">Product Details</a></li> 
										<li><a href="checkout.html">Checkout</a></li> 
										<li><a href="cart.html">Cart</a></li> 
										<li><a href="login.html">Login</a></li> 
                                    </ul>
                                </li> -->
								<!--
								<li class="dropdown"><a href="#">Blog<i class="fa fa-angle-down"></i></a>
                                    <ul role="menu" class="sub-menu">
                                        <li><a href="blog.html">Blog List</a></li>
										<li><a href="blog-single.html">Blog Single</a></li>
                                    </ul>
                                </li> 
								<li><a href="404.html">404</a></li>-->
								<li><router-link to="/contact">Kontakt</router-link></li>
								
							</ul>
						</div>
					</div>
					<div class="col-sm-3">
						<div class="search_box pull-right">
							<input type="text" placeholder="Traži"/>
						</div>
					</div>
				</div>
			</div>
		</div><!--/header-bottom-->
	</header><!--/header-->
  <router-view/>
</template>

<style scoped>

@import './assets/styles/bootstrap.min.css';
@import './assets/styles/font-awesome.min.css';
/*@import './assets/styles/prettyPhoto.css';*/
@import './assets/styles/price-range.css';
@import './assets/styles/animate.css';
@import './assets/styles/main.css';
@import './assets/styles/responsive.css';

</style>
