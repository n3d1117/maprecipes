<template>
  <div class="mr-lg-2 mr-4 mt-xl-0 mt-2">

    <h1 class="mb-0 ml-3 ml-lg-0 text-left block_title">{{ title }}
      <a class="lens-minus" href="javascript:" v-on:click="decreaseFontSize">
        <b-icon icon="zoom-out"></b-icon>
      </a>
      <a class="lens-plus" href="javascript:" v-on:click="increaseFontSize">
        <b-icon icon="zoom-in"></b-icon>
      </a>
    </h1>
    <textarea class="w-100 p-2 ml-lg-0 ml-3 textarea_recipe"
              :style="{ fontSize: fontSize + 'px' }"
              v-on:increase-text="increaseFontSize"
              v-on:decrease-text="decreaseFontSize"
              disabled="" readonly="" v-model="text"></textarea>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'PrepHistoryBlock',
  props: ['title', 'text'],
  data: function() {
    return {
      fontSize: 22
    };
  },
  methods: {
    increaseFontSize: function() {
      if (this.fontSize <= 30) {
        this.fontSize += 1;
      }
    },
    decreaseFontSize: function() {
      if (this.fontSize >= 15) {
        this.fontSize -= 1;
      }
    }
  },
  mounted() {

    function fixAltezza() {
      let area;
      for (area of document.getElementsByClassName("textarea_recipe")) {
        if ($(window).width() < 992) {
          area.style.height = '40vh';
        } else {
          area.style.height = '23vh';
        }
      }
    }

    fixAltezza();

    $(window).resize(function() {
      fixAltezza();
    });
  },
}

</script>

<style scoped>

.block_title {
  font-size: 31px;
}

.lens-minus, .lens-plus {
  color: inherit;
}

.textarea_recipe {
  border: 1px solid black;
  resize: none;
  background-color: transparent;
  border-radius: 19px;
  box-shadow: 2px 2px 7px;
  min-height: 170px;
}

</style>