<template>
  <div id="singleItem">
    
  
  <section class="py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="row gx-4 gx-lg-5 align-items-center">
                    <div class="col-md-6"><img :src="singleItem.url" class="card-img-top mb-5 mb-md-0" alt="..." /></div>
                    <div class="col-md-6">
                        <h1 class="display-5 fw-bolder">{{singleItem.proizvod}}</h1>
                        <div class="fs-5 mb-5">
                            <span class="text-decoration-line-through">{{Math.round(singleItem.cijena * 1.1)}}.99 kn</span><br>
                            <span>{{singleItem.cijena}} kn</span>
                        </div>
                        <p class="lead">{{singleItem.detalji}}</p>
                        <div class="d-flex">
                            <button class="btn btn-outline-dark flex-shrink-0" type="button">
                                <i class="fa fa-shopping-cart"></i>
                                Dodaj u košaricu
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</div>
</template>


<script>
export default {
  name: "SingleDrink",
  props: {
  singleItem: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style scoped>
.card{
  margin:auto;
}
</style>