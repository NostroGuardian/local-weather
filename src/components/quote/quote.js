import { DivComponent } from '../../common/div-component';
import './quote.css';

export class Quote extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    if (this.state.loading) {
      this.el.innerHTML = `
      <div class="quote">
            <div class="qoute__content">
                "Загрузка..."
            </div>
            <div class="qoute__author">Загрузка...</div>
        </div>
    `;
      return this.el;
    }

    this.el.innerHTML = `
        <div class="quote">
            <div class="qoute__content">
                "${this.state.qouteData.quoteText}"
            </div>
            <div class="qoute__author">${
              this.state.qouteData.quoteAuthor
                ? this.state.qouteData.quoteAuthor
                : '(автор не указан)'
            }</div>
        </div>
    `;
    return this.el;
  }
}
