<template>
<div>
    <section id="cart_items">
		<div class="container">
            <br><br>
			<div class="table-responsive cart_info">
				<table class="table table-condensed">
					<thead>
						<tr class="cart_menu">
							<td class="image">Proizvod</td>
							<td class="description">Opis</td>
							<td class="price">Cijena</td>
							<td class="quantity">Količina</td>
							<td class="total">Ukupno</td>
							<td></td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td class="cart_product">
								<div ><a href=""><img class="img_cart" src="@/assets/images/jack_daniels.jpg" alt=""></a></div>
							</td>
							<td class="cart_description">
								<h4><a href="">Jack Daniels honey</a></h4>
							</td>
							<td class="cart_price">
								<p>169,99 kn</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<a class="cart_quantity_up" href=""> + </a>
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
									<a class="cart_quantity_down" href=""> - </a>
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">169,99 kn</p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>

						<tr>
							<td class="cart_product">
								<div ><a href=""><img class="img_cart" src="@/assets/images/grasevina.jpg" alt=""></a></div>
							</td>
							<td class="cart_description">
								<h4><a href="">Vino Graševina</a></h4>
							</td>
							<td class="cart_price">
								<p>149,99 kn</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<a class="cart_quantity_up" href=""> + </a>
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
									<a class="cart_quantity_down" href=""> - </a>
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">149,99 kn</p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>
						<tr>
							<td class="cart_product">
								<div ><a href=""><img class="img_cart" src="@/assets/images/corona.jpg" alt=""></a></div>
							</td>
							<td class="cart_description">
								<h4><a href="">Pivo Corona</a></h4>
							</td>
							<td class="cart_price">
								<p>12,99 kn</p>
							</td>
							<td class="cart_quantity">
								<div class="cart_quantity_button">
									<a class="cart_quantity_up" href=""> + </a>
									<input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2">
									<a class="cart_quantity_down" href=""> - </a>
								</div>
							</td>
							<td class="cart_total">
								<p class="cart_total_price">12,99 kn</p>
							</td>
							<td class="cart_delete">
								<a class="cart_quantity_delete" href=""><i class="fa fa-times"></i></a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section> <!--/#cart_items-->

	<section id="do_action">
		<div class="container">
			<div class="heading">
				<h3>Nastavite s kupnjom</h3>
			</div>
			<div class="row">
				<div class="col-sm-6">
					<div class="chose_area">
						
						<ul class="user_info">
							<li class="single_field">
								<label>Država:</label>
								<select>
									<option>Hrvatska</option>
									<option>Bosna i Hercegovina</option>
									<option>Srbija</option>
									<option>Crna Gora</option>
									<option>Austrija</option>
									<option>Njemačka</option>
									<option>Poljska</option>
									<option>Ukrajina</option>
								</select>
								
							</li>
							<li class="single_field zip-field">
								<label>Grad:</label>
								<input type="text">
							
							</li>
							<li class="single_field zip-field">
								<label>Poštanski broj:</label>
								<input type="text">
							</li>
						</ul>
					</div>
				</div>
				<div class="col-sm-6">
					<div class="total_area">
						<ul>
							<li>Ukupna potrošnja iz košarice<span>332,99 kn</span></li>
							<li>Porez <span>9,99 kn</span></li>
							<li>Dostava <span>Besplatno</span></li>
							<li>Ukupno<span>332,99 kn</span></li>
						</ul>
							<a class="btn btn-default check_out" href="">Kupi</a>
					</div>
				</div>
			</div>
		</div>
        
	</section><!--/#do_action-->
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