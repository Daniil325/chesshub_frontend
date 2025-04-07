import React from "react";
import styles from "./style.module.css";

const Tabs: React.FC = () => {
    return (
        <div className={styles.tabs}>
            <a href="#" className={styles.tab}>ПРОФИЛЬ</a>
            <a href="#" className={styles.tab}>СТАТЬИ</a>
            <a href="#" className={styles.tab}>ПОДПИСКИ</a>
            <a href="#" className={`${styles.tab} ${styles.active}`}>ПОДПИСЧИКИ</a>
        </div>
    );
};

export default Tabs;