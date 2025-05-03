import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginState } from "@/hooks/useLoginState";

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    const { username, role, id } = useSelector((state) => {
        return {
            username: state.loginUser.username,
            role: state.loginUser.role,
            id: state.loginUser.id,
        };
    });

    const isAuthenticated = useLoginState();

    return (
        <header
            className={`${styles.header} ${
                theme === "dark" ? styles.dark : ""
            }`}
        >
            <div className={styles.header_top}>
                <h1 className={styles.header__title}>ChessHub</h1>
                {isAuthenticated ? (
                    <h3>Добро пожаловать {username}</h3>
                ) : (
                    <h3>
                        <Link to="/register">Зарегистрируйтесь</Link>
                    </h3>
                )}

                <Link to="/profile">
                    <img
                        className={styles.header__profile_logo}
                        src="/img/ава_конь.svg"
                        alt="###"
                    />
                </Link>
            </div>
            <nav className={styles.header_nav}>
                <ul className={styles.header_nav__items}>
                    <li className={styles.header_nav__item}>
                        <Link className={styles.header_nav__link} to="/">
                            Статьи
                        </Link>
                    </li>
                    <li className={styles.header_nav__item}>
                        <Link className={styles.header_nav__link} to="/course">
                            Курсы
                        </Link>
                    </li>
                </ul>
                <div className={styles.icons}>
                    {isAuthenticated ? (
                        <Link to="/article/create/">
                            <img
                                className={styles.nav_img}
                                src="/img/пен.svg"
                                alt="###"
                            />
                        </Link>
                    ) : (
                        <></>
                    )}

                    <img
                        className={styles.nav_img}
                        src="/img/лупа.svg"
                        alt="###"
                    />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    );
};

export default Header;
