<template>
  <div id="app">
    <HeaderTemplate></HeaderTemplate>
    <router-view class="router"/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  @import url(http://fonts.googleapis.com/earlyaccess/nanumgothic.css);

  #app {
    text-align: center;
    font-family: 'Lato', 'Nanum Gothic';
    font-weight: 500;
  }

  a, u {
    text-decoration: none !important;
    color: rgb(0,0,0);
  }

  body {
    margin: 0;
    padding: 0;
  }

  .router {
    left: 20vw;
    width: 60vw;
    margin: auto;
  }

</style>
<script>
  import HeaderTemplate from "./components/header/Header";
  export default {
    components: {HeaderTemplate}
  }
</script>