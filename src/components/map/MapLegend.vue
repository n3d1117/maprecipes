<template>
  <div class="legend">
    <p v-b-toggle.accordion>Legenda <b-icon icon="chevron-up" font-scale="0.8" :rotate="rotateDeg"/></p>
    <b-collapse id="accordion">
      <b-row :key="type.name" v-for="type in dishTypes">
        <b-col cols="3">
          <i class="icon" :style="{ backgroundImage: `url(https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-${type.color}.png)` }"></i>
        </b-col>
        <b-col class="pl-2 text-left">
          {{ type.name }}
        </b-col>
      </b-row>
    </b-collapse>
  </div>
</template>

<script>

export default {
  name: 'MapLegend',
  data() {
    return {
      dishTypes: [
          { name: "Antipasti", color: "violet" },
          { name: "Primi", color: "blue" },
          { name: "Secondi", color: "red" },
          { name: "Contorni", color: "green" },
          { name: "Dolci", color: "gold" },
      ],
      rotateDeg: 0
    }
  },
  mounted() {
    this.$root.$on('bv::collapse::state', (accordion, shown) => {
      this.rotateDeg = shown ? 180 : 0
    })
  }
}
</script>

<style scoped>

.legend {
  padding: 6px 8px;
  font-size: 16px;
  font-family: var(--main-font);
  background: white;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: var(--soft-shadow);
  border-radius: var(--main-radius);
  line-height: 24px;
  color: #555;
  width: 107px;
}
.legend p {
  text-align: center;
  font-size: 18px;
  margin: 2px 2px 2px;
  color: #777;
  outline: none;
}

.legend i {
  width: 15px;
  height: 22px;
  float: left;
  margin: 0 0 0 3px;
  opacity: 0.7;
}

.legend i.icon {
  background-size: 13px;
  background-color: transparent;
  background-repeat: no-repeat;
}

</style>