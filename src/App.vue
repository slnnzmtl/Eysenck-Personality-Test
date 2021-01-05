<template>
  <div id="app">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;700&family=Open+Sans&display=swap" rel="stylesheet">
    <router-view />   
  </div>
</template>

<script>

export default {
  name: 'App',
  created () {
      document.title = "Тест Айзенка - Woman Insight";
  }
}
</script>

<style lang="scss">
  body {
      margin: 0px;
      padding: 0px;
  }

  #app {
      width: 100%;
      padding: 5%;
      @media (max-width: 1000px) {
        padding-top: 5%;
        padding-bottom: 5%;
      }
      padding-top: 0px;
      padding-bottom: 0px;
      max-width: 1300px;
      margin: auto;

      @media (max-width: 1300px) {
        margin: 0px;
      }
      margin-top: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #000;
      box-sizing: border-box;

  }

</style>
