import React, { useState, useRef, useEffect } from 'react'
import './Hero.scss'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [query, setQuery] = useState('')
    const inputRef = useRef(null)
    const dropdownRef = useRef(null)

    const recommendations = [
        'Кардиология',
        'Онкология',
        'Педиатрия',
        'Неврология',
        'Офтальмология',
        'Стоматология',
        'Хирургия',
        'Диагностика',
        'Гастроэнтерология',
        'Эндокринология',
        'Физиотерапия',
        'Реабилитация',
    ]

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                !inputRef.current.contains(e.target)
            ) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const filtered = recommendations.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase().trim())
    )

    return (
        <div className="hero">
            <div className="container hero__container">
                <div className="hero__wrapper">
                    <div className="hero__content">
                        <h1>Присоединяйтесь к проекту мирового уровня в Узбекистане</h1>
                        <p>CAU Hospital — первая клиника в регионе, работающая по стандартам Cleveland Clinic.</p>
                    </div>

                    <div className="hero__inp-flex">
                        <div className="hero__inp" ref={dropdownRef}>
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Поиск по отделениям"
                                value={query}
                                onFocus={() => setIsOpen(true)}
                                onChange={(e) => {
                                    setQuery(e.target.value)
                                    setIsOpen(true)
                                }}
                            />
                            <img src="./search.svg" alt="search" />

                            {isOpen && query && (
                                <div
                                    className="hero__dropdown"
                                    style={
                                        filtered.length === 0
                                            ? {
                                                  backgroundImage: "url('./not-found.png')", 
                                                  backgroundRepeat: "no-repeat",
                                                  backgroundPosition: "center",
                                                  backgroundSize: "40% auto",
                                                  height: "300px",
                                              }
                                            : {}
                                    }
                                >
                                    {filtered.length > 0 &&
                                        filtered.map((item, index) => (
                                            <div
                                                key={index}
                                                className="hero__dropdown-item"
                                                onClick={() => {
                                                    setQuery(item)
                                                    setIsOpen(false)
                                                }}
                                            >
                                                {item}
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>

                        <button className="hero__btn">
                            Поиск
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M4.16699 10H15.8337"
                                    stroke="white"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M10 4.16669L15.8333 10L10 15.8334"
                                    stroke="white"
                                    strokeWidth="1.66667"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
