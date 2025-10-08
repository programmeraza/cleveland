import React from 'react'
import './Hero.scss'

const Hero = () => {
    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <div className="hero__wrapper">
                        <div className="hero__content">
                            <h1>Присоединяйтесь к проекту мирового уровня в Узбекистане</h1>
                            <p>CAU Hospital — первая клиника в регионе, работающая по стандартам Cleveland Clinic.</p>
                        </div>
                        <div className="hero__inp-flex">
                            <div className="hero__inp">
                                <input type="text" placeholder='Поиск по отделениям' />
                                <img src="./search.svg" alt="" />
                            </div>
                            <button className="hero__btn">
                                Поиск
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16699 10H15.8337" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10 4.16669L15.8333 10L10 15.8334" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
