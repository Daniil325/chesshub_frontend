import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";
import { Link } from "react-router-dom";
type Props = {
    name: string;
    surname: string;
    username: string;
};

const AuthorInfo: React.FC<Props> = ({ username }: Props) => {
    const { theme } = useTheme();

    return (
        <div
            className={`${styles.author_info} ${
                theme === "dark" ? styles.dark : ""
            }`}
        >
            <div className={styles.avatar}>
                <img
                    src="/img/ава_конь_тёмный_фон.svg"
                    alt="Авторский аватар"
                />
            </div>
            <div className={styles.author_details}>
                <h2>@{username}</h2>
                <p>Автор статей, тренер.</p>
            </div>
            <div className={styles.edit_profile}>
                <Link to="/edit_profile">Редактировать профиль</Link>
                <br />
                <Link to="/create_course">Создать курс</Link>
            </div>
        </div>
    );
};

export default AuthorInfo;
