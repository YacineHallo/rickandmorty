import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function Navigatie() {
  return (
    <header className="header">
      <Link to="/">
        <div className="header__logo">
          <img
            src="https://www.amsterdam.nl/views/core/images/logos/andreas.svg"
            className="logo__img"
            alt="Logo van de gemeente amsterdam"
          />

          <span className="logotexts">
            <span className="logotext">Gemeente</span>
            <span className="logotext">Amsterdam</span>
          </span>
        </div>
      </Link>
      <nav className="header__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              hai haiiiiihhhhhhh{" "}
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              twee
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              drie
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              contact
            </a>
          </li>
        </ul>

        <ul className="navigation__zoek">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              zoek
            </a>
          </li>
          <img
            src="img/search-icon-black.svg"
            className="navigation__zoek__img"
            alt="Logo van de gemeente amsterdam"
          />
        </ul>
      </nav>
    </header>
  );
}

export default Navigatie;
