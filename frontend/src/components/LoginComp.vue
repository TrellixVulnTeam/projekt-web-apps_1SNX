<template>
    <div class="col-sm-4 col-sm-offset-1">
		<div class="login-form">
			<h2>Prijavite se!</h2>
			<form>
				<input v-model="email" type="text" placeholder="Email" />
				<input v-model="lozinka" type="password" placeholder="Lozinka" />
				<button class="btn btn-default" @click="login()">Prijava</button>
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
		lozinka:""
	}
  },
  methods: {
	async login(){
		let success = await Auth.login(this.email,this.lozinka);
		console.log('Rezultat prijave', success);

		if (success == true) {
			this.$router.push({ name: 'Home' })
		}
	}
  }
}
</script>