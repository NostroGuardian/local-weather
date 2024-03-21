import onChange from 'on-change';
import { AbstractView } from '../../common/view';
import { AdditionalWeather } from '../../components/additional-weather/additional-weather';
import { Header } from '../../components/header/header';
import { MainTemp } from '../../components/main-temp/main-temp';
import { Quote } from '../../components/quote/quote';

export class MainView extends AbstractView {
  state = {
    loading: false,
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
      console.log('loading');
      this.render();
    }

    if (path === 'qouteData') {
      console.log('qouteData');
      this.render();
    }

    if (path === 'weatherData') {
      console.log('weatherData');
      this.render();
    }
  }

  async loadData() {
    this.state.loading = true;
    this.state.weatherData = await this.getWeather();
    this.state.qouteData = await this.getQuote();
    this.state.loading = false;
  }

  async getWeather() {
    const res = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?lat=55.751244&lon=37.618423&appid=c0e0da61e61c3bc140ec9d16d070ef83&lang=ru&units=metric'
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
    main.append(new AdditionalWeather().render());
    main.append(new Quote(this.state).render());
    this.app.innerHTML = '';
    this.app.append(main);
  }

  destroy() {}
}
