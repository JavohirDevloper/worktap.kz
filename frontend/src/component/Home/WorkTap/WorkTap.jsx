import React from "react";
import service from "../../../../public/icon/service.svg";
import pay from "../../../../public/icon/pay.svg";
import result from "../../../../public/icon/result.svg";
import "./worktap.css";
const WorkTap = () => {
  return (
    <div>
      <section className="tasks">
        <div className="container">
          <div className="tasks-wrapper">
            <h2 className="tasks__heading">Как решать задачи на WorkTap?</h2>
            <p className="tasks__paragrph">
              Идеально подходит для бизнеса и частных лиц
            </p>
            <ul className="tasks__list">
              <li className="tasks__item">
                <img
                  className="tasks__item-img"
                  src={service}
                  width="82"
                  height="82"
                  alt="Выберите услугу"
                />
                <h3 className="tasks__list-heading">Выберите услугу</h3>
                <p className="tasks__list-paragrph">
                  В супермаркете WorkTap представлен широкий выбор услуг от
                  квалифицированных специалистов.
                </p>
              </li>
              <li className="tasks__item">
                <img
                  className="tasks__item-img"
                  src={pay}
                  width="82"
                  height="82"
                  alt="Оплатите"
                />
                <h3 className="tasks__list-heading">Оплатите</h3>
                <p className="tasks__list-paragrph">
                  Деньги будут перечислены продавцу после того, как он выполнит
                  работу, и вы её одобрите.
                </p>
              </li>
              <li className="tasks__item">
                <img
                  className="tasks__item-img"
                  src={result}
                  width="82"
                  height="82"
                  alt="Получите результат"
                />
                <h3 className="tasks__list-heading">Получите результат</h3>
                <p className="tasks__list-paragrph">
                  Наш супермаркет гарантирует вам возврат средств в полном
                  объёме в случае невыполнения заказа.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkTap;
