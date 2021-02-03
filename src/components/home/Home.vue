<template>
  <div>
    <ScrollToTopArrow />

    <MainLayer>
      <div style="margin-bottom: 200px">
        <h1 id="searchbar_title">
          TROVA LE RICETTE DELLA TUA CITTÀ
        </h1>
        <div class="offset-lg-2 col-lg-8">
          <SearchBar
            ref="searchbar"
            @callback="didSearchForQuery"
          />
        </div>
      </div>
      <ScrollDownIcon @callback="scrollToResults" />
    </MainLayer>

    <div id="bottom-bg">
      <div class="container">
        <div class="row">
          <HomeSidebar
            ref="sidebar"
            @callback="onRegionChange"
          />

          <div class="col-md-9">
            <h1
              id="title-label"
              class="mt-4 text-left"
            >
              {{ titleLabel }}
            </h1>
            
            <NoResult v-if="isEmpty" />

            <HomeResultBlock
              v-if="filteredAntipasti.length > 0"
              id="list-item-1"
              class="scrollspy"
              :recipes="filteredAntipasti"
              title="Antipasti"
            />
            <HomeResultBlock
              v-if="filteredPrimi.length > 0"
              id="list-item-2"
              class="scrollspy"
              :recipes="filteredPrimi"
              title="Primi"
            />
            <HomeResultBlock
              v-if="filteredSecondi.length > 0"
              id="list-item-3"
              class="scrollspy"
              :recipes="filteredSecondi"
              title="Secondi"
            />
            <HomeResultBlock
              v-if="filteredContorni.length > 0"
              id="list-item-4"
              class="scrollspy"
              :recipes="filteredContorni"
              title="Contorni"
            />
            <HomeResultBlock
              v-if="filteredDolci.length > 0"
              id="list-item-5"
              class="scrollspy"
              :recipes="filteredDolci"
              title="Dolci"
            />
          </div>
        </div>
      </div>
    </div>

    <ContactForm />

    <HomeFooter />
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
import ScrollDownIcon from "@/components/home/ScrollDownIcon";
import ContactForm from "@/components/home/ContactForm";
import NoResult from "@/components/home/NoResult";

export default {
  name: 'Home',
  components: {
    NoResult,
    ContactForm,
    ScrollDownIcon,
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
      resultType: '',
      antipasti: this.filterByRecipeTypeAndSort('Antipasti'),
      primi: this.filterByRecipeTypeAndSort('Primi'),
      secondi: this.filterByRecipeTypeAndSort('Secondi'),
      contorni: this.filterByRecipeTypeAndSort('Contorni'),
      dolci: this.filterByRecipeTypeAndSort('Dolci')
    }
  },
  computed: {
    titleLabel: function() {
      if (this.query === '')
        return 'Elenco Ricette'
      if (this.isEmpty)
        return "Nessun risultato per '" + this.query + "'"
      return "Risultati per '" + this.query + "'"
    },
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
    },
    isEmpty: function() {
      return this.filteredAntipasti.length === 0 &&
          this.filteredPrimi.length === 0 &&
          this.filteredSecondi.length === 0 &&
          this.filteredContorni.length === 0 &&
          this.filteredDolci.length === 0
    }
  },
  mounted() {

    // Smooth scroll when clicking on # href
    // https://stackoverflow.com/a/18365991
    $('a[href*=\\#]').on('click', function(event){
      event.preventDefault();
      if ($(this.hash).offset())
        $('html,body').animate(
            { scrollTop:$(this.hash).offset().top },
            'slow'
        );
    });

    // Scrollspy logic to activate correct list group item on scroll
    $(window).bind('scroll', function() {
      const currentTop = $(window).scrollTop();
      const elems = $('.scrollspy');
      const height = $(window).height();
      elems.each(function() {
        const elemTop 	= $(this).offset().top - (height/3);
        const elemBottom 	= elemTop + $(this).height();
        if (currentTop >= elemTop && currentTop <= elemBottom) {
          const id = $(this).attr('id');
          const navElem = $('a[href="#' + id + '"]');
          navElem.addClass('active').siblings().removeClass('active');
        }
      })
    });
  },
  methods: {
    filterByRecipeTypeAndSort(type) {
      return recipes
          .filter(recipe => recipe.type === type)
          .sort((a, b) => (a.name > b.name) ? 1 : -1);
    },
    didSearchForQuery(data) {
      this.resultType = data.resultType
      this.query = data.selected.trim()

      if (this.query !== '') {
        if (this.resultType === 'recipe') {
          const result = recipes.find(recipe => recipe.name === this.query)
          this.$router.push({name: 'recipe', params: {id: result.id}})
        } else {
          this.$refs.sidebar.dropdownTitle = 'Regione'
          this.scrollToResults()
        }
      }
    },
    removeDuplicates(array) {
      return [...new Set(array)];
    },
    filterByQuery(array) {
      const query = this.query

      // https://stackoverflow.com/a/37511463
      function normalized(string) {
        return string.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
      }

      const filteredByRecipeName = array.filter(recipe => {
        return (normalized(recipe.name.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
      })
      const filteredByRegion = array.filter(recipe => {
        return (normalized(recipe.region.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
      })
      const filteredByCity = array.filter(recipe => {
        return (normalized(recipe.city.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
      })
      const filteredByIngredient = array.filter(recipe => {
        const allIngredients = recipe.ingredients.flatMap(ing => ing.name.replace(' q.b',''))
        return allIngredients.some(function(ingredient) {
          return (normalized(ingredient.toLowerCase()).indexOf(normalized(query.toLowerCase())) > -1)
        });
      })

      switch (this.resultType) {
        case 'recipe':
          return filteredByRecipeName
        case 'region':
          return filteredByRegion
        case 'city':
          return filteredByCity
        case 'ingredient':
          return filteredByIngredient
        default:
          return this.removeDuplicates(
              filteredByRecipeName.concat(filteredByRegion.concat(filteredByCity).concat(filteredByIngredient))
          )
      }
    },
    onRegionChange(data) {
      const region = data.region
      if (region === 'Tutte le regioni') {
        this.query = ''
      } else {
        this.query = region
      }
      this.$refs.searchbar.query = ''
      this.scrollToResults()
    },
    scrollToResults() {
      $('html, body').animate({
        scrollTop: $("#title-label").offset().top - 20
      }, 'slow');
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
