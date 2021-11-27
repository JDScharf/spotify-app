<template>

  <v-footer padless id="jasonFooter">
    <v-card class="flex" flat tile
    color="primary">

      <v-card-text class="py-4 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Jason D Scharf Designs</strong>
      </v-card-text>
<v-card-subtitle
      class="py-2 black--text text-center">Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons" class="py-2 black--text text-center">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon" class="py-2 black--text text-center">www.flaticon.com</a></v-card-subtitle>

    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: ["mdi-email", "mdi-github", "mdi-twitter", "mdi-linkedin"]
  })
};
</script>

<style scoped>
/* #jasonFooter {
    margin-top: 300px;
} */
#main-wrapper {
    padding: 0 0 100px;
    position: relative;
}
#jasonFooter {
    bottom: 0;
    height: 100px;
    left: 0;
    position: absolute;;
    width: 100%;
    /* margin-top: 50px; */
    /* margin-top: 15px; */
}
</style>