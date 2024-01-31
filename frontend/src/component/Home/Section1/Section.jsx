import React from "react";
import img from "../../../../public/Ellipse 54.png";
const Section1 = () => {
  return (
    <div>
      <section className="workers">
        <div className="container">
          <div className="workers-wrapper">
            <h2 className="workers__heading">Актуальные ворки</h2>
            <ul className="workers__list">
              <li className="workers__item">
                <div className="workers__item-box">
                  <img
                    className="workers__item-img"
                    src={img}
                    width="44"
                    height="44"
                    alt=""
                  />
                  <h3 className="workers__item-heading">
                    Сделать дизайн интернет-магазина
                  </h3>
                </div>
                <p className="workers__item-paragrph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </p>
                <a className="workers__item-link" href="#">
                  Посмотреть
                </a>
              </li>
              <li className="workers__item">
                <div className="workers__item-box">
                  <img
                    className="workers__item-img"
                    src={img}
                    width="44"
                    height="44"
                    alt=""
                  />
                  <h3 className="workers__item-heading">
                    Верстка landing page
                  </h3>
                </div>
                <p className="workers__item-paragrph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </p>
                <a className="workers__item-link" href="#">
                  Посмотреть
                </a>
              </li>
              <li className="workers__item">
                <div className="workers__item-box">
                  <img
                    className="workers__item-img"
                    src={img}
                    width="44"
                    height="44"
                    alt=""
                  />
                  <h3 className="workers__item-heading">
                    Сделать дизайн сайта-каталога и посадить на какой нибудь
                    ко...
                  </h3>
                </div>
                <p className="workers__item-paragrph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </p>
                <a className="workers__item-link" href="#">
                  Посмотреть
                </a>
              </li>
              <li className="workers__item">
                <div className="workers__item-box">
                  <img
                    className="workers__item-img"
                    src={img}
                    width="44"
                    height="44"
                    alt=""
                  />
                  <h3 className="workers__item-heading">
                    Продвижение instagram
                  </h3>
                </div>
                <p className="workers__item-paragrph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </p>
                <a className="workers__item-link" href="#">
                  Посмотреть
                </a>
              </li>
              <li className="workers__item">
                <div className="workers__item-box">
                  <img
                    className="workers__item-img"
                    src={img}
                    width="44"
                    height="44"
                    alt=""
                  />
                  <h3 className="workers__item-heading">
                    Срочно! Нужен веб дизайнер!
                  </h3>
                </div>
                <p className="workers__item-paragrph">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam sed leo at hendrerit dictum diam, enim. Dolor in
                  imperdiet ultrices mauris. Est vitae vulputate est nec cras.
                  Turpis nunc ornare nulla neque, interdum. At pharetra
                  consectetur nec est convallis...
                </p>
                <a className="workers__item-link" href="#">
                  Посмотреть
                </a>
              </li>
              <li className="workers__item">Смотреть все ворки</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Section1;
