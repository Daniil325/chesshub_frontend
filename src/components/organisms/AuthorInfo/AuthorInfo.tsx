import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";

type Props = {
    name: string,
    surname: string,
    username: string
}

const AuthorInfo: React.FC<Props> = ({username}: Props) => {
    const { theme } = useTheme();
    return (
        
        <div className={`${styles.author_info} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.avatar}>
                <img src="/img/ава_конь_тёмный_фон.svg" alt="Авторский аватар" />
            </div>
            <div className={styles.author_details}>
                <h2>@{username}</h2>
                <p>Автор статей, тренер.</p>
            </div>
        </div>
    );
};

export default AuthorInfo;