import React, { useState } from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import SelectUi from "../SelectUi/SelectUi"
import { FiMenu } from "react-icons/fi";
import { IoCloseOutline } from "react-icons/io5";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header__wrapper">
                        <Link to={'/'}>
                            <img src="./logo.svg" alt="logo" />
                        </Link>
                        <div className="header__nav-flex">
                            <ul className="header__ul">
                                <Link>О нас</Link>
                                <Link to={'/chevron'}>Преимущества</Link>
                                <Link>Вакансии</Link>
                                <Link>Контакты</Link>
                            </ul>

                            <button className="header__burger" onClick={toggleMenu}>
                                {menuOpen ? <IoCloseOutline /> : <FiMenu />}
                            </button>

                            <div className={`header__menu ${menuOpen ? 'active' : ''}`}>
                                <div className="header__menu-top">
                                    <Link to={'/'}>
                                        <img src="./logo.svg" alt="logo" />
                                    </Link>
                                    <button className="header__menu-close" onClick={closeMenu}>
                                        <IoCloseOutline />
                                    </button>
                                </div>
                                <ul className="header__menu-list">
                                    <Link onClick={closeMenu}>О нас</Link>
                                    <Link to={'/chevron'} onClick={closeMenu}>Преимущества</Link>
                                    <Link onClick={closeMenu}>Вакансии</Link>
                                    <Link onClick={closeMenu}>Контакты</Link>
                                    <SelectUi />
                                    <Link>
                                        <button className="header__menu-list-btn">
                                            Подать заявку
                                        </button>
                                    </Link>
                                </ul>
                            </div>

                            <div className="header__btn-flex">
                                <Link>
                                    <button className="header__btn">
                                        Подать заявку
                                    </button>
                                </Link>
                                <SelectUi />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
