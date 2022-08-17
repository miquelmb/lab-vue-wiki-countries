<template>
    <div class="container">
      <div class="row">
         <div class="col-5" style="max-height: 90vh; overflow: scroll">
            <div class="list-group" v-for="">
                <!-- valor dentro de to `/${countries.alpha3Code}`-->
               <router-link to="/list" class="list-group-item list-group-item-action">
                  <p>{{ countries.name.common }}</p>
               </router-link>

            </div>
         </div>
      </div>
   </div>

</template>

<script>
export default {
    name: 'CountriesList',
    props: {
        countries: Object,
    },
}


</script>

<style>

</style>