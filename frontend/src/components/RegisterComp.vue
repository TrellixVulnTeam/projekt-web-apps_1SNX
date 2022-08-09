<template>
    <div class="col-sm-4">
		<div class="signup-form">
			<h2>Registrirajte se!</h2>
			<form>
				<input v-model="ime_prezime" type="text" placeholder="Ime i prezime"/>
				<input v-model="email" type="email" placeholder="Email" />
				<input v-model="lozinka" type="password" placeholder="Lozinka"/>
				<button type="submit" class="btn btn-default" @click="Register()">Registracija</button>
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
    data() {
		return {
			ime_prezime: "",
			email: "",
			lozinka: "",
		};
    },
    methods:{
        async Register(){
            let data = {
                Ime_i_prezime:this.ime_prezime,
                Email:this.email, 
                Lozinka:this.lozinka,
            }
            await Auth.SendRegisterData(data).then(() => {
                this.$router.push({ path: '/login' });
            });
        }
    }
}
</script>
