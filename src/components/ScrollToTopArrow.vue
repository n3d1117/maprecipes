<template>
  <button id="chevron">
    <b-icon icon="chevron-up" font-scale="1.7"></b-icon>
  </button>
</template>

<script>
import $ from 'jquery'

export default {
  name: "ScrollToTopArrow",
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
  box-shadow: 2px 2px 7px 0 black;
  outline: none;
  background-color: rgb(72,58,230);
  color: white;
  cursor: pointer;
  padding: 15px;
  border-radius: 50%;
}

#chevron:hover {
  background-color: #8667ff;
}

#chevron:active {
  background-color: #000cb2;
}

</style>