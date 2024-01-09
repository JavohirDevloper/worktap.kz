import React from "react";
import logo from "../../../public/Слой 2.png";
import register from "../../../public/register-img.png";
import "./login.css";
import { Link } from "react-router-dom";
const Login = () => {
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
            <label htmlFor="">E-mail</label>
            <input type="email" name="" id="" placeholder="E-mail" />
          </div>
          <div>
            <label htmlFor="">Пароль</label>
            <input type="password" name="" id="" placeholder="Пароль" />
          </div>
        </div>
        <div className="radio">
          <input type="radio" />
          <p>Запомнить меня</p>
          <Link className="esdan_chiqdi" to={"/register"}>
            Забыли пароль?
          </Link>
        </div>
        <div className="btns">
          <Link className="btn1" type="submit">
            Войти
          </Link>
          <Link className="btn2" to={"/"}>
            Или войдите с помощю Google
          </Link>
        </div>
        <p>
          У Вас все еще нет аккауна?{" "}
          <Link className="register_link" to={"/register"}>
            Зарегистрируйтесь бесплатно!
          </Link>
        </p>
      </div>
      <div className="register">
        <img src={register} alt="register-img" />
      </div>
    </div>
  );
};

export default Login;
Login;
