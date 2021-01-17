<template>
  <l-popup>
    <div id="popupContainer">

      <b-row id="title" class="d-flex justify-content-center pb-2 pt-2 text-center">
        {{ recipe.dish_name }}
      </b-row>
      <b-row class="d-flex justify-content-center">

        <router-link :to="'/recipe/' + recipe.dish_id" target="_blank">
          <button class="btn btn-primary btn-hoverable" type="button">
            <b-icon icon="receipt"></b-icon>&nbsp; RICETTA
          </button>
        </router-link>

      </b-row>

    </div>
  </l-popup>
</template>

<script>
import { LPopup } from "vue2-leaflet";

export default {
  name: 'MapPopup',
  props: ['recipe'],
  components: {
    LPopup
  }
}
</script>


<style>
.leaflet-popup-content-wrapper, .leaflet-popup-tip {
  background: rgb(255,198,122) !important;
  box-shadow: 2px 2px 7px 0 black !important;
}
.leaflet-popup-close-button {
  color: #707070 !important;
}
</style>

<style scoped>
div {
  font-family: 'Yanone Kaffeesatz', serif;
}

#popupContainer {
  width: 100px;
}

#title {
  font-size: 20px;
}

.btn-hoverable {
  background-color: rgb(72,58,230) !important;
  color: #fff !important;
  font-size: 20px !important;
  vertical-align: bottom !important;
  border-radius: 53px !important;
  box-shadow: 3px 3px 3px var(--dark) !important;
  border-color: rgba(255,255,255,0) !important;
  padding-bottom: 2px !important;
}

.btn-hoverable:hover {
  background-color: #8667ff !important;
}

.btn-hoverable:active {
  background-color: #000cb2 !important;
}
</style>