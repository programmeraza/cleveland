import React from 'react'
import './Clinic.scss'

const Clinic = () => {
  return (
    <>
      <div className="clinic">
        <div className="container">
            <div className="clinic__wrapper">
                <h1>О CAU Hospital | Cleveland Clinic Connected</h1>
                <div className="clinic__flex">
                    <div className="clinic__block">
                        <img src="./clinic-small.png" alt="" />
                        <div className="clinic__content">
                            <h2>Central Asian University Hospital — университетская клиника нового поколения.</h2>
                            <p>Многопрофильный клинический и образовательный центр, спроектированный международным архитектурным бюро HKS (США). Реализована философия Healing Environment: приватные палаты, доступ к естественному свету, зелёные зоны и интуитивная логистика потоков пациентов и персонала. Проектная мощность — до 269 000 плановых пациентов в год.</p>
                        </div>
                        <div className="clinic__calc">
                            <div className="clinic__calc-flex">
                                <p>Старт строительства</p>
                                <h3>18 сен 2025</h3>
                            </div>
                            <div className="clinic__calc-flex">
                                <p>Планируемое открытие</p>
                                <h3>2027</h3>
                            </div>
                        </div>
                    </div>
                    <img src="./clinic-big.png" alt="" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Clinic
