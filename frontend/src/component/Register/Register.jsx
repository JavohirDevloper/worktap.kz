import React from "react";
import logo from "../../../public/Слой 2.png";
import register from "../../../public/register-img.png";
import "./register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex">
      <div className="logo">
        <div className="logo_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="register_tag">
          <p>Добро пожаловать!</p>
          <h3>Войдите в свой аккаунт</h3>
        </div>
        <div className="input_label">
          <div>
            <label htmlFor="name">Ваше имя</label>
            <input type="text" id="name" placeholder="Имя" />
          </div>
          <div>
            <label htmlFor="surname">Ваша фамилия</label>
            <input type="text" id="surname" placeholder="Фамилия" />
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="E-mail" />
          </div>
          <div>
            <label htmlFor="phone">Телефон номер</label>
            <input type="tel" id="phone" placeholder="Телефон" />
          </div>
          <div>
            <label htmlFor="password">Пароль</label>
            <input type="password" id="password" placeholder="Пароль" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Повторите пароль</label>
            <input type="password" id="confirmPassword" placeholder="Пароль" />
          </div>
        </div>
        <div className="radio d-flex">
          <div>
            <input type="radio" id="performer" name="userType" />
            <p>Я исполнитель</p>
          </div>
          <div>
            <input type="radio" id="customer" name="userType" />
            <p>Я заказчик</p>
          </div>
        </div>
        <div className="btns">
          <Link className="btn1" to={"/"}>
            Войти
          </Link>
          <button className="btn2" type="submit">
            Или войдите с помощью Google
          </button>
        </div>
        <p>
          У Вас все еще нет аккаунта?{" "}
          <Link className="register_link" to={"/register"}>
            Зарегистрируйтесь бесплатно!
          </Link>
        </p>
      </div>
      <div className="register">
        <img className="register-img" src={register} alt="register-img" />
      </div>
    </div>
  );
};

export default Register;
