import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";
import ThemeToggle from "../ThemeToggle";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLoginState } from "@/hooks/useLoginState";
import { useLocalization } from "@/LocalizationContext";
import { translations } from "@/translations";

export const Header: React.FC = () => {
    const { theme } = useTheme();

    const { username, role } = useSelector((state) => {
        return {
            username: state.loginUser.username,
            role: state.loginUser.role,
        };
    });

    const isAuthenticated = useLoginState();

    const { language } = useLocalization();
    const t = translations[language];

    return (
        <header
            className={`${styles.header} ${
                theme === "dark" ? styles.dark : ""
            }`}
        >
            <div className={styles.header_top}>
                <h1 className={styles.header__title}>ChessHub</h1>
                {isAuthenticated ? (
                    <h3>{t.header.greet} {username}</h3>
                ) : (
                    <h3>
                        <Link to="/register">{t.header.register} </Link>
                        / <Link to="/login">{t.header.login}</Link>
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
                            {t.header.articles}
                        </Link>
                    </li>
                    <li className={styles.header_nav__item}>
                        <Link className={styles.header_nav__link} to="/course">
                            {t.header.courses}
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
