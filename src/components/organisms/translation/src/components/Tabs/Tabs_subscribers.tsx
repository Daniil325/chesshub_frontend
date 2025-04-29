import React from "react";
import styles from "./style.module.css";
import { useLocalization } from "../LocalizationContext";
import { translations } from "../translations";


const Tabs: React.FC = () => {
    const { language } = useLocalization();
    const t = translations[language];
    
    return (
        <div className={styles.tabs}>
            <a href="#" className={styles.tab}>{t.tabs.profile}</a>
            <a href="#" className={styles.tab}>{t.tabs.articles}</a>
            <a href="#" className={styles.tab}>{t.tabs.subscriptions}</a>
            <a href="#" className={`${styles.tab} ${styles.active}`}>{t.tabs.subscribers}</a>
        </div>
    );
};

export default Tabs;