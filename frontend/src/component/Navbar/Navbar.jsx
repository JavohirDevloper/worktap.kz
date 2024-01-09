import React from "react";
import img from "../../../public/Слой 2.png";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header className="site-header">
        <div className="container">
          <div className="site-header__wrapper">
            <Link className="site-header__logo-link" to="./index.html">
              <img
                className="site-header__logo-img"
                src={img}
                width="195"
                height="40"
                alt="Worktap"
              />
            </Link>
            {/* <!-- site header nav start --> */}
            <nav className="site-header__nav">
              <ul className="site-header__list">
                <li className="site-header__item">
                  <Link className="site-header__link" to="birja">
                    Биржа
                  </Link>
                </li>
                <li className="site-header__item">
                  <Link className="site-header__link" to="#vorki">
                    Ворки
                  </Link>
                </li>
                <li className="site-header__item">
                  <Link className="site-header__link" to="#konkursi">
                    Конкурсы
                  </Link>
                </li>
                <li className="site-header__item">
                  <Link className="site-header__link" to="#sozdatvork">
                    Создать ворк
                  </Link>
                </li>
                <li className="site-header__item">
                  <Link className="site-header__link" to="#sozdatzakas">
                    Создать заказ
                  </Link>
                </li>
              </ul>
            </nav>
            {/* <!-- site header nav finish --> */}
            <form className="site-header__form">
              <Link
                to={"/register"}
                className="site-header__form-registr"
                type="button"
              >
                Регистрация
              </Link>
              <Link
                to={"/login"}
                className="site-header__form-login"
                type="button"
              >
                Войти
              </Link>
            </form>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
