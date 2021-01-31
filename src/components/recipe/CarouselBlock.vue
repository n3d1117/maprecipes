<template>
  <div class="mt-3 mr-lg-4 carousel-container">
    <b-carousel
      id="carousel-1"
      :interval="4000"
      controls
      indicators
    >
      <b-carousel-slide
        v-for="photo in photos"
        :key="photo"
      >
        <template #img>
          <img
            class="d-block img-fluid w-100"
            :src="require(`@/assets/${photo}`)"
            :alt="title"
          >
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: 'CarouselBlock',
  props: ['photos', 'title']
}
</script>

<style scoped>

.carousel-container {
  border: var(--main-border);
  box-shadow: var(--soft-shadow);
}

</style>