<template>
  <div id="app">

    <MainLayer>
      <h1 id="searchbar_title">TROVA LE RICETTE DELLA TUA CITTÀ</h1>
      <div class="offset-lg-2 col-lg-8">
        <SearchBar></SearchBar>
      </div>
    </MainLayer>

    <div id="bottom-bg">
      <div class="container">
        <div class="row">

          <HomeSidebar></HomeSidebar>

          <div class="col-md-9">
            <h1 class="mt-4 text-left">Elenco Ricette</h1>

            <HomeResultBlock title="Antipasti"></HomeResultBlock>
            <HomeResultBlock title="Primi"></HomeResultBlock>

          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar"
import HomeSidebar from "@/components/HomeSidebar";
import HomeResultBlock from "@/components/HomeResultBlock";
import MainLayer from "@/components/MainLayer";

export default {
  name: 'Home',
  components: {
    MainLayer,
    HomeResultBlock,
    HomeSidebar,
    SearchBar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz');

#app {
  font-family: 'Yanone Kaffeesatz',serif;
}

#bottom-bg {
  background-color: #fff9aa;
}

#searchbar_title {
  font-size: 60px;
}

</style>
