<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/Cassette-Logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col>
        <h1 class="display-2 font-weight-bold mb-6">
          Spotify Music Explorer Yo
        </h1>

        <!-- class="display-2 font-weight-bold mb-6" -->

      <v-btn id="home-button"
        class="black--text"
        color="primary"
        rounded
      @click="getGenres1">Explore Genres
      </v-btn>
      </v-col>
    </v-row>

    <v-row class="text-center">
      <v-col class="justify-center">

      <v-list>
                <p> The genres are: </p>
        <v-list-item-group v-model="model">
          <v-list-item
          v-for="(items, i) in items.genres"
          :key="i"
          >
          <v-list-item-content>
            <v-list-item-title v-text="items"></v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SpotifyHome',

    data: () => ({
      items: {
      },
      model: 1,
      token: localStorage.getItem('token')
    }), 
       methods: {
        getGenres1() 
        {
            const bearerToken = {
            Bearer: token, 
            };
      
      var genreJSON = [];
      var token = this.token;
    
    var getGenres = {
      method: 'GET',
      headers: { 
        //  Accept: 'text/plain',
         Authorization: 'Bearer '+ token
      },
    };
    fetch('https://api.spotify.com/v1/recommendations/available-genre-seeds', getGenres)
        .then(function(response) {
        if(response.ok) {
          return response.json();
        }
        else return Promise.reject(response);
        })
        .then(function(res) {
          genreJSON = JSON.parse(JSON.stringify(res));
          console.log(genreJSON);
          return genreJSON;
        })
        .then(items => {
            this.items = items;
            console.log(items);
        })
        .catch(function (error) {
          console.warn('Something went wrong', error);
          console.log(bearerToken);
        });
  }
}
  }
</script>

<style>
.home-button {
  margin-top: 25px;
}
.title {
  font-family: "AttackGraffiti";
  font-size: 24px;
}
</style>
