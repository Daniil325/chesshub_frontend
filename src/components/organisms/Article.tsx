import React from "react";

const Article: React.FC = () => {
    return (
        <article className="article">
            <div className="author-info">
                <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" />
                <span className="nickname">author nickname</span>
                <span className="date">11.09.2001</span>
            </div>
            <img
                src="/img/image 1.png"
                alt="Chess Image"
                className="chess-image"
            />
            <h2 className="h2">
                Какой-то крутой заголовок. Прям очень круто. AAA негры
            </h2>
            <p className="p1">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting
            </p>
            <div className="reactions">
                <span className="icon1">
                    <img src="/img/глаза.svg" alt="Icon 1" /> 999
                </span>
                <span className="icon2">
                    <img src="/img/иконка_зелён.svg" alt="Icon 2" /> 999
                </span>
                <span className="icon3">
                    <img src="/img/иконка_красн.svg" alt="Icon 3" /> 999
                </span>
            </div>
        </article>
    );
};
export default Article;
