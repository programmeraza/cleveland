import React from "react";
import "./Our.scss";

const Our = () => {
  return (
    <>
      <div className="our">
        <div className="container">
          <div className="our__wrapper">
            <div className="our__top">
              <h1>Причины выбирать нас</h1>
              <p>
                Мы ищем специалистов, готовых работать по международным
                стандартам и развиваться вместе с CAU Hospital.
              </p>
            </div>
            <div className="our__cards">
              <div className="our__card">
                <img src="./davinci.png" alt="" />
                <div className="our__card-content">
                  <h3>
                    Современная <br /> инфраструктура
                  </h3>
                  <p>
                    Доступ к высокотехнологичным международным решениям и
                    цифровой медицине.
                  </p>
                </div>
              </div>
              <div className="our__card">
                <img src="./group.png" alt="" />
                <div className="our__card-content">
                  <h3>
                    Международные <br /> наставники
                  </h3>
                  <p>
                    Поддержка и обучение от экспертов Cleveland Clinic и ведущих
                    профессоров CAU.
                  </p>
                </div>
              </div>
              <div className="our__card">
                <img src="./profi.png" alt="" />
                <div className="our__card-content">
                  <h3>
                    Стажировки за <br /> рубежом
                  </h3>
                  <p>
                    Возможность прохождения стажировок и обмена опытом в
                    партнёрских клиниках.
                  </p>
                </div>
              </div>
              <div className="our__card">
                <img src="./medic.png" alt="" />
                <div className="our__card-content">
                  <h3>
                    Рост и <br /> развитие
                  </h3>
                  <p>
                    Программы обучения, резидентуры и постоянный
                    профессиональный апгрейд.
                  </p>
                </div>
              </div>
            </div>
            <button className="our__btn">
              Подать заявку в лист ожидания
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
                  d="M10 4.1665L15.8333 9.99984L10 15.8332"
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
    </>
  );
};

export default Our;
