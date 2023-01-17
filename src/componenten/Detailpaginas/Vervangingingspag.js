import React, { useEffect } from "react";
import een from "../een.jpg";
import hart from "../hartje.jpg";
import Title from "../Title/title";

function Vervang() {
  const objectenarray = [
    {
      item: 11,
      Kunstenaar: "Rembrandt van Rijn",
      Schilderij: "Nachtwacht",
      Jaar: "1642",
      Kleur: "Goud",
      Formaat: "3,63 m x 4,37 m",
      Materiaal: "Olieverf",
      Genre: "Portret"
    },
    {
      item: 22,
      Kunstenaar: "Johannes Vermeer",
      Schilderij: "Meisje met de parel",
      Jaar: "1665",
      Kleur: "Geel",
      Formaat: "44 cm x 39 cm",
      Materiaal: "Olieverf",
      Genre: "Portret"
    },
    {
      item: 33,
      Kunstenaar: "Leonardo da Vinci",
      Schilderij: "Mona Lisa",
      Jaar: "1503",
      Kleur: "Donkerbruin",
      Formaat: "77 cm x 53 cm",
      Materiaal: "Olieverf",
      Genre: "Portret"
    }
  ];
  const x = 0;
  function getitems(i) {
    return Object.values(objectenarray[i]);
  }
  getitems(0);

  return (
    <Title title={getitems(x)[2]} wide={true}>
      <div className="container__main">
        <article className="article-detail article1">
          <h3 className="article-detail__header">Dit is foto 1..</h3>
          <figure>
            <img src={een} alt="" className="article-detail__img" />
            <figcaption className="article-detail__text">
              wat is beter article 1 of article 2 (semantisch?)
            </figcaption>
          </figure>
          <div className="article-detail__footer">
            <img src={hart} alt="" className="article-detail__footer__img" />
            <span className="article-detail__footer__kopen">
              {" "}
              <span className="article-detail__footer__kopen__plus">
                +
              </span>{" "}
              Deze wil ik
            </span>
          </div>
        </article>
        <article>
          <ul>
            <li>Itemnr: {getitems(x)[0]}</li>
            <li>Naam kunstenaar: {getitems(x)[1]}</li>
            <li>Naam schilderij: {getitems(x)[2]}</li>
            <li>Jaar gemaakt: {getitems(x)[3]}</li>
            <li>Voornaamste kleur: {getitems(x)[4]}</li>
            <li>Formaat: {getitems(x)[5]}</li>
            <li>Materiaal: {getitems(x)[6]}</li>
            <li>Genre: {getitems(x)[7]}</li>
          </ul>
        </article>
      </div>
    </Title>
  );
}

export default Vervang;
