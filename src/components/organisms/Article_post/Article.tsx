import React from "react";
import styles from "./style.module.css";

const Article: React.FC = () => {
    return (
        <article className={styles.article}>
            <div className={styles.article_container}>
                <div className={styles.author_info}>
                    <img
                        className={styles.author_profile_logo}
                        src="/img/ава_конь_тёмный_фон.svg"
                        alt="Author Avatar"
                    />
                    <span className={styles.nickname}>author nickname</span>
                    <span className={styles.pub_date}>11.09.2001</span>
                </div>
                <img
                    src="/img/image 1.png"
                    alt="Chess Image"
                    className={styles.article_preview}
                />
                <h2 className={styles.article_title}>
                    Какой-то крутой заголовок. Прям очень круто. AAA негры
                </h2>
                <p className={styles.article_text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting
                </p>
                <div className={styles.reactions}>
                    <span className={styles.article_stat}>
                        <img
                            className={styles.icon_view}
                            src="/img/глаза.svg"
                            alt="Icon 1"
                        />{" "}
                        999
                    </span>
                    <span className={styles.article_stat}>
                        <img
                            className={styles.icon_reaction}
                            src="/img/иконка_зелён.svg"
                            alt="Icon 2"
                        />{" "}
                        999
                    </span>
                    <span className={styles.article_stat}>
                        <img
                            className={styles.icon_reaction}
                            src="/img/иконка_красн.svg"
                            alt="Icon 3"
                        />{" "}
                        999
                    </span>
                </div>
            </div>
        </article>
    );
};

export default Article;