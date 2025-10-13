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
                    <div className="modal-text">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12ZM12 7C12.2652 7 12.5196 7.10536 12.7071 7.29289C12.8946 7.48043 13 7.73478 13 8V13C13 13.2652 12.8946 13.5196 12.7071 13.7071C12.5196 13.8946 12.2652 14 12 14C11.7348 14 11.4804 13.8946 11.2929 13.7071C11.1054 13.5196 11 13.2652 11 13V8C11 7.73478 11.1054 7.48043 11.2929 7.29289C11.4804 7.10536 11.7348 7 12 7ZM11 16C11 15.7348 11.1054 15.4804 11.2929 15.2929C11.4804 15.1054 11.7348 15 12 15H12.008C12.2732 15 12.5276 15.1054 12.7151 15.2929C12.9026 15.4804 13.008 15.7348 13.008 16C13.008 16.2652 12.9026 16.5196 12.7151 16.7071C12.5276 16.8946 12.2732 17 12.008 17H12C11.7348 17 11.4804 16.8946 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16Z" fill="#505050" />
                        </svg>
                        <p>
                            Мы формируем лист ожидания кандидатов на позицию «Врач (по
                            специализации)» для следующих отделений.
                            Заполните форму ниже, чтобы зарегистрироваться в кадровом резерве.
                        </p>
                    </div>
                    <p>Подача заявления в список ожидания CAU Hospital позволит нашей команде по подбору персонала связаться с вами и оказать поддержку в поиске работы, а также определить подходящие для вас возможности. Пожалуйста, заполните форму ниже, чтобы зарегистрироваться в нашем кадровом резерве.</p>
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
                            <input type="tel" placeholder="Ваш номер телефона" />
                        </div>
                        <div className="modal-field">
                            <label>Электронная почта *</label>
                            <input type="email" placeholder="Ваш адрес электронной почты" />
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

                    <div className="modal-field">
                        <label>Область интересов *</label>
                        <select>
                            <option>Футбол</option>
                            <option>Шахмат</option>
                            <option>Рисование</option>
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

