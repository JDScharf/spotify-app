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
          Spotify Music Explorer
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

    <v-row class="allign-top">
          <!-- <v-row class="text-center"> -->
      <v-col class="d-flex justify-start"
              cols="12"
              sm="4">
        <v-card>
        <h3> The genres are: </h3>
      <v-list>
        <v-list-item-group v-model="selectedGenre">    
          <v-list-item
            v-for="(items, i) in items.genres"
            :key="i"
            :value="items"
            >
          <v-list-item-content>
            <v-list-item-title v-text="items"
              :value="items"
              @click="getRecommendations"
              ></v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
        </v-card>
      </v-col>

      <v-spacer>
      </v-spacer>

      <v-col class="d-flex justify-end"
              cols="12"
              sm="4">
        <v-card>
          <h3>Top artists for {{ selectedGenre }} are: </h3>
          <tr>{{ topTenRecs.tracks[0].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[1].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[2].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[3].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[4].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[5].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[6].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[7].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[8].artists[0].name }}</tr>
          <tr>{{ topTenRecs.tracks[9].artists[0].name }}</tr>

      <!-- <v-list class="d-flex justify-end">
        <v-list-item-group v-model="selectedRecommendation">    
          <v-list-item
            v-for="(topTenRecs, i) in topTenRecs.tracks"
            :key="i"
            :value="topTenRecs"
            >
            sample.tracks[0].album.artists[0].name
          <v-list-item-content>
            <v-list-item-title v-text="topTenRecs"
              :value="topTenRecs"
              >
               @click="getRecommendations"
              </v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SpotifyHome',

    data: () => ({
      items: "",
      // genres: [],
      selectedGenre: "",
      topTenRecs: {
          tracks: [
            {
              artists: [
                {
                name: "",
                },
              ],
            },
            {
              artists: [
                {
                name: "",
                },
              ],
            },
                    {
              artists: [
                {
                name: "",
                },
              ],
            },
                    {
              artists: [
                {
                name: "",
                },
              ],
            },
                    {
              artists: [
                {
                name: "",
                },
              ],
            },
                    {
              artists: [
                {
                name: "",
                },
              ],
            },
                  {
              artists: [
                {
                name: "",
                },
              ],
            },
                    {
              artists: [
                {
                name: "",
                },
              ],
            },
                    {
              artists: [
                {
                name: "",
                },
              ],
            },
                    {
              artists: [
                {
                name: "",
                },
              ],
            }
        ],
      },
      token: localStorage.getItem('token')
    }), 
      methods: {
        getGenres1() 
        {
            var bearerToken = {
            Bearer: token, 
            };
      
      // var genreJSON = [];
      const token = this.token;
    
    var getGenres = {
      method: 'GET',
      headers: { 
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
          // genreJSON = JSON.parse(JSON.stringify(res));
          // console.log(genreJSON);
          return res;
        })
        .then(items => {
            this.items = items;
            console.log(items);
        })
        .catch(function (error) {
          console.warn('Something went wrong', error);
          console.log(bearerToken);
        });
  },
        getRecommendations(selectedGenre)
       {
            var bearerToken = {
            Bearer: token, 
            };
      console.log("Selected Genre is a: " + typeof(selectedGenre) + this.selectedGenre);
      const token = this.token;

        var requestOptions = {
          method: 'GET',
           headers: { 
          Authorization: 'Bearer '+ token
      },
          // body: raw,
          // redirect: 'follow'
        };
        // fetch("https://api.spotify.com/v1/recommendations?seed_genres="(this.item), requestOptions)
        fetch("https://api.spotify.com/v1/recommendations?limit=10&seed_genres=" + this.selectedGenre, requestOptions)
          .then(response => response.text())
          .then(topTenRecs => {
            this.topTenRecs = JSON.parse(topTenRecs);
            
            console.log(typeof(topTenRecs) + topTenRecs)
          })
        // .then(items => {
        //     this.items = items;
        //     console.log(items);
        // })
          .catch(error => console.log('error', error));
          console.log(bearerToken);
          console.log(this.thisGenre);
          console.log(this.response);
          return this.response;
          // this.response = this.topTenRecs;
          // console.log(this.topTenRecs);
          // return this.topTenRecs;
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
