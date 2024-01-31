import React from "react";
import credit from "../../../../public/icon/credit-card.svg";
import money from "../../../../public/icon/money.svg";
import clock from "../../../../public/icon/clock.svg";
import business from "../../../../public/icon/business-img.png";
import "./business.css";
const Business = () => {
  return (
    <div>
      <section className="business">
        <div className="container">
          <div className="business-wrapper">
            <div className="business__box">
              <h2 className="business__heading">
                Как WorkTap помогает бизнесу?
              </h2>
              <ul className="business__list">
                <li className="business__item">
                  <img className="business__item-img" src={credit} alt="" />
                  <p className="business__item-paragrph">
                    Оплачивайте с р/с или карты компании
                  </p>
                </li>
                <li className="business__item">
                  <img className="business__item-img" src={money} alt="" />
                  <p className="business__item-paragrph">
                    Экономьте до 87% бюджета на фрилансе
                  </p>
                </li>
                <li className="business__item">
                  <img className="business__item-img" src={clock} alt="" />
                  <p className="business__item-paragrph">
                    Экономьте до 75% времени на решении фриланс задач
                  </p>
                </li>
              </ul>
              <strong className="business__text">
                WorkTap — быстро, просто и безопасно!
              </strong>
              <button className="business__btn" type="button">
                Начать!
              </button>
            </div>
            <img className="business__img" src={business} alt="business img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Business;
