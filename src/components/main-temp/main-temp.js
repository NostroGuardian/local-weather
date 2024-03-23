import { DivComponent } from '../../common/div-component';
import './main-temp.css';

export class MainTemp extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.innerHTML = `
        <div class="main-temp">
            <div class="main-temp__count">
                ${
                  this.state.weatherData.main?.temp
                    ? this.state.weatherData.main?.temp
                    : '-'
                }<sup class="main-temp__celsium">°C</sup>
            </div>
            <div class="main-temp__description">${
              this.state.weatherData.weather?.[0].description
                ? this.state.weatherData.weather?.[0].description
                : '-'
            }</div>
        </div>
    `;
    return this.el;
  }
}
