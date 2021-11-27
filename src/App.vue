<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-row>
        <!-- <v-img
          :src="require('./assets/cassette-icon.png')"
          contain
          height="48"
        /> -->
<!-- <svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="tertiary" d="M4,5A2,2 0 0,0 2,7V17A2,2 0 0,0 4,19H6L7,17H17L18,19H20A2,2 0 0,0 22,17V7A2,2 0 0,0 20,5H4M6.5,10A1.5,1.5 0 0,1 8,11.5A1.5,1.5 0 0,1 6.5,13A1.5,1.5 0 0,1 5,11.5A1.5,1.5 0 0,1 6.5,10M9,10H15V13H9V10M17.5,10A1.5,1.5 0 0,1 19,11.5A1.5,1.5 0 0,1 17.5,13A1.5,1.5 0 0,1 16,11.5A1.5,1.5 0 0,1 17.5,10Z" />
</svg> -->
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
/* @font-face {
  font-family: "AttackGraffiti";
  src: local("AttackGraffiti"), 
    url(./fonts/AttackGraffiti.ttf) format("truetype");
} */
</style> 
