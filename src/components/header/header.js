import { DivComponent } from '../../common/div-component';
import './header.css';

export class Header extends DivComponent {
  constructor() {
    super();
  }

  render() {
    this.el.innerHTML = `
        <header>
            <div class="header__logo">
            <img src="../../static/images/logo.png" alt="Logo" />
            </div>
            <div class="header__location">
            <img src="../../static/images/location.png" alt="Location" />Москва
            </div>
        </header>
    `;
    return this.el;
  }
}
