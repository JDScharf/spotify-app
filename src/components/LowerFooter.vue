<template>
  <v-footer id="jasonFooter">
      
    <v-card class="flex" flat tile
    color="primary">

      <v-card-text class="py-4 black--text text-center">
        {{ new Date().getFullYear() }} — <strong>Jason D Scharf Designs</strong>
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
#jasonFooter {
    margin-top: 300px;
}
</style>