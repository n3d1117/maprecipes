<template>
  <div class="col-md-3">
    <div class="sticky-top mt-3">
      <b-list-group>
        <b-list-group-item href="#" active class="text-center bottom-list-item">Antipasti</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Primi</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Secondi</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Contorni</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Dolci</b-list-group-item>
      </b-list-group>
      <b-dropdown id="regione-dropdown" size="lg" text="Regione" class="col-12 p-0 mt-3">
        <b-dropdown-item>Abruzzo</b-dropdown-item>
        <b-dropdown-item>Basilicata</b-dropdown-item>
        <b-dropdown-item>Calabria</b-dropdown-item>
        <b-dropdown-item>Campania</b-dropdown-item>
        <b-dropdown-item>Emilia Romagna</b-dropdown-item>
        <b-dropdown-item>Friuli Venezia Giulia</b-dropdown-item>
        <b-dropdown-item>Lazio</b-dropdown-item>
        <b-dropdown-item>Liguria</b-dropdown-item>
        <b-dropdown-item>Lombardia</b-dropdown-item>
        <b-dropdown-item>Marche</b-dropdown-item>
        <b-dropdown-item>Molise</b-dropdown-item>
        <b-dropdown-item>Piemonte</b-dropdown-item>
        <b-dropdown-item>Puglia</b-dropdown-item>
        <b-dropdown-item>Sardegna</b-dropdown-item>
        <b-dropdown-item>Sicilia</b-dropdown-item>
        <b-dropdown-item>Toscana</b-dropdown-item>
        <b-dropdown-item>Trentino Alto Adige</b-dropdown-item>
        <b-dropdown-item>Umbria</b-dropdown-item>
        <b-dropdown-item>Valle d'Aosta</b-dropdown-item>
        <b-dropdown-item>Veneto</b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSidebar'
}
</script>

<style scoped>

.bottom-list-item {
  background-color: rgb(255, 198, 122) !important;
  font-size: 30px;
}

.bottom-list-item.active {
  background-color: #c9964c !important;
  color: #495057;
  border-color: transparent;
}

>>>#regione-dropdown > button {
  font-size: 30px;
  box-shadow: 2px 2px 10px #aaaaaa;
  background: #483ae6;
}

>>>#regione-dropdown > button:hover {
  background-color: #8667ff;
}

>>>#regione-dropdown > ul {
  font-size: 20px;
  text-align: center;
}

>>>.dropdown-menu {
  max-height: 200px;
  overflow-y: auto;
}
</style>