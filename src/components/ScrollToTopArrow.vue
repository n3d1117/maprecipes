<template>
  <button id="myBtn">
    <b-icon icon="chevron-up" font-scale="1.7"></b-icon>
  </button>
</template>

<script>
import $ from 'jquery'

export default {
name: "ScrollToTopArrow"
}

$(document).ready(function() {

  //Get the button
  var mybutton = document.getElementById("myBtn");
  mybutton.onclick = function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  }

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction()
  };

  function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

});

</script>

<style scoped>
#myBtn {
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

#myBtn:hover {
  background-color: #8667ff;
}

#myBtn:active {
  background-color: #000cb2;
}

</style>