<template>
  <l-map
      id="map"
      class="mb-3"
      ref="recipes_map"
      v-if="showMap"
      :zoom="zoom"
      :center="center"
      :options="mapOptions"
  >
    <l-tile-layer
        :url="url"
        :attribution="attribution"
    />

    <l-control position="bottomleft">
      <MapLegend/>
    </l-control>

    <l-marker
        :key="recipe.dish_id"
        v-for="recipe in filteredRecipes"
        :lat-lng="convertCoords(recipe.coords)"
        :icon="getIcon(recipe)"
        ref="markers"
    >
      <MapPopup :recipe="recipe"/>
    </l-marker>

  </l-map>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LControl } from "vue2-leaflet";
import recipes from '@/recipes.json'
import region_centers from '@/region_centers.json'
import MapPopup from "@/components/map/MapPopup";
import MapLegend from "@/components/map/MapLegend";
import L from 'leaflet';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';

export default {
  name: 'MapRecipes',
  components: {
    MapPopup,
    LMap,
    LTileLayer,
    LMarker,
    LControl,
    MapLegend
  },
  data() {
    return {
      zoom: 5.3,
      center: latLng(42.4698256,12.5936345),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright" target="_blank">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5,
        tap: false // https://github.com/Leaflet/Leaflet/issues/7255#issuecomment-732082150
      },
      showMap: true,
      recipes: recipes,
      blueIcon: this.generateMarker('blue'),
      redIcon: this.generateMarker('red'),
      goldIcon: this.generateMarker('gold'),
      greenIcon: this.generateMarker('green'),
      violetIcon: this.generateMarker('violet'),
      dishType: 'Tutti i piatti',
      query: '',
      resultType: '',
      isFilteringByDropdown: false
    };
  },
  methods: {
    generateMarker(color) {
      return L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-' + color + '.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      })
    },
    convertCoords(arr) {
      return latLng(arr[0], arr[1])
    },
    getIcon(recipe) {
      switch (recipe.dish_type) {
        case 'Antipasti': return this.violetIcon
        case 'Primi': return this.blueIcon
        case 'Contorni': return this.greenIcon
        case 'Secondi': return this.redIcon
        case 'Dolci': return this.goldIcon
      }
    },
    filterByQuery(array) {
      const query = this.query

      // https://stackoverflow.com/a/37511463
      function normalized(string) {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      }

      const filteredByRecipeName = array.filter(recipe => {
        return (normalized(recipe.dish_name.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
      })
      const filteredByRegion = array.filter(recipe => {
        return (normalized(recipe.region.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
      })
      const filteredByCity = array.filter(recipe => {
        return (normalized(recipe.city.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
      })
      const filteredByIngredient = array.filter(recipe => {
        const allIngredients = recipe.ingredients.flatMap(ing => ing.ingredient.replace(' q.b',''))
        return allIngredients.some(function(ingredient) {
          return (normalized(ingredient.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
        });
      })

      this.zoomAndCenter()

      switch (this.resultType) {
        case 'recipe':

          setTimeout(() => {
            this.$refs.markers[0].mapObject.openPopup();
          }, 800)

          return filteredByRecipeName
        case 'region':
          return filteredByRegion
        case 'city':
          return filteredByCity
        case 'ingredient':
          return filteredByIngredient
        default:
          return this.removeDuplicates(
              filteredByRecipeName.concat(filteredByRegion.concat(filteredByCity).concat(filteredByIngredient))
          )
      }
    },
    removeDuplicates(array) {
      return [...new Set(array)];
    },
    setZoom(zoomLevel) {
      setTimeout(() => {
        this.$refs.recipes_map.setZoom(zoomLevel)
      }, 500)
    },
    zoomAndCenter() {
      switch (this.resultType) {
        case 'recipe':
          this.center = this.convertCoords(recipes.find(recipe => recipe.dish_name === this.query).coords)
          this.setZoom(10)
          break;
        case 'region':
          this.center = this.convertCoords(region_centers.find(result => result.region === this.query).center)
          this.setZoom(8)
          break;
        case 'city':
          this.center = this.convertCoords(recipes.find(recipe => recipe.city === this.query).coords)
          this.setZoom(9.5)
          break;
        default:
          this.resetZoom()
          break;
      }
    },
    resetZoom() {
      this.center = latLng(42.4698256,12.5936345)
      this.setZoom(5.3)
    }
  },
  computed: {
    filteredRecipes() {
      if (this.isFilteringByDropdown) {
        if (this.dishType === 'Tutti i piatti')
          return recipes
        return recipes.filter(recipe => {
          return recipe.dish_type === this.dishType
        });
      } else {
        if (this.query === '')
          return recipes
        return this.filterByQuery(recipes)
      }
    }
  },
  mounted() {
    /*const map = this.$refs.recipes_map.mapObject;
    map.addControl(new window.L.Control.Fullscreen());*/
  }
}
</script>

<style scoped>

#map {
  width: 100%;
  height: 450px;
  box-shadow: var(--soft-shadow);
  border: var(--main-border);
}

</style>