import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";
const Tabs: React.FC = () => {
    const { theme } = useTheme();
    return (
        <div className={`${styles.tabs} ${theme === 'dark' ? styles.dark : ''}`}>
            <a href="#" className={`${styles.tab} ${styles.active}`}>ПРОФИЛЬ</a>
            <a href="#" className={styles.tab}>СТАТЬИ</a>
            <a href="#" className={styles.tab}>ПОДПИСКИ</a>
            <a href="#" className={styles.tab}>ПОДПИСЧИКИ</a>
        </div>
    );
};

export default Tabs;