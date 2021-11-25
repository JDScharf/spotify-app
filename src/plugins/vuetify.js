import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#B5FFE9',
                secondary: '#CEABB1',
                tertiary: 'C9C9C9',
                cardBackground: 'C5E0D8',
            }
        }
    }
});
