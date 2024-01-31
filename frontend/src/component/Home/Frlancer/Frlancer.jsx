import React from "react";
import "./frlancer.css";
import img from "../../../../public/Instagram-promotion.png";
const Frlancer = () => {
  return (
    <div>
      <section className="freelancers">
        <div className="container">
          <div className="freelancers-wrapper">
            <h2 className="freelancers__heading">Топ фрилансеров</h2>
            <ul className="freelancers__list">
              <li className="freelancers__item">
                <div className="freelancers__item-box">
                  <img
                    className="freelancers__list-img"
                    src={img}
                    width="100"
                    height="100"
                    alt="instagram"
                  />
                  <div className="freelancers__item__text-box">
                    <h3 className="freelancers__item-heading">
                      Марина Королёва
                    </h3>
                    <strong className="freelancers__item-text">
                      Разработчик PHP
                    </strong>
                    <p className="freelancers__item-paragrph">
                      Выполено проектов: 65
                    </p>
                  </div>
                </div>
                <a className="freelancers__item-link" href="#">
                  Написать
                </a>
              </li>
              <li className="freelancers__item">
                <div className="freelancers__item-box">
                  <img
                    className="freelancers__list-img"
                    src={img}
                    width="100"
                    height="100"
                    alt="instagram"
                  />
                  <div className="freelancers__item__text-box">
                    <h3 className="freelancers__item-heading">
                      Марина Королёва
                    </h3>
                    <strong className="freelancers__item-text">
                      Разработчик PHP
                    </strong>
                    <p className="freelancers__item-paragrph">
                      Выполено проектов: 65
                    </p>
                  </div>
                </div>
                <a className="freelancers__item-link" href="#">
                  Написать
                </a>
              </li>
              <li className="freelancers__item">
                <div className="freelancers__item-box">
                  <img
                    className="freelancers__list-img"
                    src={img}
                    width="100"
                    height="100"
                    alt="instagram"
                  />
                  <div className="freelancers__item__text-box">
                    <h3 className="freelancers__item-heading">
                      Марина Королёва
                    </h3>
                    <strong className="freelancers__item-text">
                      Разработчик PHP
                    </strong>
                    <p className="freelancers__item-paragrph">
                      Выполено проектов: 65
                    </p>
                  </div>
                </div>
                <a className="freelancers__item-link" href="#">
                  Написать
                </a>
              </li>
              <li className="freelancers__item">
                <div className="freelancers__item-box">
                  <img
                    className="freelancers__list-img"
                    src={img}
                    width="100"
                    height="100"
                    alt="instagram"
                  />
                  <div className="freelancers__item__text-box">
                    <h3 className="freelancers__item-heading">
                      Марина Королёва
                    </h3>
                    <strong className="freelancers__item-text">
                      Разработчик PHP
                    </strong>
                    <p className="freelancers__item-paragrph">
                      Выполено проектов: 65
                    </p>
                  </div>
                </div>
                <a className="freelancers__item-link" href="#">
                  Написать
                </a>
              </li>
              <li className="freelancers__item">
                <div className="freelancers__item-box">
                  <img
                    className="freelancers__list-img"
                    src={img}
                    width="100"
                    height="100"
                    alt="instagram"
                  />
                  <div className="freelancers__item__text-box">
                    <h3 className="freelancers__item-heading">
                      Марина Королёва
                    </h3>
                    <strong className="freelancers__item-text">
                      Разработчик PHP
                    </strong>
                    <p className="freelancers__item-paragrph">
                      Выполено проектов: 65
                    </p>
                  </div>
                </div>
                <a className="freelancers__item-link" href="#">
                  Написать
                </a>
              </li>
              <li className="freelancers__item">
                Посмотреть всех ТОП фрилансеров
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Frlancer;
