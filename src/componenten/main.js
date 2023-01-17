import React, { useEffect } from "react";
import hart from "./hartje.jpg";
import een from "./een.jpg";
import twee from "./twee.jpg";
import { Link } from "react-router-dom";
import Title from "./Title/title";

//wat is beter article 1 of article 2 (semantisch?)
function Main() {
  return (
    <Title title="Welkom!" wide={true}>
      <div className="container__main">
        <article className="article article1">
          <h3 className="article__header">Dit is foto 1..</h3>
          <figure>
            <img
              src={een}
              alt="jjj"
              className="article__img"
              width="300"
              height="200"
            />
            <figcaption className="article__text">
              wat is beter article 1 of article 2{" "}
              <Link to="/vervang">(semantisch?)</Link>
            </figcaption>
          </figure>
          <div className="article__footer">
            <img src={hart} alt="" className="article__footer__img" />
            <span className="article__footer__kopen">
              {" "}
              <span className="article__footer__kopen__plus">+</span> Deze wil
              ik
            </span>
          </div>
        </article>
        <article className="article article2">
          <figure>
            <figcaption className="article__header">Dit is foto 2</figcaption>
            <img
              src={twee}
              alt=""
              className="article__img"
              width="300"
              height="200"
            />
          </figure>
          <p className="article__text">
            wat is beter article 1 of article 2 (semantisch?)
          </p>
          <div className="article__footer">
            <img src={hart} alt="" className="article__footer__img" />
            <span className="article__footer__kopen">
              {" "}
              <span className="article__footer__kopen__plus">+</span> Deze wil
              ik
            </span>
          </div>
        </article>
        <article className="article article3">3</article>
        <article className="article article4">4</article>
        <article className="article article5">5</article>
        <article className="article article6">6</article>
        <article className="article article7">7</article>
        <article className="article article8">8</article>
      </div>
    </Title>
  );
}

export default Main;
