<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
          <h1
            class="black--text">Spotify Music Explorer</h1>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <SpotifyHome/>
      <LowerFooter/>
    </v-main>
  </v-app>
</template>

<script>
import SpotifyHome from './components/SpotifyHome';
import LowerFooter from './components/LowerFooter';

export default {
  name: 'App',

  components: {
    SpotifyHome,
    LowerFooter
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
/* @font-face {
  font-family: "AttackGraffiti";
  src: local("AttackGraffiti"), 
    url(./fonts/AttackGraffiti.ttf) format("truetype");
} */
</style> 
