<template>
  <div class="col-md-3">
    <div class="sticky-top sticky-offset mt-3">
      <b-list-group>
        <b-list-group-item href="#list-item-1" active class="text-center bottom-list-item">Antipasti</b-list-group-item>
        <b-list-group-item href="#list-item-2" class="text-center bottom-list-item">Primi</b-list-group-item>
        <b-list-group-item href="#list-item-3" class="text-center bottom-list-item">Secondi</b-list-group-item>
        <b-list-group-item href="#list-item-4" class="text-center bottom-list-item">Contorni</b-list-group-item>
        <b-list-group-item href="#list-item-5" class="text-center bottom-list-item">Dolci</b-list-group-item>
      </b-list-group>
      <b-dropdown id="regione-dropdown" size="lg" :text="dropdownTitle" class="col-12 p-0 mt-3 mb-md-3">
        <b-dropdown-item :key="region" v-for="region in regions" @click="onRegionChange(region)">{{ region }}</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSidebar',
  data() {
    return {
      dropdownTitle: 'Regione',
      regions: ['Tutte le regioni', 'Abruzzo', 'Basilicata', 'Calabria', 'Campania', 'Emilia Romagna', 'Friuli-Venezia Giulia', 'Lazio',
        'Liguria', 'Lombardia', 'Marche', 'Molise', 'Piemonte', 'Puglia', 'Sardegna', 'Sicilia', 'Toscana',
        'Trentino Alto Adige', 'Umbria', 'Valle d\'Aosta', 'Veneto']
    }
  },
  methods: {
    onRegionChange(region) {
      this.setDropdownTitle(region)
      this.$emit('callback', { "region": region })
    },
    setDropdownTitle(region) {
      if (region === 'Tutte le regioni') {
        this.dropdownTitle = 'Regione'
      } else if (region === 'Emilia Romagna') {
        this.dropdownTitle = 'Emilia R.'
      } else if (region === 'Friuli-Venezia Giulia') {
          this.dropdownTitle = 'Friuli'
      } else if (region === 'Trentino Alto Adige') {
        this.dropdownTitle = 'Trentino'
      } else if (region === 'Valle d\'Aosta') {
        this.dropdownTitle = 'V. d\'Aosta'
      } else {
        this.dropdownTitle = region
      }
    }
  }
}
</script>

<style scoped>

.bottom-list-item {
  background-color: var(--main-color);
  font-size: 30px;
}

.bottom-list-item.active {
  background-color: var(--ingredients-sidebar-bg);
  color: var(--text-color);
  border-color: transparent;
}

.sticky-offset {
  top: 20px;
}

>>>#regione-dropdown > button {
  font-size: 30px;
  box-shadow: var(--soft-shadow);
  background: var(--button-color);
}

>>>#regione-dropdown > button:hover {
  background-color: var(--button-hover-color);
}

>>>#regione-dropdown > ul {
  font-size: 20px;
  text-align: center;
  max-height: 200px;
  overflow-y: auto;
  left: 50% !important;
  right: auto;
  transform: translate(-50%, 63px) !important;
  outline: none 0;
  -webkit-box-shadow: none;
}

</style>