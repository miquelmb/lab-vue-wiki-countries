<template>
  <Navbar />
  <div v-for="country in countries" :key="country">
      <CountriesList :countries="country" />
      <CountriesDetails :countryName="countryName"/>
  </div>
</template>

<script>
  import Navbar from './pages/Navbar.vue'
  import CountriesList from './pages/CountriesList.vue'
  import CountriesDetails from './pages/CountriesDetails.vue'
  import axios from 'axios'

  export default {
    data () {
      return {
        countries: null,
      }
    },
    mounted(){
        axios
        .get('https://ih-countries-api.herokuapp.com/countries')
        .then(({data}) => (this.countries = data))
    },
    components: {
      Navbar, CountriesList, CountriesDetails
    },
  }
</script>

<style>
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

.app {
  text-align: center;
}

.app-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .app-logo {
    animation: app-logo-spin infinite 20s linear;
  }
}

.app-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.app-link {
  color: #61dafb;
}

@keyframes app-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
