import React from 'react'
import './LogoFlex.scss'

const LogoFlex = () => {
    return (
        <>
            <div className="logoFlex">
                <div className="container">
                    <div className="logoFlex__wrapper">
                        <h1>Партнёры</h1>
                        <div className="logoFlex__image">
                            <img src="./akfa.png" alt="" />
                            <img src="./cau.png" alt="" />
                            <img src="./hks.png" alt="" />
                            <img src="./connect.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LogoFlex
