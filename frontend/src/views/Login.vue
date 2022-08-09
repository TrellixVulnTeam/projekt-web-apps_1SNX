<template>
<div>
    <section id="form">
		<div class="container">
			<div class="row">
				
				<LoginComp />

				<div class="col-sm-1">
					<h2 class="or">ILI</h2>
				</div>

				<RegisterComp />

			</div>
			
		</div>
		
	</section>
    <Footer />
</div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/footer.vue'
import RegisterComp from '@/components/RegisterComp.vue'
import LoginComp from '@/components/LoginComp.vue'

export default {
  name: 'Home',
  components: {
	Footer,
	RegisterComp,
	LoginComp
  },
}
</script>
