<template>
    <div class="col-sm-4 col-sm-offset-1">
		<div class="login-form">
			<h2>Prijavite se!</h2>
			<form>
				<input v-model="email" type="text" placeholder="Email" />
				<input v-model="lozinka" type="password" placeholder="Lozinka" />
				<button class="btn btn-default" @click="login()">Prijava</button>
				<p v-if="falseUser" style="color:red">Korisnik ne postoji!</p>
			</form>
		</div>
	</div>
</template>

<script>

import { Auth } from '@/services';

export default {
  name: 'RegisterComp',
  props: {
    msg: String
  },
  data(){
	return {
		email:"",
		lozinka:"",
		falseUser: false,
		logedIn: false
	}
  },
  methods: {
	async login(){
		console.log('Usao');
		try 
		{
			this.logedIn = await Auth.login(this.email,this.lozinka);
		}
		catch
		{
			this.logedIn = false;
		}
		console.log('Rezultat prijave', this.logedIn);

		if (this.logedIn == true) {
			this.$router.push({name:'Home'})
				.then(() => this.$router.go()
			);
		}
		else {
			this.falseUser = true;
		}
		
	}
  }
}
</script>