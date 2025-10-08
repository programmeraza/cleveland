import React from 'react'
import './Partner.scss'
import { Link } from 'react-router-dom'

const Partner = () => {
  return (
    <>
      <div className="partner">
        <div className="container">
            <div className="partner__wrapper">
                <div className="partner__content">
                    <div className="partner__item">
                        <h1>Партнёрство с Cleveland Clinic</h1>
                        <p>CAU Hospital создаётся в стратегическом партнёрстве с Cleveland Clinic — одним из ведущих медицинских центров мира с более чем 100-летней историей.</p>
                        <p>Наш госпиталь входит в программу Cleveland Clinic Connected, что гарантирует внедрение международных протоколов лечения, обучение врачей по мировым стандартам и доступ к глобальной сети знаний и инноваций.</p>
                    </div>
                    <div className="partner__block">
                        <p>Для специалистов это уникальная возможность работать в клинике, которая сразу строится по эталону мировой медицины.</p>
                    </div>
                    <Link>
                        <button className="partner__btn">
                            Подробнее на сайте Cleveland Clinic
                        </button>
                    </Link>
                </div>
                <img src="./water.png" alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Partner
