<template>

  <v-footer padless id="jasonFooter">
    <v-card class="flex primary" flat tile>
      <v-card-text class="black--text text-center"><strong>
        {{ new Date().getFullYear() }} — <a href="https://www.jdscharf.com" target="_blank" class="black--text">Jason D Scharf Designs</a></strong>
      </v-card-text>
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
.flex {
  background: "primary";
}
/* #main-wrapper {
    padding: 0 0 100px;
    position: relative;
} */
#jasonFooter {
    bottom: 0;
    left: 0;
    background: "primary";
    position: absolute;
    width: 100%;
    /* padding-bottom: 0px; */
    /* margin-top: 50px; */
    /* margin-top: 15px; */
}
</style>