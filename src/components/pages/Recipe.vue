<template>
  <MainLayer>

    <div class="container p-0 mb-3" id="recipe_block">

      <div class="row d-flex d-lg-block">

        <div class="col-lg-3 order-1 float-left">
          <div id="ingredients_block_outer">
            <div id="ingredients_block_inner">

              <IngredientsBlock v-bind:ingredients="recipe.ingredients" v-bind:video_link="recipe.video_recipe"></IngredientsBlock>

            </div>
          </div>
        </div>

        <div class="col-lg-9 order-0 float-left">
          <div class="row">

            <div class="col-lg-8">
              <RecipeInfo v-bind:region="recipe.region" v-bind:city="recipe.city" v-bind:name="recipe.dish_name"></RecipeInfo>
            </div>

            <div class="col-lg-4">
              <CarouselBlock v-bind:photos="recipe.photos" v-bind:title="recipe.dish_name"></CarouselBlock>
            </div>

          </div>
        </div>

        <div class="col-lg-9 order-1 float-left">
          <div class="row">
            <div class="col col-12">
              <PrepHistoryBlock title="Preparazione" :text="recipe.preparation"></PrepHistoryBlock>
            </div>
          </div>
        </div>

        <div class="col-lg-9 order-1 float-left">
          <div class="row mt-3">
            <div class="col-lg-8" id="storia-prodotto-column" style="border-right: 1px solid var(--dark) ;">

              <PrepHistoryBlock title="Storia del prodotto" :text="recipe.product_history"></PrepHistoryBlock>
            </div>

            <div class="col-lg-4">
              <RelatedRecipes v-bind:related_recipes="recipe.related_recipes"></RelatedRecipes>
            </div>

          </div>
        </div>

      </div>

    </div>

  </MainLayer>
</template>

<script>

import MainLayer from "@/components/MainLayer";
import $ from 'jquery'
import PrepHistoryBlock from "@/components/PrepHistoryBlock";
import RelatedRecipes from "@/components/RelatedRecipes";
import IngredientsBlock from "@/components/IngredientsBlock";
import RecipeInfo from "@/components/RecipeInfo";
import CarouselBlock from "@/components/CarouselBlock";
import recipes from '@/recipes.json'

export default {
  name: 'Recipe',
  components: {
    CarouselBlock,
    RecipeInfo,
    IngredientsBlock,
    RelatedRecipes,
    PrepHistoryBlock,
    MainLayer
  },
  props: ['id'],
  computed: {
    recipe() {
      return recipes.find(recipe => recipe.dish_id == this.id)
    }
  },
  mounted() {
    function adapt_ingredients_block_outer() {
      const ingredients_block_outer = document.getElementById('ingredients_block_outer');
      const ingredients_block_inner = document.getElementById('ingredients_block_inner');
      const recipe_block = document.getElementById('recipe_block');

      if (ingredients_block_outer != null) {
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

    }

    function fixStoriaProdottoBorder() {
      const storia_prodotto_column = document.getElementById('storia-prodotto-column');
      if (storia_prodotto_column != null) {
        if ($(window).width() < 992) {
          storia_prodotto_column.style.borderRight = '0px';
        } else {
          storia_prodotto_column.style.borderRight = '1px solid var(--dark)';
        }
      }

    }

    adapt_ingredients_block_outer();
    fixStoriaProdottoBorder();

    $(window).resize(function() {
      adapt_ingredients_block_outer();
      fixStoriaProdottoBorder();
    });
  }
}

</script>

<style>

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