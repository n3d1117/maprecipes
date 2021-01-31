<template>
  <footer class="bg-dark text-center text-white-50">
    <div class="container p-4">
      <div class="row">
        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <img
            class="mb-2"
            src="../../assets/logo.png"
            alt="logo"
            width="200px"
          >

          <p id="footer-content">
            MapRecipes è una web app che cataloga ricette italiane suddividendole per antipasti, primi, secondi,
            contorni e dolci, geolocalizzandole su una mappa con la possibilità di filtrarle per nome e località.
          </p>
        </div>

        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
          <h5 class="text-uppercase">
            Link
          </h5>

          <ul class="list-unstyled mb-0 links">
            <li>
              <router-link
                id="martin-router-link"
                to="/"
                class="text-white"
              >
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/map"
                class="text-white"
              >
                Mappa dei Piatti
              </router-link>
            </li>
            <!--            <li>
              <a data-toggle="modal" data-target="#richiedi-ricetta-modal" class="text-white">Richiedi Ricetta</a>
            </li>-->
          </ul>
        </div>
      </div>
    </div>

    <div
      class="text-center p-3"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © 2021 Copyright:
      <router-link
        id="martin-router-link-2"
        to="/"
        class="text-white"
      >
        map.recipes
      </router-link>
    </div>
  </footer>
</template>

<script>
import $ from "jquery";

export default {
  name: 'HomeFooter',
  mounted() {
    const martinRouterLink = document.getElementById("martin-router-link");
    const martinRouterLink2 = document.getElementById("martin-router-link-2");

    if (martinRouterLink != null) {
      martinRouterLink.onclick = function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
      }
    }
    if (martinRouterLink2 != null) {
      martinRouterLink2.onclick = function () {
        $('html, body').animate({scrollTop: 0}, 'slow');
      }
    }
  }
}
</script>

<style scoped>

#footer-content {
  font-size: 20px
}

.links a {
  cursor: pointer;
}

</style>