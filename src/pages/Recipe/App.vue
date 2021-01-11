<template>
  <div id="app">
    <MainLayer>

      <div class="container p-0 mb-3" id="recipe_block">

        <div class="row d-flex d-lg-block">

          <div class="col-lg-3 order-1 float-left">
            <div id="ingredients_block_outer">
              <div id="ingredients_block_inner">

                <IngredientsBlock></IngredientsBlock>

              </div>
            </div>
          </div>

          <div class="col-lg-9 order-0 float-left">
            <div class="row">

              <div class="col-lg-8">
                <RecipeInfo></RecipeInfo>
              </div>

              <div class="col-lg-4">
                <CarouselBlock></CarouselBlock>
              </div>

            </div>
          </div>

          <div class="col-lg-9 order-1 float-left">
            <div class="row">
              <div class="col col-12">
                <PrepHistoryBlock id="1" title="Preparazione" text="Gli arrosticini sono espressione culinaria della pastorizia stanziale e non della transumanza, come si è ritenuto in passato: leggenda narra che furono inventati negli anni '30 da due pastori del Voltigno, area montuosa compresa tra Carpineto della Nora, Villa Celiera e Civitella Casanova, che tagliarono carne di pecora vecchia in piccoli pezzi per non sprecare cibo, prendendone anche dalle zone vicine alle ossa dell'animale. I piccoli pezzettini di carne sarebbero diventati spiedini venendo inseriti su bastoncini di legno di “vingh”, una pianta che cresce spontanea lungo le rive del fiume Pescara, per poi essere cucinati alla brace all’aperto. Il metodo di preparazione degli arrosticini, originariamente pensato per cercare di rendere appetibili i tagli di carne meno pregiati, ottenne risultati così apprezzabili da essere applicato ben presto ai tagli migliori. Secondo la tradizione pastorale il vero arrosticino abruzzese è composto di carne ovina, idealmente di carne di pecora giovane chiamata in dialetto “ciavarra” o di montone castrato. Ad oggi gli arrosticini sono ampiamente consumati anche al di fuori dell'Abruzzo e in alcune zone d'Italia si sono affermati nella vendita di grande distribuzione, spesso venendo meno alla qualità e alle caratteristiche care alla tradizione abruzzese.
"></PrepHistoryBlock>
              </div>
            </div>
          </div>

          <div class="col-lg-9 order-1 float-left">
            <div class="row mt-3">
              <div class="col-lg-8" id="storia-prodotto-column" style="border-right: 1px solid var(--dark) ;">

                <PrepHistoryBlock id="2" title="Storia del prodotto" text="Gli arrosticini sono espressione della pastorizia stanziale e non della transumanza, come si è ritenuto in passato: leggenda narra che furono inventati negli anni '30 da due pastori del Voltigno, area montuosa compresa tra Carpineto della Nora, Villa Celiera e Civitella Casanova, che tagliarono carne di pecora vecchia in piccoli pezzi per non sprecare cibo, prendendone anche dalle zone vicine alle ossa dell'animale. I piccoli pezzettini di carne sarebbero diventati spiedini venendo inseriti su bastoncini di legno di “vingh”, una pianta che cresce spontanea lungo le rive del fiume Pescara, per poi essere cucinati alla brace all’aperto. Il metodo di preparazione degli arrosticini, originariamente pensato per cercare di rendere appetibili i tagli di carne meno pregiati, ottenne risultati così apprezzabili da essere applicato ben presto ai tagli migliori. Secondo la tradizione pastorale il vero arrosticino abruzzese è composto di carne ovina, idealmente di carne di pecora giovane chiamata in dialetto “ciavarra” o di montone castrato. Ad oggi gli arrosticini sono ampiamente consumati anche al di fuori dell'Abruzzo e in alcune zone d'Italia si sono affermati nella vendita di grande distribuzione, spesso venendo meno alla qualità e alle caratteristiche care alla tradizione abruzzese.
"></PrepHistoryBlock>
              </div>

              <div class="col-lg-4">
                <RelatedRecipes></RelatedRecipes>
              </div>

            </div>
          </div>

        </div>

      </div>

    </MainLayer>
  </div>
</template>

<script>

import MainLayer from "@/components/MainLayer";
import $ from 'jquery'
import PrepHistoryBlock from "@/components/PrepHistoryBlock";
import RelatedRecipes from "@/components/RelatedRecipes";
import IngredientsBlock from "@/components/IngredientsBlock";
import RecipeInfo from "@/components/RecipeInfo";
import CarouselBlock from "@/components/CarouselBlock";

export default {
  name: 'Recipe',
  components: {
    CarouselBlock,
    RecipeInfo,
    IngredientsBlock,
    RelatedRecipes,
    PrepHistoryBlock,
    MainLayer
  }
}

$(document).ready(function() {

  adapt_ingredients_block_outer();
  fixStoriaProdottoBorder();

  $(window).resize(function() {
    adapt_ingredients_block_outer();
    fixStoriaProdottoBorder();
  });

  function adapt_ingredients_block_outer() {
    const ingredients_block_outer = document.getElementById('ingredients_block_outer');
    const ingredients_block_inner = document.getElementById('ingredients_block_inner');
    const recipe_block = document.getElementById('recipe_block');

    if ($(window).width() < 992) {
      ingredients_block_outer.style.backgroundColor='transparent';
      ingredients_block_inner.style.borderTopLeftRadius = '0px';

      ingredients_block_outer.style.minHeight = 'initial';
      ingredients_block_outer.style.height = 'initial';
      recipe_block.style.minHeight = 'initial';
      recipe_block.style.height = 'initial';
    } else {
      ingredients_block_outer.style.backgroundColor='#c9964c';
      ingredients_block_inner.style.borderTopLeftRadius = '19px';

      recipe_block.style.minHeight = '650px';
      recipe_block.style.height = 'calc(90vh - 80px)';
      ingredients_block_outer.style.minHeight = '650px';
      ingredients_block_outer.style.height = 'calc(90vh - 80px)';
    }
  }

  function fixStoriaProdottoBorder() {
    const storia_prodotto_column = document.getElementById('storia-prodotto-column');
    if ($(window).width() < 992) {
      storia_prodotto_column.style.borderRight = '0px';
    } else {
      storia_prodotto_column.style.borderRight = '1px solid var(--dark)';
    }
  }

});

</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz');

#app {
  font-family: 'Yanone Kaffeesatz', serif;
}

#recipe_block {
  border-radius: 19px;
  border-width: 1px;
  border-color: #000000;
  box-shadow: 2px 2px 7px;
  background: rgb(255,198,122);
}

#ingredients_block_inner {
  background-color: #c9964c;
  border-radius: 19px 0 0 0;
}

#ingredients_block_outer {
  border-top-left-radius: 19px;
  border-bottom-left-radius: 19px;
  border-width: 1px;
  background-color: rgb(201, 150, 76);
}

</style>