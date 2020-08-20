import './style.scss';
import regeneratorRuntime from 'regenerator-runtime';

// eslint-disable-next-line no-undef
const app = new Vue({
  el: '#app',
  data: {
    city: '',
    weather: {},
    loading: false,
  },
  methods: {
    async searchWeather() {
      const before = Date.now();
      this.weather = {};
      this.loading = true;
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&APPID=2869a49bb0c696e254d425566eedffd8&units=metric`
        );
        this.weather = await response.json();
        this.loading = false;
      } catch (err) {
        this.loading = false;
        console.log(err);
      }
      const after = Date.now();
      console.log(`Time spent: ${after - before} ms`);
      this.city = '';
    },
  },
});
