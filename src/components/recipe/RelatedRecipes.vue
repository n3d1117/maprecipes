<template>
  <div>
    <h1
      id="related_recipes_title"
      class="mb-1 ml-3 ml-lg-0 mt-xl-0 mt-2 text-left"
    >
      Ricette correlate
    </h1>
    <ul
      id="related_recipes_list"
      class="ml-lg-0 ml-3 mb-3 pl-4 mr-3 text-left"
    >
      <li
        v-for="(name, id) in relatedRecipes"
        :key="id"
        class="mb-1"
      >
        <router-link :to="'/recipe/' + id">
          {{ name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'RelatedRecipes',
  props: ['relatedRecipes']
}
</script>

<style scoped>

#related_recipes_title {
  font-size: 30px;
}

#related_recipes_list {
  font-size: 27px;
  line-height: 1.3;
}

</style>