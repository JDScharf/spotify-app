<template>
  <v-container id="main-wrapper">

    <v-row class="text-center">
      <v-col cols="12"
          v-if="isNewScreen">
      <v-img
          id="mainLogo"
          :src="require('../assets/Cassette-Logo.png')"
          contain
          max-height="350"
        />
        <!-- <h1 class="display-2 font-weight-bold mb-6"> -->
          <p class="mainText">
          Spotify Music Explorer
          </p>

      <v-btn id="home-button"
        class="black--text"
        color="primary"
        rounded
      @click="getGenres1">
    Click to Begin
      </v-btn>
      </v-col>
    </v-row>

    <v-row
        id="resetButtonRow">
      <v-col class="text-right">
        <v-btn id="home-button"
          v-if="isScreenDirty"
          class="resetButton black--text"
          color="secondary"
          rounded
        @click="resetFields"><v-icon> mdi-sync </v-icon> Reset Searches
        </v-btn>
      </v-col>
    </v-row>

      <!-- <v-row>
        <v-col>
        <template>
          <div 
            v-if="loadingIndicator"
            class="text-center">
            <v-progress-circular
              indeterminate
              color="secondary"
            ></v-progress-circular>
          </div>
        </template>
        </v-col>
      </v-row> -->

    <v-row>
      <v-col 
              v-if="showGenresCol"
              class="d-flex justify-center"
              cols="12"
              lg="4"
              md="4"
              sm="4" id="genresCol">
        <v-card
        id="firstColumn"
        color="bigCardBackground"
        class="text-center"
        padding=50px>
        <v-card-title
            class="text-center pa-2 primary black--text "
            style="word-break: break-word"> Search Different Music Genres to find recommendations.</v-card-title>
        <p></p>
          <v-row>
            <v-col>
          <v-autocomplete
            filled
            solo-inverted
            clearable
            v-model="selectedGenre"
            :items="items.genres"
            :menu-props="{ top: true, offsetY: true }"
            ></v-autocomplete>
            </v-col>
          </v-row>
          <v-row
            id="recButtonRow">
            <v-col>
                  <v-btn id="home-button"
              class="black--text"
              color="primary"
              rounded
            @click="updateSelectedGenre(selectedGenre)"><v-icon> mdi-plus </v-icon> Get Recommendations
            </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col 
          v-if="showTenRecs"
          class="d-flex justify-center"
          cols="12"
          sm="4"
          id="firstTenRecsCol">
        <v-card 
          color="bigCardBackground"
          class="text-center">
          <v-card-title class="text-center pa-2 rounded tertiary black--text ">Top 10 artist recommendations:<br>
          <div class="pa-1 text-decoration-underline text-capitalize">{{ this.selectedGenre }}</div></v-card-title>
          <v-card-text>Click the artist to see 10 artists that are similar to them </v-card-text>

          <v-card
              color="tertiary"
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[0].artists[0].id, topTenRecs.tracks[0].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[0].artists[0].name }}</v-card-title>
            <img :src= "(topTenRecs.tracks[0].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[0].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenRecs.tracks[0].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[1].artists[0].id, topTenRecs.tracks[1].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[1].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[1].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[1].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
            <iframe :src="streamUrl + topTenRecs.tracks[1].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>
          
          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[2].artists[0].id, topTenRecs.tracks[2].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[2].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[2].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[2].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                  <iframe :src="streamUrl + topTenRecs.tracks[2].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[3].artists[0].id, topTenRecs.tracks[3].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[3].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[3].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[3].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                <iframe :src="streamUrl + topTenRecs.tracks[3].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[4].artists[0].id, topTenRecs.tracks[4].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[4].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[4].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[4].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                <iframe :src="streamUrl + topTenRecs.tracks[4].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[5].artists[0].id, topTenRecs.tracks[5].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[5].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[5].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[5].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                    <iframe :src="streamUrl + topTenRecs.tracks[5].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[6].artists[0].id, topTenRecs.tracks[6].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[6].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[6].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[6].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                  <iframe :src="streamUrl + topTenRecs.tracks[6].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[7].artists[0].id, topTenRecs.tracks[7].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[7].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[7].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[7].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                  <iframe :src="streamUrl + topTenRecs.tracks[7].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[8].artists[0].id, topTenRecs.tracks[8].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[8].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[8].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[8].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                <iframe :src="streamUrl + topTenRecs.tracks[8].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

          <v-card 
              color="tertiary" 
              id="clickable" 
              @click="updateSelectedArtist(topTenRecs.tracks[9].artists[0].id, topTenRecs.tracks[9].artists[0].name)">
          <v-card-title>{{ topTenRecs.tracks[9].artists[0].name }}</v-card-title>
          <img :src= "(topTenRecs.tracks[9].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenRecs.tracks[9].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
                <iframe :src="streamUrl + topTenRecs.tracks[9].uri" width="300" height="80" frameborder="0" allowtransparency="true"></iframe>
          </v-card>

        </v-card>
      </v-col>

      <v-col v-if="showTenMore"
              ref="3rdColumn"
              class="d-flex justify-center"
              cols="12"
              sm="4">
        <v-card 
            color="bigCardBackground"
            class="text-center">
          <v-card-title 
            class="text-center pa-2 rounded cardBackground black--text ">10 artist recommendations:<br>  
          <div class="pa-1 text-decoration-underline">{{ selectedArtistName }}</div> </v-card-title>
          <v-card-text>Click to visit their spotify page</v-card-text>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[0].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[0].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[0].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[0].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[0].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[1].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[1].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[1].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[1].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[1].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[2].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[2].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[2].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[2].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[2].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[3].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[3].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[3].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[3].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[3].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[4].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[4].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[4].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[4].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[4].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[5].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[5].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[5].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[5].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[5].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

            <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[6].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[6].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[6].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[6].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[6].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[7].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[7].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[7].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[7].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[7].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[8].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[8].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[8].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[8].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[8].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>

          <v-card 
              color="cardBackground"
              id="clickable"
              :href="artistSpotifyUrl + topTenArtistRecs.tracks[9].artists[0].id" target="_blank">
          <v-card-title>{{ topTenArtistRecs.tracks[9].artists[0].name }}</v-card-title>
          <img :src= "(topTenArtistRecs.tracks[9].album.images[1].url)">
              <v-card-text>
              <v-btn id="home-button"
                          class="black--text"
                          color="primary"
                          rounded
                          :href="artistSpotifyUrl + topTenArtistRecs.tracks[9].artists[0].id" target="_blank"><v-icon> mdi-spotify</v-icon>  Visit Spotify Page</v-btn></v-card-text> 
              <iframe :src="streamUrl + topTenArtistRecs.tracks[9].uri" width="300" height="80" frameborder="0" allowtransparency="false"></iframe>
          </v-card>
        </v-card>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'SpotifyHome',

    data: () => ({
      // loading: true,
      streamUrl: "https://embed.spotify.com/?uri=",
      artistSpotifyUrl: "https://open.spotify.com/artist/",
      items: "",
      selectedGenre: "",
      selectedArtistID: {},
      selectedArtistName: "",
      isNewScreen: true,
      isScreenDirty: false,
      showGenresCol: false,
      showTenRecs: false,
      showTenMore: false,
      selectedArtistObject: {
          tracks: [
            {
              album: {
                images: [],
              },
              artists: [
                {
                external_urls: {
                  spotify: "",
                },
                id: "",
                name: "",
                },
              ],
              external_urls: {
                spotify: "",
              },
              id: null,
              uri: null,
            },
        ],
      },
      topTenRecs: {
          tracks: [
            {
              album: {
                images: [],
              },
              artists: [
                {
                external_urls: {
                  spotify: "",
                },
                id: "",
                name: "",
                },
              ],
              external_urls: {
                spotify: "",
              },
              id: null,
              uri: null,
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
                external_urls: {
                  spotify: "",
                },
                id: "",
                name: "",
                },
              ],
              external_urls: {
                spotify: "",
              },
              id: null,
              uri: null,
            },
        ],
      },
      token: localStorage.getItem('token')
    }),
      // watch: {
      //   isTokenActive: function (localStorage) {
      //     this.loadingIndicator();
      //   }
      // },
      methods: {
        updateSelectedGenre(selectedGenre) {
            this.selectedGenre = selectedGenre;
            this.getRecommendations(this.selectedGenre);
        },
        // loadingIndicator (localStorage) {
        //   this.token = localStorage.getItem('token');
        //   console.log("Watch function called: " + this.token);
        //   if (this.token.length) {
        //     this.loading=false;
        //   }
        // },
        updateSelectedArtist(selectedArtistID, selectedArtistName) {
          this.selectedArtistID = selectedArtistID;
          this.selectedArtistName = selectedArtistName;
          console.log("This selected artistID is: " + typeof(selectedArtistID) + selectedArtistID);
          this.getRecommendationsFromArtist(this.selectedArtistID);
        },
        resetFields() {
            this.showTenRecs= false;
            this.showTenMore= false;
            this.selectedGenre = null;
        },
        scrollMeTo(refName) {
          var element = this.$refs[refName];
          element.scrollIntoView();
          // var top = element.offsetTop;
          // window.scrollTo(500, top);
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
          return res;
        })
        .then(items => {
            this.items = items;
            console.log(items);
            this.showGenresCol=true;
            this.isNewScreen=false;
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
            this.isScreenDirty= true;
            this.showTenMore=false;
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
            this.scrollMeTo('3rdColumn');
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
/* .home-button {
  margin: 25px;
} */
#recButtonRow {
  margin-bottom:25px;
}
#resetButtonRow {
  margin-top:25px;
}
.mainText {
  margin-top: 0px;
  font-family: "AttackGraffiti";
  font-size: 64px;
}
#mainLogo {
  margin-bottom: 0px;
  padding-bottom: 0;
}
#clickable:hover {
    cursor: pointer;
}
#clickable {
  margin: 25px;
  margin-bottom: 50px;
}
#main-wrapper {
    padding: 0 0 100px;
    position: relative;
}
.v-progress-circular {
  margin: 1rem;
}
</style>
