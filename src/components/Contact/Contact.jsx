import React from 'react'
import './Contact.scss'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact__wrapper">
            <div className="contact__call">
              <h1>Есть вопросы? Свяжитесь с нами!</h1>
              <div className="contact__cards">
                <div className="contact__card">
                  <img src="./call3.png" alt="" />
                  <h3>Напишите нам</h3>
                  <p>Круглосуточно, каждый день</p>
                  <Link to="#">
                    <strong>hr.pm@cauhospital.org</strong>
                  </Link>
                </div>

                <div className="contact__card">
                  <img src="./call2.png" alt="" />
                  <h3>Мы рады видеть вас здесь</h3>
                  <strong>
                    111221, Узбекистан, <br /> г. Ташкент, ул. Миллий бог, 264
                  </strong>
                </div>

                <div className="contact__card">
                  <img src="./call1.png" alt="" />
                  <h3>Мы в социальных сетях</h3>
                  <p>Полезный контент всегда тут</p>
                  <div className="contact__icon-flex">
                    <Link to="#">
                      <img src="./twitter.svg" alt="" />
                    </Link>
                    <Link to="#">
                      <img src="./in.svg" alt="" />
                    </Link>
                    <Link to="#">
                      <img src="./instagram.svg" alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact__message">
              <div className="contact__form">
                <h1>Отправьте нам сообщение</h1>
                <div className="contact__inp-flex">
                  <label htmlFor="yourName">Ваше имя <span>*</span></label>
                  <input id="yourName" type="text" placeholder="Ваше имя" />
                </div>
                <div className="contact__inp-flex">
                  <label htmlFor="yourEmail">Электронный адрес <span>*</span></label>
                  <input id="yourEmail" type="text" placeholder="Ваш электронный адрес" />
                </div>
                <div className="contact__inp-flex">
                  <label htmlFor="yourMessage">Ваше сообщение <span>*</span></label>
                  <textarea id="yourMessage" placeholder="Ваше сообщение"></textarea>
                </div>
                <button className="contact__btn">Отправить</button>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23969.772147547457!2d69.4211686!3d41.3257962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef716040d8001%3A0xaf24862e6ceb4cb5!2sCAEx%20(Central%20Asian%20Expocenter)!5e0!3m2!1sru!2s!4v1760083867842!5m2!1sru!2s"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
