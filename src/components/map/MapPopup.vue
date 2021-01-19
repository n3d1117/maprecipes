<template>
  <l-popup :options="{ maxWidth: 'auto' }">

    <div id="popupContainer">

      <b-row class="d-flex justify-content-center mt-3 pt-1 mb-2 text-center">
        <img class="popup-img"
             width="115px"
             :src="require(`@/assets/${recipe.photos[0]}`)"
             :alt="recipe.dish_name"
        >
      </b-row>
      <b-row id="title" class="d-flex justify-content-center mb-2 pt-1 text-center">
        {{ recipe.dish_name }}
      </b-row>
      <b-row class="d-flex justify-content-center">

        <router-link :to="'/recipe/' + recipe.dish_id" target="_blank">
          <button class="btn btn-primary btn-hoverable" type="button">
            <b-icon icon="receipt" id="receipt-icon"></b-icon>&nbsp; RICETTA
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
  background: var(--main-color) !important;
  box-shadow: 2px 2px 7px 0 black !important;
}
.leaflet-popup-close-button {
  color: #707070 !important;
}
</style>

<style scoped>

div {
  font-family: var(--main-font);
}

#popupContainer {
  width: 100px;
}

#title {
  font-size: 20px;
  line-height: 1;
}

.btn-hoverable {
  background-color: var(--button-color);
  color: #fff;
  font-size: 16px;
  vertical-align: bottom;
  border-radius: 53px;
  box-shadow: var(--soft-shadow);
  border-color: transparent;
  padding-bottom: 2px;
}

.btn-hoverable:hover {
  background-color: var(--button-hover-color);
}

.btn-hoverable:focus,
.btn-hoverable:active {
  background-color: var(--button-hover-color) !important;
}

#receipt-icon {
  margin-bottom: 3px;
}

.popup-img {
  border-radius: 11px;
  box-shadow: var(--soft-shadow);
}

</style>