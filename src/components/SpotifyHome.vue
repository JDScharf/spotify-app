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

      <v-btn id="home-button"
        class="black--text"
        color="primary"
        rounded
      @click="getGenres1">Click to Begin
      </v-btn>
      </v-col>
    </v-row>

    <v-row class="allign-top">
      <v-col 
              v-if="showGenresCol"
              class="d-flex justify-start"
              cols="12"
              lg="4"
              md="4"
              sm="4" id="genresCol">
        <v-card
        padding=50px
        width="100%">
        <h3> Search Different Music Genres to find recommendations.</h3>
        <p></p>

          <!-- <v-autocomplete>  
            <template>
        <v-select
        :items="items.genres"
        ></v-select>

        </template>
     </v-autocomplete> -->
    <v-row>
      <v-col>
    <v-autocomplete
      v-model="selectedGenre"
      :items="items.genres"
      clearable
      ></v-autocomplete>
      </v-col>
      <v-col>
            <v-btn id="home-button"
        class="black--text"
        color="primary"
        rounded
      @click="updateSelectedGenre(selectedGenre)"><v-icon>  </v-icon> Recommendations
      </v-btn>
      </v-col>
    </v-row>

      <!-- <v-list>
        <v-list-item-group v-model="selectedGenre">    
          <v-list-item
            v-for="(items, i) in items.genres"
            :key="i"
            :value="items"
            @click="updateSelectedGenre(selectedGenre)"
            >
          <v-list-item-content>
            <v-list-item-title v-text="items"
              :value="items"
              ></v-list-item-title>
          </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list> -->

        </v-card>
      </v-col>

      <v-col 
              v-if="showTenRecs"
              class="d-flex justify-center"
              cols="12"
              sm="4"
              id="firstTenRecsCol">
        <v-card width="100%">
          <h3>Top 10 artist recommendations: {{ this.selectedGenre }} </h3>
          <p>Click the artist to see 10 artists that are similar to them </p>

          <img :src= "(topTenRecs.tracks[0].album.images[1].url)">
          <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[0].artists[0].id, topTenRecs.tracks[0].artists[0].name)">{{ topTenRecs.tracks[0].artists[0].name }}</v-btn>
          <img :src= "(topTenRecs.tracks[1].album.images[1].url)">
          <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[1].artists[0].id, topTenRecs.tracks[1].artists[0].name)">{{ topTenRecs.tracks[1].artists[0].name }}</v-btn>
           <tr> <img :src= "(topTenRecs.tracks[2].album.images[1].url)">
            <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[2].artists[0].id, topTenRecs.tracks[2].artists[0].name)">{{ topTenRecs.tracks[2].artists[0].name }}</v-btn></tr>
          <tr><img :src= "(topTenRecs.tracks[3].album.images[1].url)">
          <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[3].artists[0].id, topTenRecs.tracks[3].artists[0].name)">{{ topTenRecs.tracks[3].artists[0].name }}</v-btn></tr>
          <tr><img :src= "(topTenRecs.tracks[4].album.images[1].url)">
          <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[4].artists[0].id, topTenRecs.tracks[4].artists[0].name)">{{ topTenRecs.tracks[4].artists[0].name }}</v-btn></tr>
          <tr><img :src= "(topTenRecs.tracks[5].album.images[1].url)">
          <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[5].artists[0].id, topTenRecs.tracks[5].artists[0].name)">{{ topTenRecs.tracks[5].artists[0].name }}</v-btn></tr>
          <tr><img :src= "(topTenRecs.tracks[6].album.images[1].url)">
          <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[6].artists[0].id, topTenRecs.tracks[6].artists[0].name)">{{ topTenRecs.tracks[6].artists[0].name }}</v-btn></tr>
          <tr>
            <img :src= "(topTenRecs.tracks[7].album.images[1].url)"><v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[7].artists[0].id, topTenRecs.tracks[7].artists[0].name)">{{ topTenRecs.tracks[7].artists[0].name }}</v-btn></tr>
          <tr><img :src= "(topTenRecs.tracks[8].album.images[1].url)"><v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[8].artists[0].id, topTenRecs.tracks[8].artists[0].name)">{{ topTenRecs.tracks[8].artists[0].name }}</v-btn></tr>
          <tr><img :src= "(topTenRecs.tracks[9].album.images[1].url)">
          <v-btn
           @click="updateSelectedArtist(topTenRecs.tracks[9].artists[0].id, topTenRecs.tracks[9].artists[0].name)">{{ topTenRecs.tracks[9].artists[0].name }}</v-btn></tr>

        </v-card>
      </v-col>

      <v-col v-if="showTenMore" class="d-flex justify-end"
              cols="12"
              sm="4">
        <v-card width="100%">
          <h3>10 more artist recommendations similar to: {{ selectedArtistName }} </h3>
          <p></p>

          <tr><img :src= "(topTenArtistRecs.tracks[0].album.images[1].url)">{{ topTenArtistRecs.tracks[0].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[1].album.images[1].url)">{{ topTenArtistRecs.tracks[1].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[2].album.images[1].url)">{{ topTenArtistRecs.tracks[2].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[3].album.images[1].url)">{{ topTenArtistRecs.tracks[3].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[4].album.images[1].url)">{{ topTenArtistRecs.tracks[4].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[5].album.images[1].url)">{{ topTenArtistRecs.tracks[5].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[6].album.images[1].url)">{{ topTenArtistRecs.tracks[6].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[7].album.images[1].url)">{{ topTenArtistRecs.tracks[7].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[8].album.images[1].url)">{{ topTenArtistRecs.tracks[8].artists[0].name }}</tr>
          <tr><img :src= "(topTenArtistRecs.tracks[9].album.images[1].url)">{{ topTenArtistRecs.tracks[9].artists[0].name }}</tr>

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
      selectedGenre: "",
      selectedArtistID: {},
      selectedArtistName: "",
      showGenresCol: false,
      showTenRecs: false,
      showTenMore: false,
      topTenRecs: {
          tracks: [
            {
              album: {
                images: [],
              },
              artists: [
                {
                name: "",
                },
              ],
            },
        ],
      },
        topTenArtistRecs: {
          tracks: [
            {
              album: {
                images: [],
              },
              artists: [
                {
                name: "",
                },
              ],
            },
        ],
      },
      token: localStorage.getItem('token')
    }),
    // onCreate: {
    //     if(items = !null) {
    //       this.getGenres1();
    //     }
    // },
      methods: {
        updateSelectedGenre(selectedGenre) {
            this.selectedGenre = selectedGenre;
            this.getRecommendations(this.selectedGenre);
        },
        updateSelectedArtist(selectedArtistID, selectedArtistName) {
          this.selectedArtistID = selectedArtistID;
          this.selectedArtistName = selectedArtistName;
          console.log("This selected artistID is: " + typeof(selectedArtistID) + selectedArtistID);
          this.getRecommendationsFromArtist(this.selectedArtistID);
        },
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
            this.showGenresCol=true;
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
      selectedGenre = "&seed_genres=" + this.selectedGenre;

        var requestOptions = {
          method: 'GET',
           headers: { 
          Authorization: 'Bearer '+ token
      },
        };
        fetch("https://api.spotify.com/v1/recommendations?limit=10" + selectedGenre, requestOptions)
          .then(response => response.text())
          .then(topTenRecs => {
            this.topTenRecs = JSON.parse(topTenRecs);
            console.log(typeof(topTenRecs) + topTenRecs);
            this.showTenRecs=true;
          }) 
          .catch(error => console.log('error', error));
          console.log(bearerToken);
          // console.log(this.thisGenre);
          console.log(this.response);
          return this.response;
    },
    getRecommendationsFromArtist(selectedArtistID)
      {
            var bearerToken = {
            Bearer: token, 
            };
      console.log("Selected Arist ID is: " + typeof(selectedArtistID) + this.selectedArtistID);
      const token = this.token;
      selectedArtistID = "&seed_artists=" + this.selectedArtistID;

        var requestOptions = {
          method: 'GET',
           headers: { 
          Authorization: 'Bearer '+ token
      },
        };
        fetch("https://api.spotify.com/v1/recommendations?limit=10" + selectedArtistID, requestOptions)
          .then(response => response.text())
          .then(topTenArtistRecs => {
            this.topTenArtistRecs = JSON.parse(topTenArtistRecs);
            console.log(typeof(topTenArtistRecs) + topTenArtistRecs)
            this.showTenMore=true;
          }) 
          .catch(error => console.log('error', error));
          console.log(bearerToken);
          console.log(this.response2);
          return this.response2;
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
