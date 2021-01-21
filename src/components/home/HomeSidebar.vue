<template>
  <div class="col-md-3">
    <div class="sticky-top sticky-offset mt-3">
      <b-list-group>
        <b-list-group-item href="#" active class="text-center bottom-list-item">Antipasti</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Primi</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Secondi</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Contorni</b-list-group-item>
        <b-list-group-item href="#" class="text-center bottom-list-item">Dolci</b-list-group-item>
      </b-list-group>
      <b-dropdown id="regione-dropdown" size="lg" text="Regione" class="col-12 p-0 mt-3 mb-md-3">
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