class headerBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._style = document.createElement("style");
  }

  _updateStyle() {
    this._style.textContent = `
            :host {
                display: block;
            }

            nav {
                display: flex;
                width: 100%;
                background-color: #6e8adb;
                justify-content: center;
                padding: 20px;
                position: fixed;
                z-index: 1;
            }
            
            nav .logo {
                display: flex; /* Tambahkan display: flex */
                align-items: center; /* Pusatkan secara vertikal */
            }
            
            nav .logo h1 {
                color: white;
                margin: 0; /* Hapus margin default */
            }
        `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = "";
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
            <nav>
                <div class="logo">
                    <h1>Notes Apps</h1>
                </div>
            </nav>
        `;
  }
}

customElements.define("header-bar", headerBar);
