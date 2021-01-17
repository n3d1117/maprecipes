<template>
  <div>
    <h1 class="pt-2">
      <b-icon icon="receipt" class="p-0 m-0"></b-icon>&nbsp; Ingredienti
    </h1>

    <div class="ml-2 mr-2" id="regola_porzioni">
      <div class="row mt-2">
        <h4 class="text-right col-6 mb-0">Porzioni:</h4>
        <div class="qty col-6 text-left">
          <span class="minus bg-dark" v-on:click="decreaseCounter">-</span>
          <input type="number" class="count" name="qty" v-model.number="counter" disabled>
          <span class="plus bg-dark" v-on:click="increaseCounter">+</span>
        </div>
      </div>
    </div>


    <ul id="lista_ingredienti" class="mt-3" v-for="ingredient in orderedIngredients" v-bind:key="ingredient.ingredient">
      <li v-if="ingredient.quantity === 0">{{ ingredient.ingredient }}</li>
      <li v-else>{{ ingredient.ingredient }} {{ ingredient.quantity }} gr</li>
    </ul>


    <a :href="video_link" target="_blank">
      <div class="pb-3">
        <button class="btn btn-primary btn-hoverable" type="button">
          <b-icon icon="youtube"></b-icon>&nbsp; VIDEORICETTA
        </button>
      </div>
    </a>

  </div>
</template>

<script>

export default {
  name: 'IngredientsBlock',
  props: ['ingredients', 'video_link'],
  data: function() {
    return {
      counter: 4,
    };
  },
  computed: {
    orderedIngredients: function() {

      const or = this.ingredients.map(x => ({...x}))

      let ingredient;
      for (ingredient of or) {
        if (ingredient.quantity !== 0)
          ingredient.quantity = Math.round(ingredient.quantity * (this.counter / 4));
      }

      return or.sort((a, b) => {
        if (a.quantity === b.quantity)
          return (a.ingredient < b.ingredient) ? 1 : -1;
        return (a.quantity < b.quantity) ? 1 : -1;
      });
    },
  },
  methods: {
    increaseCounter: function() {
      if (this.counter < 12) {
        this.counter += 1;
      }
    },
    decreaseCounter: function() {
      if (this.counter > 1) {
        this.counter -= 1;
      }
    }
  }
}

</script>

<style scoped>

#regola_porzioni {
  height: 45px;
  border: 1px solid black;
  border-radius: 19px;
  background-color: #fff9aa;
  box-shadow: 2px 2px 7px;
}

/* Counter */

.qty .count {
  color: #000;
  display: inline-block;
  vertical-align: top;
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  padding: 0 2px;
  min-width: 30px;
  text-align: center;
  background-color: transparent;
}

.qty .plus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 20px;
  height: 20px;
  font: 20px/1 Arial,sans-serif;
  text-align: center;
  border-radius: 50%;
  margin-top: 3px;
}

.qty .minus {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 20px;
  height: 20px;
  font: 18px/1 Arial,sans-serif;
  text-align: center;
  border-radius: 50%;
  background-clip: padding-box;
  margin-top: 3px;
}

.minus:hover {
  background-color: #717fe0 !important;
}

.plus:hover {
  background-color: #717fe0 !important;
}

#lista_ingredienti > li {
  font-size: 23px;
  text-align: left;
}

.btn-hoverable {
  background-color: rgb(72,58,230) !important;
  color: #fff !important;
  font-size: 29px !important;
  vertical-align: bottom !important;
  border-radius: 53px !important;
  box-shadow: 3px 3px 3px var(--dark) !important;
  border-color: rgba(255,255,255,0) !important;
  padding-bottom: 2px !important;
}

.btn-hoverable:hover {
  background-color: #8667ff !important;
}

.btn-hoverable:active {
  background-color: #000cb2 !important;
}

.minus, .plus {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.count {
  border: 0;
  width: 2%;
}

.count::-webkit-outer-spin-button, .count::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>