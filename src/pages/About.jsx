import React from 'react';

const About = () => {
    return (
        <div className="about">
        <h1>
            Приложение создано в учебных целях на ReactJS
        </h1>
        <h1>Функционал:</h1>
        <div className="text_about">
        <li>Сортировка/Поиск</li>
        <li>Работа с сервером(jsonplaceholder)</li>
        <li>Модальные окна</li>
        <li>Постраничный вывод</li>
        <li>Бесконечная лента</li>
        <li>Кастомные хуки, переиспользуемый функционал</li>
        </div>
        </div>
    );
};

export default About;
