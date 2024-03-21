import { DivComponent } from '../../common/div-component';
import './main-temp.css';

export class MainTemp extends DivComponent {
  constructor() {
    super();
  }

  render() {
    this.el.innerHTML = `
        <div class="main-temp">
            <div class="main-temp__count">
                13<sup class="main-temp__celsium">°C</sup>
            </div>
            <div class="main-temp__description">пасмурно</div>
        </div>
    `;
    return this.el;
  }
}
