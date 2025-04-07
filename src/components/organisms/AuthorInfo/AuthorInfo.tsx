import React from "react";
import styles from "./style.module.css";

const AuthorInfo: React.FC = () => {
    return (
        
        <div className={styles.author_info}>
            <div className={styles.avatar}>
                <img src="/img/ава_конь_тёмный_фон.svg" alt="Авторский аватар" />
            </div>
            <div className={styles.author_details}>
                <h2>author</h2>
                <p>@author_nickname</p>
                <p>Автор статей, тренер.</p>
            </div>
        </div>
    );
};

export default AuthorInfo;