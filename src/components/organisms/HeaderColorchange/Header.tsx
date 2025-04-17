import React, { useContext } from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";
import ThemeToggle from "../ThemeToggle";

export const Header: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`${styles.header} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.header_top}>
                <h1 className={styles.header__title}>ChessHub</h1>
                <img className={styles.header__profile_logo} src="/img/ава_конь.svg" alt="###" />
            </div>
            <nav className={styles.header_nav}>
                <ul className={styles.header_nav__items}>
                    <li className={styles.header_nav__item}>
                        <a className={styles.header_nav__link} href="#">
                            Выйти
                        </a>
                    </li>
                    <li className={styles.header_nav__item}>
                        <a className={styles.header_nav__link} href="#">
                            Выйти
                        </a>
                    </li>
                    <li className={styles.header_nav__item}>
                        <a className={styles.header_nav__link} href="#">
                            Выйти
                        </a>
                    </li>
                    <li className={styles.header_nav__item}>
                        <a className={styles.header_nav__link} href="#">
                            Выйти
                        </a>
                    </li>
                </ul>
                <div className={styles.icons}>
                    
                    <img className={styles.nav_img} src="/img/пен.svg" alt="###" />
                    <img className={styles.nav_img} src="/img/лупа.svg" alt="###" />
                    <ThemeToggle />
                </div>
               
            </nav>
        </header>
    );
};

export default Header;