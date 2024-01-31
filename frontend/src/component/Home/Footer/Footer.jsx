import React from "react";
import facebook from "../../../../public/icon/facebook.svg";
import tiwitr from "../../../../public/icon/tiwitr.svg";
import instagram from "../../../../public/icon/instagram.svg";
import linkidin from "../../../../public/icon/linkidin.svg";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-wrapper">
            <div className="footer__box">
              <ul className="footer__list">
                <li className="footer__item">
                  <strong className="footer__item-text">Топ категории</strong>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Тексты и переводы</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Разработка</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Дизайн</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Аудио, видео монтаж</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Соцсети и реклама</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Бизнес и жизнь</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">SEO и оптимизация</p>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <strong className="footer__item-text">О Проекте</strong>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">О Нас</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Как Это Работает</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Политика Приватности</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Правила Пользования</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Пресса о нас</p>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <strong className="footer__item-text">Поддержка</strong>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Контакты</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">Политика Безопасности</p>
                </li>
                <li className="footer__item">
                  <p className="footer__item-paragrph">FAQ</p>
                </li>
              </ul>
              <ul className="footer__list">
                <li className="footer__item">
                  <strong className="footer__item-text">Follow</strong>
                </li>
                <li className="footer__item--flex">
                  <a className="footer__item-link" href="#">
                    <img
                      className="footer__item-img"
                      src={facebook}
                      alt="facebook"
                    />
                  </a>
                  <a className="footer__item-link" href="#">
                    <img
                      className="footer__item-img"
                      src={tiwitr}
                      alt="tiwiter"
                    />
                  </a>
                  <a className="footer__item-link" href="#">
                    <img
                      className="footer__item-img"
                      src={instagram}
                      width="28"
                      height="28"
                      alt="instagram"
                    />
                  </a>
                  <a className="footer__item-link" href="#">
                    <img
                      className="footer__item-img"
                      src={linkidin}
                      alt="linkiden"
                    />
                  </a>
                </li>
              </ul>
            </div>
            <span className="footer__text">
              Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
