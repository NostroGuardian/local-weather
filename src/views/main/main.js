import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { AdditionalWeather } from '../../components/additional-weather/additional-weather';
import { Header } from '../../components/header/header';
import { MainTemp } from '../../components/main-temp/main-temp';
import { Quote } from '../../components/quote/quote';

export class MainView extends AbstractView {
  state = {
    loading: false,
    userLocation: {},
    weatherData: {},
    qouteData: {},
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.state = onChange(this.state, this.stateHook.bind(this));
    this.setTitle('Local Weather');
    this.loadData();
  }

  stateHook(path) {
    if (path === 'loading') {
      this.render();
    }

    if (path === 'qouteData') {
      this.render();
    }

    if (path === 'weatherData') {
      this.render();
    }
  }

  async loadData() {
    this.state.loading = true;
    await this.getUserLocation();
    this.state.weatherData = await this.getWeather(this.state.userLocation);
    this.state.qouteData = await this.getQuote();
    this.state.loading = false;
  }

  getUserLocation() {
    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((pos) => {
        this.state.userLocation.lat = pos.coords.latitude;
        this.state.userLocation.lon = pos.coords.longitude;
        resolve();
      });
    });
  }

  async getWeather(userLocation) {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${userLocation.lat}&lon=${userLocation.lon}&appid=c0e0da61e61c3bc140ec9d16d070ef83&lang=ru&units=metric`
    );
    return res.json();
  }

  async getQuote() {
    const res = await fetch(
      'https://api.forismatic.com/api/1.0/?method=getQuote&format=json'
    );
    return res.json();
  }

  render() {
    const main = document.createElement('div');
    main.append(new Header(this.state).render());
    main.append(new MainTemp(this.state).render());
    main.append(new AdditionalWeather(this.state).render());
    main.append(new Quote(this.state).render());
    this.app.innerHTML = '';
    this.app.append(main);
  }

  destroy() {}
}
