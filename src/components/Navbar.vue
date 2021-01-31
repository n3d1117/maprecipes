<template>
  <b-navbar id="b_navbar" toggleable="md" type="light" variant="info">

    <b-navbar-brand class="col-xl-3 col-lg-4 col-md-5 col-sm-6 col-8">
      <router-link to="/">
        <img id="maprecipes_logo_img" src="../assets/logo.png" alt="logo">
      </router-link>
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="x"/>
        <b-icon v-else icon="list"/>
      </template>
    </b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-item>
          <router-link to="/" class="nav-link active mr-2 text-left" id="navbar_home">HOME</router-link>
        </b-nav-item>
        <b-nav-item>
          <router-link to="/map" class="nav-link btn-hoverable" id="navbar_mappa_piatti">
            &nbsp;&nbsp;<b-icon id="geo-icon" icon="geo-alt" class="ml-lg-0 ml-2"/>&nbsp; MAPPA DEI PIATTI&nbsp;&nbsp;
          </router-link>
        </b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

#b_navbar {
  background-color: transparent !important;
}

#maprecipes_logo_img {
  max-width: 100%;
  max-height: 100%;
}

#navbar_home {
  font-size: 30px;
  font-weight: bold;
  padding-top: 9px;
}

#navbar_mappa_piatti {
  color: #fff;
  border-radius: 32px;
  font-size: 30px;
  box-shadow: var(--soft-shadow);
  padding-bottom: 2px;
  width: 215px;
}

.btn-hoverable {
  background-color: var(--button-color);
}

.btn-hoverable:hover {
  background-color: var(--button-hover-color);
}

#geo-icon {
  margin-bottom: 5px;
}

</style>