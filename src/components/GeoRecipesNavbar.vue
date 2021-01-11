<template>
  <b-navbar id="navbar_stanis" toggleable="lg" type="light" variant="info">

    <b-navbar-brand href="home.html" class="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
      <img id="georecipes_logo_img" src="../assets/logo.png" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="x"></b-icon>
        <b-icon v-else icon="list"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item href="home.html">
          <a class="nav-link active mr-2 text-left" id="navbar_home">HOME</a>
        </b-nav-item>
        <b-nav-item href="map.html">
          <a class="nav-link btn-hoverable" id="navbar_mappa_piatti">
            &nbsp;&nbsp;<b-icon id="geo-icon" icon="geo-alt" class="ml-lg-0 ml-2"></b-icon>&nbsp; MAPPA DEI PIATTI&nbsp;&nbsp;
          </a>
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'GeoRecipesNavbar'
}
</script>

<style scoped>

#navbar_stanis {
  background-color: transparent !important;
}

#georecipes_logo_img {
  max-width: 100%;
  max-height: 100%;
}

#navbar_home {
  font-size: 30px;
  font-weight: bold;
  padding-top: 9px;
}

#navbar_mappa_piatti {
  color: var(--light);
  border-radius: 32px;
  font-size: 30px;
  box-shadow: 3px 3px 3px var(--dark);
  padding-bottom: 2px;
  width: 215px;
}

.btn-hoverable {
  background-color: rgb(72,58,230);
}

.btn-hoverable:hover {
  background-color: #8667ff;
}

.btn-hoverable:active {
  background-color: #000cb2;
}

#geo-icon {
  margin-bottom: 5px;
}

</style>