<template>
  <div class="mr-lg-3 mr-4 pr-2 mt-xl-0 mt-2">
    <h1 class="mb-0 ml-3 ml-lg-0 text-left block_title">
      {{ title }}
      <a
        class="lens-minus pl-2 pr-1"
        href="javascript:"
        @click="decreaseFontSize"
      >
        <b-icon
          icon="zoom-out"
          font-scale="0.8"
        />
      </a>
      <a
        class="lens-plus"
        href="javascript:"
        @click="increaseFontSize"
      >
        <b-icon
          icon="zoom-in"
          font-scale="0.8"
        />
      </a>
    </h1>
    <textarea
      v-model="text"
      class="w-100 p-2 ml-lg-0 ml-3 textarea_recipe"
      :style="{ fontSize: fontSize + 'px' }"
      disabled=""
      readonly=""
    />
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
  mounted() {

    function fixAltezza() {
      let area;
      for (area of document.getElementsByClassName("textarea_recipe")) {
        if ($(window).width() < 992) {
          area.style.height = '40vh';
        } else {
          area.style.height = '22vh';
        }
      }
    }

    fixAltezza();

    $(window).resize(function() {
      fixAltezza();
    });
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
}

</script>

<style scoped>

.block_title {
  font-size: 30px;
}

.lens-minus, .lens-plus {
  color: inherit;
}

.textarea_recipe {
  border: var(--main-border);
  resize: none;
  background: transparent;
  border-radius: var(--main-radius);
  box-shadow: var(--soft-shadow);
  min-height: 170px;
  -webkit-text-fill-color: var(--text-color);
  color: var(--text-color);
  opacity: 1;
}

</style>