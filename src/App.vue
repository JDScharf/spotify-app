<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-row>
          <v-icon large color="secondary">mdi-cassette</v-icon> 
          <h1
            class="black--text">Spotify Music Explorer</h1>
    </v-row>
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
@font-face {
  font-family: "AttackGraffiti";
  src: local("AttackGraffiti"), 
    url(./fonts/AttackGraffiti.ttf) format("truetype");
}
</style> 
