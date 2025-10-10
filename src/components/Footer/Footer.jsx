import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <div className="footer__top">
                    <div className="footer__content">
                        <img src="./logo.svg" alt="" />
                        <div className="footer__text">
                            <p>Phone: +998-71-200-05-22</p>
                            <p>Email: <Link>hr.pm@cauhospital.com</Link></p>
                        </div>
                        <div className="footer__icon-flex">
                            <Link>
                                <img src="./tg.svg" alt="" />
                            </Link>
                            <Link>
                                <img src="./facebook.svg" alt="" />
                            </Link>
                            <Link>
                                <img src="./linkedin.svg" alt="" />
                            </Link>
                        </div>
                    </div>
                    <div className="footer__adres">
                        <p>111221, Узбекистан, </p>
                        <p>г. Ташкент, ул. Миллий бог, 264</p>
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>Copyright  2025 Social Akfa Medline. All rights reserved.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Footer
