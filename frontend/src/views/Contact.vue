<template>
<div>
    <div id="contact-page" class="container">
    	<div class="bg">
	    	<div class="row">    		
	    		<!--<div class="col-sm-12">
                    <br> <br> <br>    			   			
					<h2 class="title text-center">Contact <strong>Us</strong></h2>    			    				    				
					<div id="gmap" class="contact-map">
					</div>
				</div>	-->		 		
			</div>    	
    		<div class="row">  	
	    		<div class="col-sm-8">
	    			<div class="contact-form">
                        <br> <br> <br>
	    				<h2 class="title text-center">Tko smo mi?</h2>
	    				<div class="status alert alert-success" style="display: none"></div>
                        <p>Online webshop u Hrvatskoj sa prodajom raznovrsnih alkoholnih pića.</p>
                        <div style="margin:auto;">
                        <img style="width:400px;height:300px;" src="@/assets/images/web_shop.jpg">
                        </div>
	    			</div>
	    		</div>
	    		<div class="col-sm-4">
	    			<div class="contact-info">
                        <br> <br> <br>
	    				<h2 class="title text-center">Kontakt Info</h2>
	    				<address>
	    					<p>AlkoShop</p>
							<p>Flanatička 20, Pula</p>
							<p>Pula, Hrvatska</p>
							<p>Mobitel: +385 99 235 5332</p>
							<p>Email: info@alko-shop.com</p>
	    				</address>
	    			</div>
    			</div>    			
	    	</div>  
    	</div>	<br>
		
    </div><!--/#contact-page--> 
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
  }
}
</script>