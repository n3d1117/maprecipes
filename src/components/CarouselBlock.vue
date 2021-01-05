<template>
  <div class="mt-2 mr-lg-2 carousel-container">

    <b-carousel
        id="carousel-1"
        :interval="4000"
        controls
        indicators
    >
      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              src="../assets/CrostiniToscani.jpg"
              alt="crostino"
          >
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
              class="d-block img-fluid w-100"
              src="../assets/CrostiniToscani.jpg"
              alt="crostino"
          >
        </template>
      </b-carousel-slide>

    </b-carousel>

  </div>
</template>

<script>
export default {
name: "CarouselBlock"
}
</script>

<style scoped>
.carousel-container {
  border: 1px solid black;
  box-shadow: 2px 2px 7px;
}
</style>