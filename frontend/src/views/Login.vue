<template>
    <section id="form"><!--form-->
		<div class="container">
			<div class="row">
				<div class="col-sm-4 col-sm-offset-1">
					<div class="login-form"><!--login form-->
						<h2>Prijavite se!</h2>
						<form action="#">
							<input type="text" placeholder="Ime i prezime" />
							<input type="email" placeholder="Email" />
							<button type="submit" class="btn btn-default">Prijava</button>
						</form>
					</div><!--/login form-->
				</div>
				<div class="col-sm-1">
					<h2 class="or">ILI</h2>
				</div>
				<div class="col-sm-4">
					<div class="signup-form"><!--sign up form-->
						<h2>Registrirajte se!</h2>
						<form action="#">
							<input type="text" placeholder="Ime i prezime"/>
							<input type="email" placeholder="Email"/>
							<input type="password" placeholder="Lozinka"/>
							<button type="submit" class="btn btn-default">Registracija</button>
						</form>
					</div><!--/sign up form-->
				</div>
			</div>
		</div>
	</section><!--/form-->
    <Footer />
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
