import React, { useEffect } from "react";
import "./ModalForm.scss";
import { IoCloseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ModalForm = ({ isOpen, onClose, children }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden' 
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    if (!isOpen) return null;

    const stopPropagation = (e) => e.stopPropagation();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-window" onClick={stopPropagation}>
                <button className="modal-close" onClick={onClose}>
                    <IoCloseOutline size={28} />
                </button>

                <h1 className="modal-title">Присоединяйтесь к резерву</h1>

                <div className="modal-description">
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
                    <p>
                        Мы формируем лист ожидания кандидатов на позицию «Врач (по
                        специализации)» для следующих отделений.
                        Заполните форму ниже, чтобы зарегистрироваться в кадровом резерве.
                    </p>
                </div>

                <form className="modal-form">
                    <div className="modal-field">
                        <label>Вакансия *</label>
                        <select>
                            <option>Терапевт</option>
                            <option>Хирург</option>
                            <option>Педиатр</option>
                            <option>Уролог</option>
                            <option>Педиатр</option>
                        </select>
                    </div>

                    <div className="modal-field">
                        <label>Пожалуйста, загрузите ваше резюме *</label>
                        <input type="file" accept=".pdf,.doc,.docx" />
                    </div>

                    <div className="modal-grid">
                        <div className="modal-field">
                            <label>Имя *</label>
                            <input type="text" placeholder="Ваше имя" />
                        </div>
                        <div className="modal-field">
                            <label>Фамилия *</label>
                            <input type="text" placeholder="Ваша фамилия" />
                        </div>
                        <div className="modal-field">
                            <label>Номер телефона *</label>
                            <input type="tel" placeholder="+998 (__) ___-__-__" />
                        </div>
                        <div className="modal-field">
                            <label>Электронная почта *</label>
                            <input type="email" placeholder="example@mail.com" />
                        </div>
                    </div>

                    <div className="modal-field">
                        <label>Страна проживания *</label>
                        <input type="text" placeholder="Узбекистан" />
                    </div>

                    <div className="modal-field">
                        <label>Уровень образования *</label>
                        <select>
                            <option>Бакалавр</option>
                            <option>Магистр</option>
                            <option>Доктор наук</option>
                        </select>
                    </div>

                    <div className="modal-checkbox">
                        <input type="checkbox" id="agree" required />
                        <label htmlFor="agree">
                            Да, я соглашаюсь с <Link to={'/policy'}>политикой конфиденциальности</Link>
                        </label>
                    </div>

                    <button type="submit" className="modal-submit">
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ModalForm;

