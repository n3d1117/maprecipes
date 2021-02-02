<template>
  <div>
    <h1 class="pt-3">
      <b-icon
        id="receipt_icon"
        icon="receipt"
        class="p-0 m-0"
      />&nbsp; Ingredienti
    </h1>

    <div
      id="regola_porzioni"
      class="ml-2 mr-2"
    >
      <div class="row mt-2">
        <h4 class="text-right col-6 mb-0">
          Porzioni:
        </h4>
        <div class="qty col-6 text-left">
          <span
            class="minus bg-dark"
            @click="decreaseCounter"
          >-</span>
          <input
            v-model.number="counter"
            type="number"
            class="count"
            name="qty"
            disabled
          >
          <span
            class="plus bg-dark"
            @click="increaseCounter"
          >+</span>
        </div>
      </div>
    </div>

    <ul
      id="lista_ingredienti"
      class="mt-3 mr-2"
    >
      <li
        v-for="ingredient in orderedIngredients"
        :key="ingredient.ingredient"
      >
        <span v-if="ingredient.quantity === 0">{{ ingredient.ingredient }}</span>
        <span v-else>{{ ingredient.ingredient }} {{ ingredient.quantity }} gr</span>
      </li>
    </ul>

    <a
      :href="videoLink"
      target="_blank"
    >
      <div class="pb-3">
        <button
          class="btn btn-primary btn-hoverable"
          type="button"
        >
          <b-icon icon="youtube" />&nbsp; VIDEORICETTA
        </button>
      </div>
    </a>
  </div>
</template>

<script>

export default {
  name: 'IngredientsBlock',
  props: ['ingredients', 'videoLink'],
  data: function() {
    return {
      counter: 4,
    };
  },
  computed: {
    orderedIngredients: function() {

      const ingredientsCopy = this.ingredients.map(x => ({...x}))

      // adjust quantity based on portions
      ingredientsCopy.forEach(ingredient => {
        if (ingredient.quantity !== 0)
          ingredient.quantity = Math.round(ingredient.quantity * (this.counter / 4));
      });

      // sort
      return ingredientsCopy.sort((a, b) => {
        // if same quantity, order alphabetically
        if (a.quantity === b.quantity)
          return (a.ingredient < b.ingredient) ? 1 : -1;
        // otherwise order by quantity
        return (a.quantity < b.quantity) ? 1 : -1;
      });
    },
  },
  methods: {
    increaseCounter: function() {
      if (this.counter < 15) {
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

#receipt_icon {
  margin-bottom: 5px !important;
}

#regola_porzioni {
  height: 45px;
  border: var(--main-border);
  border-radius: var(--main-radius);
  background-color: var(--main-bg);
  box-shadow: var(--soft-shadow);
}

.qty .count {
  -webkit-text-fill-color: var(--text-color);
  color: var(--text-color);
  opacity: 1;
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

.qty > span {
  cursor: pointer;
  display: inline-block;
  vertical-align: top;
  color: white;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;
  margin-top: 3px;
}

.qty > span:hover {
  background-color: var(--button-hover-color) !important;
}

.qty .plus {
  font: 20px/1 Arial, sans-serif;
}

.qty .minus {
  font: 18px/1 Arial, sans-serif;
}

#lista_ingredienti > li {
  font-size: 23px;
  text-align: left;
}

.btn-hoverable {
  background-color: var(--button-color);
  color: #fff;
  font-size: 29px;
  vertical-align: bottom;
  border-radius: 53px;
  box-shadow: var(--soft-shadow);
  border-color: rgba(255,255,255,0);
  padding-bottom: 2px;
}

.btn-hoverable:hover {
  background-color: var(--button-hover-color);
}

.minus, .plus {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  touch-action: manipulation;
}

.count {
  border: 0;
  width: 2%;
  -moz-appearance:textfield;
}

.count::-webkit-outer-spin-button,
.count::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

</style>