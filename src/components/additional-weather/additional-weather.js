import { DivComponent } from '../../common/div-component';
import './additional-weather.css';

export class AdditionalWeather extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.innerHTML = `
        <div class="additional-weather">
          <div class="additional-weather__element">
            <div class="additional-weather__icon">
              <img src="../../static/images/humidity.png" alt="Humidity" />
            </div>
            <div class="additional-weather__count">${
              this.state.weatherData.main?.humidity
            }%</div>
          </div>

          <div class="additional-weather__element">
            <div class="additional-weather__icon">
              <img src="../../static/images/wind.png" alt="Wind" />
            </div>
            <div class="additional-weather__count">${
              this.state.weatherData.wind?.speed
            }м/c</div>
          </div>

          <div class="additional-weather__element">
            <div class="additional-weather__icon">
              <img src="../../static/images/visibility.png" alt="Visibility" />
            </div>
            <div class="additional-weather__count">${
              this.state.weatherData.visibility / 100
            }%</div>
          </div>
        </div>
    `;
    return this.el;
  }
}
