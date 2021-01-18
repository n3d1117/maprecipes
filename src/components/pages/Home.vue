<template>
  <div>

    <ScrollToTopArrow></ScrollToTopArrow>

    <MainLayer>
      <h1 id="searchbar_title">TROVA LE RICETTE DELLA TUA CITTÀ</h1>
      <div class="offset-lg-2 col-lg-8">
        <SearchBar></SearchBar>
      </div>
    </MainLayer>

    <div id="bottom-bg">
      <div class="container">
        <div class="row">

          <HomeSidebar></HomeSidebar>

          <div class="col-md-9">
            <h1 class="mt-4 text-left">Elenco Ricette</h1>

            <HomeResultBlock v-bind:recipes="antipasti" title="Antipasti"></HomeResultBlock>
            <HomeResultBlock v-bind:recipes="primi" title="Primi"></HomeResultBlock>
            <HomeResultBlock v-bind:recipes="secondi" title="Secondi"></HomeResultBlock>
            <HomeResultBlock v-bind:recipes="contorni" title="Contorni"></HomeResultBlock>
            <HomeResultBlock v-bind:recipes="dolci" title="Dolci"></HomeResultBlock>

          </div>
        </div>
      </div>
    </div>

    <HomeFooter></HomeFooter>

  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"
import HomeSidebar from "@/components/HomeSidebar";
import HomeResultBlock from "@/components/HomeResultBlock";
import MainLayer from "@/components/MainLayer";
import HomeFooter from "@/components/HomeFooter";
import ScrollToTopArrow from "@/components/ScrollToTopArrow";
import recipes from '@/recipes.json'

export default {
  name: 'Home',
  components: {
    ScrollToTopArrow,
    HomeFooter,
    MainLayer,
    HomeResultBlock,
    HomeSidebar,
    SearchBar
  },
  data() {
    return {
      antipasti: this.filterAndSort('Antipasti'),
      primi: this.filterAndSort('Primi'),
      secondi: this.filterAndSort('Secondi'),
      contorni: this.filterAndSort('Contorni'),
      dolci: this.filterAndSort('Dolci')
    }
  },
  methods: {
    filterAndSort(type) {
      return recipes
          .filter(recipe => recipe.dish_type === type)
          .sort((a, b) => (a.dish_name > b.dish_name) ? 1 : -1);
    }
  }
}
</script>

<style scoped>

#bottom-bg {
  background-color: #fff9aa;
}

#searchbar_title {
  font-size: 60px;
}

</style>
