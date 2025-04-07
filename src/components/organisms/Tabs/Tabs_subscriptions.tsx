import React from "react";
import styles from "./style.module.css";

const Tabs: React.FC = () => {
    return (
        <div className={styles.tabs}>
            <a href="#" className={styles.tab}>ПРОФИЛЬ</a>
            <a href="#" className={styles.tab}>СТАТЬИ</a>
            <a href="#" className={`${styles.tab} ${styles.active}`}>ПОДПИСКИ</a>
            <a href="#" className={styles.tab}>ПОДПИСЧИКИ</a>
        </div>
    );
};

export default Tabs;