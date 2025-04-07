import React from "react";
import styles from "./style.module.css";

const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            
            <div className={styles.info}>
                <h3>Информация</h3>
                <div className={styles.info_item}>
                    <span className={styles.label}>Статус</span>
                    <span className={styles.value1}>Статус</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>Страна</span>
                    <span className={styles.value2}>Россия</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>Дата создания</span>
                    <span className={styles.value3}>11.09.2001</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>Рейтинг</span>
                    <span className={styles.value4}>999</span>
                </div>
            </div>

           
            <div className={styles.lichess_info}>
                <h3>Информация с lichess</h3>
                <div className={styles.info_item}>
                    <span className={styles.label}>Ник</span>
                    <span className={styles.value5}>@Autor_playing</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>ULTRABULLET</span>
                    <span className={styles.value6}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>Пуля</span>
                    <span className={styles.value7}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>Блиц</span>
                    <span className={styles.value8}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>Рапид</span>
                    <span className={styles.value9}>999</span>
                </div>
                <div className={styles.info_item}>
                    <span className={styles.label}>Классика</span>
                    <span className={styles.value10}>999</span>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

