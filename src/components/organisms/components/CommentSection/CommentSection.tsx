import React from "react";
import styles from "./style.module.css";

const CommentSection: React.FC = () => {
    return (
        <div className={styles.comments}>
           
            <div className={styles.comment_input}>
                <div>
                    <img src="/img/ава_конь.svg" alt="Шахматная фигура" className={styles.comment_input_logo} />
                </div>
                <input
                    className={styles.writeacomment}
                    type="text"
                    placeholder="Написать комментарий..."
                />
                <button>
                    <img src="/img/иконка отправить.svg" alt="Отправить"  className={styles.comment_input_button}/>
                </button>
            </div>

            
            <h3>
                Комментарии <span className={styles.maincomment}>999</span>
            </h3>

            
            <div className={styles.comment}>
                <div className={styles.author_info}>
                    <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" />
                    <span className={styles.nickname}>author nickname</span>
                    <span className={styles.date}>11.09.2001</span>
                </div>
                <p className={styles.p1}>
                    Tincidunt senectus litora primis, arcu inceptos tincidunt gravida. Ridiculus etiam ultrices non
                    facilisi leo; non finibus porta.
                </p>
                <div className={styles.reactions}>
                    <span className={styles.answer}>Ответить</span>
                    <span className={styles.icongreen}>
                        <img src="/img/иконка_зелён.svg" alt="Icon 4" /> 999
                    </span>
                    <span className={styles.iconred}>
                        <img src="/img/иконка_красн.svg" alt="Icon 5" /> 999
                    </span>
                </div>
            </div>

            
            <div className={styles.comment}>
                <div className={styles.author_info}>
                    <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" />
                    <span className={styles.nickname}>author nickname</span>
                    <span className={styles.date}>11.09.2001</span>
                </div>
                <p className={styles.p1}>
                    Tincidunt senectus litora primis, arcu inceptos tincidunt gravida. Ridiculus etiam ultrices non
                    facilisi leo; non finibus porta.
                </p>
                <div className={styles.reactions}>
                    <span className={styles.answer}>Ответить</span>
                    <span className={styles.icongreen}>
                        <img src="/img/иконка_зелён.svg" alt="Icon 4" /> 999
                    </span>
                    <span className={styles.iconred}>
                        <img src="/img/иконка_красн.svg" alt="Icon 5" /> 999
                    </span>
                </div>
            </div>

            
            <div className={styles.comment}>
                <div className={styles.author_info}>
                    <img src="/img/ава_конь_тёмный_фон.svg" alt="Author Avatar" />
                    <span className={styles.nickname}>author nickname</span>
                    <span className={styles.date}>11.09.2001</span>
                </div>
                <p className={styles.p1}>
                    Tincidunt senectus litora primis, arcu inceptos tincidunt gravida. Ridiculus etiam ultrices non
                    facilisi leo; non finibus porta.
                </p>
                <div className={styles.reactions}>
                    <span className={styles.answer}>Ответить</span>
                    <span className={styles.icongreen}>
                        <img src="/img/иконка_зелён.svg" alt="Icon 4" /> 999
                    </span>
                    <span className={styles.iconred}>
                        <img src="/img/иконка_красн.svg" alt="Icon 5" /> 999
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CommentSection;