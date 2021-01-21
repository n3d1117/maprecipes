<template>
  <div>

    <ScrollToTopArrow></ScrollToTopArrow>

    <MainLayer>
      <div style="margin-bottom: 200px">
        <h1 id="searchbar_title">TROVA LE RICETTE DELLA TUA CITTÀ</h1>
        <div class="offset-lg-2 col-lg-8">
          <SearchBar @callback="didSearchForQuery"></SearchBar>
        </div>
      </div>
    </MainLayer>

    <div id="bottom-bg">
      <div class="container">
        <div class="row">

          <HomeSidebar></HomeSidebar>

          <div class="col-md-9">
            <h1 id="title-label" class="mt-4 text-left">{{ titleLabel }}</h1>

            <HomeResultBlock v-if="filteredAntipasti.length > 0" v-bind:recipes="filteredAntipasti" title="Antipasti"></HomeResultBlock>
            <HomeResultBlock v-if="filteredPrimi.length > 0" v-bind:recipes="filteredPrimi" title="Primi"></HomeResultBlock>
            <HomeResultBlock v-if="filteredSecondi.length > 0" v-bind:recipes="filteredSecondi" title="Secondi"></HomeResultBlock>
            <HomeResultBlock v-if="filteredContorni.length > 0" v-bind:recipes="filteredContorni" title="Contorni"></HomeResultBlock>
            <HomeResultBlock v-if="filteredDolci.length > 0" v-bind:recipes="filteredDolci" title="Dolci"></HomeResultBlock>

          </div>
        </div>
      </div>
    </div>

    <HomeFooter></HomeFooter>

  </div>
</template>

<script>
import $ from 'jquery'
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
      query: '',
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
    didSearchForQuery(data) {
      const query = data.selected
      const isExactMatch = data.exactMatch
      this.titleLabel = "Risultati per '" + query + "'"
      this.query = query
      if (isExactMatch) {
        const result = recipes.find(recipe => recipe.dish_name == query)
        this.$router.push({ name: 'recipe', params: { id: result.dish_id } })
      } else {
        $('html, body').animate({
          scrollTop: $("#title-label").offset().top - 20
        }, 'slow');
      }
    },
    removeDuplicates(array) {
      return [...new Set(array)];
    },
    filterByQuery(array) {
      const query = this.query
      const filteredByRegion = array.filter(recipe => {
        return (recipe.region.toLowerCase().indexOf(query.toLowerCase()) > -1)
      })
      const filteredByCity = array.filter(recipe => {
        return (recipe.city.toLowerCase().indexOf(query.toLowerCase()) > -1)
      })
      const filteredByIngredient = array.filter(recipe => {
        const allIngredients = recipe.ingredients.flatMap(ing => ing.ingredient.replace(' q.b',''))
        return allIngredients.some(function(ingredient) {
          return (ingredient.toLowerCase().indexOf(query.toLowerCase()) > -1)
        });
      })
      return this.removeDuplicates(filteredByRegion.concat(filteredByCity).concat(filteredByIngredient))
    }
  },
  computed: {
    filteredAntipasti: function() {
      return this.filterByQuery(this.antipasti)
    },
    filteredPrimi: function() {
      return this.filterByQuery(this.primi)
    },
    filteredSecondi: function() {
      return this.filterByQuery(this.secondi)
    },
    filteredContorni: function() {
      return this.filterByQuery(this.contorni)
    },
    filteredDolci: function() {
      return this.filterByQuery(this.dolci)
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
