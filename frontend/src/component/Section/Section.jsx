import React from 'react'
import { Link } from 'react-router-dom'
import img from "../../../public/Group.png"
import "./section.css"
const Section = () => {
  return (
    <div>
      <main className="site-main">
      <section className="hero">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero__box">
              <h1 className="hero__heading">
                Покупайте фриланс-услуги в <span>два клика</span>
              </h1>
              <p className="hero__paragrph">
                Ворк — единица работы продавца, которую можно купить как товар в
                магазине
              </p>
              <form className="hero__form">
                <div className="hero__form-box">
                  <input
                    className="hero__form-input"
                    type="text"
                    placeholder="Что нужно сделать?"
                  />
                  <button className="hero__form-button" type="button">Найти</button>
                </div>
              </form>
              <h2 className="hero__title">Выберите рубрику, чтобы начать</h2>
              <ul className="hero__list">
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> Тексты и переводы </Link>
                </li>
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> Разработка</Link>
                </li>
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> Дизайн</Link>
                </li>
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> Аудио, видео монтаж </Link>
                </li>
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> SEO и оптимизация</Link>
                </li>
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> Бизнес и жизнь</Link>
                </li>
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> Соцсети и реклама</Link>
                </li>
                <li className="hero__item">
                  <Link className="hero__item-link" href="#"> Все категории</Link>
                </li>
              </ul>
            </div>
            <img className="hero__img" src={img} alt="hero img" />
          </div>
        </div>
      </section>
      </main>
    </div>
  )
}

export default Section
