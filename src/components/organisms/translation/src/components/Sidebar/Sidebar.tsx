import React from "react";
import styles from "./style.module.css";
import { useLocalization } from "../LocalizationContext";
import { translations } from "../translations";

const Sidebar: React.FC = () => {
    const { language } = useLocalization();
    const t = translations[language];

    return (
        <aside className={styles.sidebar}>
            
            <div className={styles.info}>
                <h3>{t.info.title}</h3>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info.status}</span>
                    <span className={styles.value1}>Статус</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info.country}</span>
                    <span className={styles.value2}>Россия</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info.date}</span>
                    <span className={styles.value3}>11.09.2001</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info.rating}</span>
                    <span className={styles.value4}>999</span>
                </div>
            </div>

           
            <div className={styles.lichess_info}>
                <h3>{t.info_lichess.title}</h3>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info_lichess.nickname}</span>
                    <span className={styles.value5}>@Autor_playing</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info_lichess.ultrabullet}</span>
                    <span className={styles.value6}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info_lichess.bullet}</span>
                    <span className={styles.value7}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info_lichess.blitz}</span>
                    <span className={styles.value8}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info_lichess.rapid}</span>
                    <span className={styles.value9}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>{t.info_lichess.classical}</span>
                    <span className={styles.value10}>999</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

