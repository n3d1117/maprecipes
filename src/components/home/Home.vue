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
            <h1 class="mt-4 text-left">{{ titleLabel }}</h1>

            <HomeResultBlock v-if="antipasti.length > 0" v-bind:recipes="antipasti" title="Antipasti"></HomeResultBlock>
            <HomeResultBlock v-if="primi.length > 0" v-bind:recipes="primi" title="Primi"></HomeResultBlock>
            <HomeResultBlock v-if="secondi.length > 0" v-bind:recipes="secondi" title="Secondi"></HomeResultBlock>
            <HomeResultBlock v-if="contorni.length > 0" v-bind:recipes="contorni" title="Contorni"></HomeResultBlock>
            <HomeResultBlock v-if="dolci.length > 0" v-bind:recipes="dolci" title="Dolci"></HomeResultBlock>

          </div>
        </div>
      </div>
    </div>

    <HomeFooter></HomeFooter>

  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"
import HomeSidebar from "@/components/home/HomeSidebar";
import HomeResultBlock from "@/components/home/HomeResultBlock";
import MainLayer from "@/components/MainLayer";
import HomeFooter from "@/components/home/HomeFooter";
import ScrollToTopArrow from "@/components/home/ScrollToTopArrow";
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
      titleLabel: 'Elenco Ricette',
      antipasti: this.filterByRecipeTypeAndSort('Antipasti'),
      primi: this.filterByRecipeTypeAndSort('Primi'),
      secondi: this.filterByRecipeTypeAndSort('Secondi'),
      contorni: this.filterByRecipeTypeAndSort('Contorni'),
      dolci: this.filterByRecipeTypeAndSort('Dolci')
    }
  },
  methods: {
    filterByRecipeTypeAndSort(type) {
      return recipes
          .filter(recipe => recipe.dish_type === type)
          .sort((a, b) => (a.dish_name > b.dish_name) ? 1 : -1);
    },
    filterByQueryAndSort(array, query) {
      const filteredByRecipeName = array.filter(recipe => {
        return (recipe.dish_name.toLowerCase().indexOf(query.toLowerCase()) > -1)
      }).sort();

      // todo others

      return filteredByRecipeName;
    },
    didSearchForQuery(data) {
      const query = data.selected
      const isExactMatch = data.exactMatch
      this.titleLabel = "Risultati per '" + query + "'"
      if (isExactMatch) {
        const result = recipes.find(recipe => recipe.dish_name == query)
        this.$router.push({ name: 'recipe', params: { id: result.dish_id } })
      } else {
        this.antipasti = this.filterByQueryAndSort(this.antipasti, query)
        this.primi = this.filterByQueryAndSort(this.primi, query)
        this.secondi = this.filterByQueryAndSort(this.secondi, query)
        this.contorni = this.filterByQueryAndSort(this.contorni, query)
        this.dolci = this.filterByQueryAndSort(this.dolci, query)
        // todo scroll
      }
    }
  }
}
</script>

<style scoped>

#bottom-bg {
  background-color: var(--main-bg);
}

#searchbar_title {
  font-size: 60px;
}

</style>
