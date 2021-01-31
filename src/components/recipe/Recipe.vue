<template>
  <MainLayer>
    <div
      id="recipe_block"
      class="container p-0 mb-5"
    >
      <div class="row d-flex d-lg-block">
        <div class="col-lg-3 order-1 float-left">
          <div id="ingredients_block_outer">
            <div id="ingredients_block_inner">
              <IngredientsBlock
                :ingredients="recipe.ingredients"
                :video-link="recipe.video_recipe"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-9 order-0 float-left">
          <div class="row">
            <div class="col-lg-7">
              <RecipeInfo
                :region="recipe.region"
                :city="recipe.city"
                :name="recipe.dish_name"
              />
            </div>

            <div class="col-lg-5">
              <CarouselBlock
                :photos="recipe.photos"
                :title="recipe.dish_name"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-9 order-1 float-left">
          <div class="row">
            <div class="col col-12">
              <PrepHistoryBlock
                title="Preparazione"
                :text="recipe.preparation"
              />
            </div>
          </div>
        </div>

        <div class="col-lg-9 order-1 float-left">
          <div class="row mt-3">
            <div
              id="storia-prodotto-column"
              class="col-lg-8"
            >
              <PrepHistoryBlock
                title="Storia del prodotto"
                :text="recipe.product_history"
              />
            </div>

            <div class="col-lg-4">
              <RelatedRecipes :related-recipes="recipe.related_recipes" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayer>
</template>

<script>

import $ from 'jquery'
import MainLayer from "@/components/MainLayer";
import PrepHistoryBlock from "@/components/recipe/PrepHistoryBlock";
import RelatedRecipes from "@/components/recipe/RelatedRecipes";
import IngredientsBlock from "@/components/recipe/IngredientsBlock";
import RecipeInfo from "@/components/recipe/RecipeInfo";
import CarouselBlock from "@/components/recipe/CarouselBlock";
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
          ingredients_block_outer.style.backgroundColor='var(--ingredients-sidebar-bg)';
          ingredients_block_inner.style.borderTopLeftRadius = 'var(--main-radius)';

          recipe_block.style.minHeight = '700px';
          recipe_block.style.height = 'calc(90vh - 80px)';
          ingredients_block_outer.style.minHeight = '700px';
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
          storia_prodotto_column.style.borderRight = 'var(--main-border)';
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

<style scoped>

#recipe_block {
  border-radius: var(--main-radius);
  box-shadow: var(--soft-shadow);
  background: var(--main-color);
}

#ingredients_block_inner {
  background-color: var(--ingredients-sidebar-bg);
  border-radius: var(--main-radius) 0 0 0;
}

#ingredients_block_outer {
  border-top-left-radius: var(--main-radius);
  border-bottom-left-radius: var(--main-radius);
  background-color: var(--ingredients-sidebar-bg);
}

#storia-prodotto-column {
  border-right: 1px solid var(--dark)
}

</style>