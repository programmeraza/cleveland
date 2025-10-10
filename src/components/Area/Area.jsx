import React from 'react'
import './Area.scss'


const Area = () => {
  return (
    <>
      <div className="area">
        <div className="container">
            <div className="area__wrapper">
                <div className="area__card">
                    <h2 className='area__title1'>91 500 м²</h2>
                
                    <div className="area__line"></div>
                    <p>Общая площадь госпиталя, строительство завершится к концу 2027 года в две очереди.</p>
                </div>
                <div className="area__card">
                    <h2 className='area__title2'>120 коек</h2>
                    <div className="area__line"></div>
                    <p>Современные условия для пациентов, включая 90 острых и 30 специализированных.</p>
                </div>
                <div className="area__card">
                    <h2 className='area__title3'>269 000</h2>
                    <div className="area__line"></div>
                    <p>Пациентов в год - максимальная пропускная способность госпиталя</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Area
