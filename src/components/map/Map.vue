<template>
  <MainLayer>

    <div style="margin-bottom: 50px">
      <h1 id="searchbar_title">MAPPA DEI PIATTI</h1>

      <div class="row col-lg-8 col-sm-12 mx-auto">

        <div class="col-md-9 col-xs-12 my-auto pr-md-4 pr-0 pl-0">
          <SearchBar @callback="didSearchForQuery" :map-mode="true" ref="searchbar"/>
        </div>

        <div class="col-md-3 col-xs-12 mt-md-0 mt-xs-2 mt-2 pl-0 pr-0">
          <b-dropdown id="piatto-dropdown" size="lg" :text="dropdownTitle" class="col-12 p-0">
            <b-dropdown-item :key="type" v-for="type in dishTypes" @click="onTypeChange(type)">{{ type }}</b-dropdown-item>
          </b-dropdown>
        </div>

      </div>

      <div class="mt-4 offset-lg-2 col-lg-8 col-sm-12 d-flex align-items-center">
        <MapRecipes ref="map"/>
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
  },
  data() {
    return {
      dishTypes: ['Tutti i piatti', 'Antipasti', 'Primi', 'Secondi', 'Contorni', 'Dolci'],
      dropdownTitle: 'Piatti'
    }
  },
  methods: {
    onTypeChange(type) {
      if (type === 'Tutti i piatti')
        this.$refs.map.resetZoom()
      this.setDropdownTitle(type)
      this.$refs.map.query = ''
      this.$refs.searchbar.query = ''
      this.$refs.map.isFilteringByDropdown = true
      this.$refs.map.dishType = type
    },
    setDropdownTitle(type) {
      if (type === 'Tutti i piatti')
        this.dropdownTitle = 'Piatti'
      else
        this.dropdownTitle = type
    },
    didSearchForQuery(data) {
      this.setDropdownTitle('Tutti i piatti')
      this.$refs.map.dishType = 'Tutti i piatti'
      this.$refs.map.isFilteringByDropdown = false
      this.$refs.map.query = data.selected
      this.$refs.map.resultType = data.resultType
    }
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
  max-height: 250px;
  overflow-y: auto;
  left: 50% !important;
  right: auto;
  transform: translate(-50%, 50px) !important;
  outline: none 0;
  -webkit-box-shadow: none;
}

</style>
