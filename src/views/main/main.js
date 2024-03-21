import { AbstractView } from '../../common/view';
import { AdditionalWeather } from '../../components/additional-weather/additional-weather';
import { Header } from '../../components/header/header';
import { MainTemp } from '../../components/main-temp/main-temp';

export class MainView extends AbstractView {
  state = {
    loading: false,
  };

  constructor(appState) {
    super();
    this.appState = appState;
    this.setTitle('Local Weather');
  }

  render() {
    const main = document.createElement('div');
    main.innerHTML = '';
    main.append(new Header().render());
    main.append(new MainTemp().render());
    main.append(new AdditionalWeather().render(this.state));
    this.app.append(main);
  }

  destroy() {}
}
