<template>
  <MainLayer>

    <div style="margin-bottom: 50px">
      <h1 id="searchbar_title">MAPPA DEI PIATTI</h1>

      <div class="row col-lg-8 col-sm-12 mx-auto">

        <div class="col-md-9 col-xs-12 my-auto pr-md-4 pr-0 pl-0">
          <SearchBar :map-mode="true"></SearchBar>
        </div>

        <div class="col-md-3 col-xs-12 mt-md-0 mt-xs-2 mt-2 pl-0 pr-0">
          <b-dropdown id="piatto-dropdown" size="lg" text="Piatti" class="col-12 p-0">
            <b-dropdown-item>Antipasti</b-dropdown-item>
            <b-dropdown-item>Primi</b-dropdown-item>
            <b-dropdown-item>Secondi</b-dropdown-item>
            <b-dropdown-item>Contorni</b-dropdown-item>
            <b-dropdown-item>Dolci</b-dropdown-item>
          </b-dropdown>
        </div>

      </div>

      <div class="mt-4 offset-lg-2 col-lg-8 col-sm-12 d-flex align-items-center">
        <MapRecipes></MapRecipes>
      </div>
    </div>



  </MainLayer>
</template>

<script>

import MainLayer from "@/components/MainLayer";
import SearchBar from "@/components/SearchBar";
import MapRecipes from "@/components/map/MapRecipes";

export default {
  name: 'Map',
  components: {
    SearchBar,
    MainLayer,
    MapRecipes
  }
}

</script>

<style scoped>

#searchbar_title {
  font-size: 60px;
}

>>>#piatto-dropdown > button {
  height: 50px;
  font-size: 30px;
  box-shadow: var(--soft-shadow);
  background: var(--main-color);
  color: var(--text-color);
  border: var(--main-border);
  border-radius: 19px;
  padding-top: 5px;
}

>>>#piatto-dropdown > button:hover {
  background-color: var(--main-bg);
}

>>>#piatto-dropdown > ul {
  font-size: 20px;
  text-align: center;
  max-height: 200px;
  overflow-y: auto;
  left: 50% !important;
  right: auto;
  transform: translate(-50%, 50px) !important;
  outline: none 0;
  -webkit-box-shadow: none;
}

</style>
