import React from "react";
import img from "../../../public/Слой 2.png";
import "./home.css";

const Home = () => {
  return (
    <div className="d-flex">
      <img className=" img" src={img} alt="img" />
      <nav className="gap d-flex">
        <ul className="d-flex">
          <li className="nav-item">
            <a href="#bиржа" className="nav-item">
              Биржа
            </a>
          </li>
          <li className="nav-item">
            {" "}
            <a href="#">Ворки</a>
          </li>
          <li className="nav-item">
            <a href="#">Конкурсы</a>
          </li>
          <li className="nav-item">
            <a href="#">Создать ворк</a>
          </li>
          <li className="nav-item">
            <a href="#">Создать заказ</a>
          </li>
        </ul>
        <div className="buttons">
          <button className="btn1">Регистрация</button>
          <button className="btn2">Войти</button>
        </div>
      </nav>
    </div>
  );
};

export default Home;
