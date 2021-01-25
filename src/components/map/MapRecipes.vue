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

    <l-marker
        v-bind:key="recipe.dish_id"
        v-for="recipe in recipes"
        :lat-lng="convertCoords(recipe.coords)"
        :icon="getIcon(recipe)"
    >
      <MapPopup v-bind:recipe="recipe"></MapPopup>
    </l-marker>

  </l-map>
</template>

<script>
import { latLng } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import recipes from '@/recipes.json'
import MapPopup from "@/components/map/MapPopup";
import L from 'leaflet';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import 'leaflet-fullscreen/dist/Leaflet.fullscreen';

export default {
  name: 'MapRecipes',
  components: {
    MapPopup,
    LMap,
    LTileLayer,
    LMarker
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
      blueIcon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
      redIcon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
      goldIcon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
      greenIcon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
      violetIcon: L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-violet.png',
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      }),
    };
  },
  methods: {
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
    }
  },
  mounted() {
    const map = this.$refs.recipes_map.mapObject;
    map.addControl(new window.L.Control.Fullscreen());
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