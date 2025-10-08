import React from 'react'
import './Experience.scss'

const Experience = () => {
    return (
        <>
            <div className="expert">
                <div className="container">
                    <div className="expert__wrapper">
                        <div className="expert__top">
                            <h1>Центр передового опыта</h1>
                            <p>CAU Hospital создаётся как Центр передового опыта, объединяющий три ключевых направления:</p>
                        </div>
                        <div className="expert__bottom">
                            <div className="expert__cards">
                                <div className="expert__card">
                                    <img src="./heart.png" alt="" />
                                    <h4>Международное лечение</h4>
                                    <p>Госпиталь будет работать по стандартам Cleveland Clinic: доказательные протоколы, мультидисциплинарный подход, цифровая медицина и культура безопасности пациента.</p>
                                </div>
                                <div className="expert__card">
                                    <img src="./light.png" alt="" />
                                    <h4>Обучение в клинической среде</h4>
                                    <p>CAU Hospital станет базой для студентов, ординаторов и врачей. Здесь они получат практико-ориентированное обучение, наставничество и доступ к современным симуляционным центрам.</p>
                                </div>
                                <div className="expert__card">
                                    <img src="./people.png" alt="" />
                                    <h4>Научные исследования и инновации</h4>
                                    <p>В госпитале будет создана среда для научных исследований и внедрения передовых технологий. Совместные проекты с международными партнёрами повысят роль Узбекистана в глобальной науке.</p>
                                </div>
                            </div>
                            <p>Это экосистема мирового уровня, которая формирует новые стандарты качества здравоохранения для Узбекистана и всей Центральной Азии.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Experience
