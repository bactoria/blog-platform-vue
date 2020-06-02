<template>
  <div id="app">
    <HeaderTemplate></HeaderTemplate>
    <router-view class="router"/>
  </div>
</template>

<style>

  #app {
    text-align: center;
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
    left: 20  vw;
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