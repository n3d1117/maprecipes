<template>
  <footer class="bg-dark text-center text-white-50">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">

          <img class="mb-2" src="../assets/logo.png" alt="logo" width="200px">

          <p id="footer-content">
            GeoRecipes è una web app che cataloga ricette italiane suddividendole per antipasti, primi, secondi, contorni e dolci, geolocalizzandole su una mappa
            con la possibilità di filtrarle per nome e località.
          </p>

        </div>

        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">Link</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#" class="text-white">Home</a>
            </li>
            <li>
              <a href="map.html" class="text-white">Mappa dei Piatti</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2021 Copyright:
      <a href="https://georecipes.com/" class="text-white">georecipes.com</a>
    </div>
  </footer>
</template>

<script>
export default {
name: 'HomeFooter'
}
</script>

<style scoped>
#footer-content {
  font-size: 20px
}
</style>