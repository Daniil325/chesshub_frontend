import React from "react";
import styles from "./style.module.css";

const Article: React.FC = () => {
    return (
        <article className={styles.article}>
            
            <div className={styles.author_info}>
                <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" className={styles.avatar} />
                <span className={styles.nickname}>author nickname</span>
                <span className={styles.date}>11.09.2001</span>
            </div>

           
            <h2 className={styles.title}>Какой-то крутой заголовок. Прям очень круто.</h2>

            
            <span className={styles.views}>
                <img src="/img/глаза.svg" alt="Views Icon" className={styles.icon} />
                999
            </span>

            
            <p className={styles.text}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting.
            </p>

            
            <img src="/img/image 1.png" alt="Chess Image" className={styles.Chessimage} />

            
            <p className={styles.subtitle}>Himenaeos vitas primis etian :</p>

            
            <ul className={styles.list}>
                <li>Purus egestas in lacinia pellentesque sed. Euismod suspendisse varius magna placerat massa mi sapien vestibulum.</li>
                <li>Primis ultrices urna leo gravida inceptos. Consequat nibh curae molestie ligula interdum finibus elit.</li>
                <li>Accumsan dui nunc egestas sem, eget felis a. Sollicitudin eu euismod nulla aliquam tristique.</li>
                <li>Tincidunt senectus litora primis, arcu inceptos tincidunt gravida.</li>
            </ul>

            
            <p className={styles.text}>
                Ut orci ridiculus venenatis habitasse; arcu vestibulum quis nulla? Ante tellus curabitur pretium nulla
                sodales fames fermentum. Mattis vestibulum sem finibus elit leo ex porttitor. Euismod fermentum nec
                nostra, nibh vivamus diam blandit varius. Dictumst purus tempus per cras, est velit habitant. Est
                fringilla platea est mus dapibus urna. Nam ut consequat ultricies mollis dignissim duis nec senectus
                senectus. Rhoncus eget aenean donec praesent lorem amet fusce a? Vulputate suscipit parturient
                suspendisse faucibus platea vehicula porttitor. Praesent leo morbi varius, senectus convallis facilisi
                nisi duis pulvinar. Ridiculus etiam ultrices non facilisi leo; non finibus porta.
            </p>

            
            <div className={styles.reactions}>
                <span className={styles.reaction}>
                    <img src="/img/layer1.svg" alt="Reaction Icon" className={styles.layer1} />
                </span>
                <span className={styles.reaction}>
                    <img src="/img/комм_пост.svg" alt="Comment Icon" className={styles.komm_post} />
                    999
                </span>
                <span className={styles.reaction}>
                    <img src="/img/иконка_зелён.svg" alt="Positive Reaction" className={styles.icongreen} />
                    999
                </span>
                <span className={styles.reaction}>
                    <img src="/img/иконка_красн.svg" alt="Negative Reaction" className={styles.iconred} />
                    999
                </span>
            </div>
        </article>
    );
};

export default Article ;
