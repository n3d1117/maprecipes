<template>
  <button id="chevron">
    <b-icon
      icon="chevron-up"
      font-scale="1.7"
    />
  </button>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'ScrollToTopArrow',
  mounted() {
    const chevronButton = document.getElementById("chevron");

    if (chevronButton != null) {
      chevronButton.onclick = function () {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      }

      window.onscroll = function () {
        if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
          chevronButton.style.display = "block";
        } else {
          chevronButton.style.display = "none";
        }
      };
    }
  }
}

</script>

<style scoped>

#chevron {
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 18px;
  border: none;
  box-shadow: var(--soft-shadow);
  outline: none;
  background-color: var(--button-color);
  color: #fff;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
}

#chevron:hover {
  background-color: var(--button-hover-color);
}

</style>