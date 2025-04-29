import React from "react";
import styles from "./style.module.css";
import { useLocalization } from "../LocalizationContext";
import { translations } from "../translations";

const ProfileInfo: React.FC = () => {
    const { language } = useLocalization();
    const t = translations[language];

    return (
        <div className={styles.profile_info}>
            <div className={styles.head_sub}>
                <span>{t.table_sub.name}</span>
                <span>{t.table_sub.rating}</span>
            </div>
            <div className={styles.section}>
                <div className={styles.sub_info}>
                    <div className={styles.avatar}>
                        <img src="/img/ава_конь_тёмный_фон.svg" alt="Авторский аватар" />
                    </div>
                    <div className={styles.nicname_sub}> <span>author nickname</span> </div>
                    <div className={styles.rating_green}> <span>999</span> </div>
                    
                </div>

                <div className={styles.sub_info}>
                    <div className={styles.avatar}>
                        <img src="/img/ава_конь_тёмный_фон.svg" alt="Авторский аватар" />
                    </div>
                    <div className={styles.nicname_sub}> <span>author nickname</span> </div>
                    <div className={styles.rating_red}> <span>999</span> </div>
                    
                </div>

                <div className={styles.sub_info}>
                    <div className={styles.avatar}>
                        <img src="/img/ава_конь_тёмный_фон.svg" alt="Авторский аватар" />
                    </div>
                    <div className={styles.nicname_sub}> <span>author nickname</span> </div>
                    <div className={styles.rating_grey}> <span>0</span> </div>
                    
                </div>

                <div className={styles.sub_info}>
                    <div className={styles.avatar}>
                        <img src="/img/ава_конь_тёмный_фон.svg" alt="Авторский аватар" />
                    </div>
                    <div className={styles.nicname_sub}> <span>author nickname</span> </div>
                    <div className={styles.rating_red}> <span>999</span> </div>
                    
                </div>

                <div className={styles.sub_info}>
                    <div className={styles.avatar}>
                        <img src="/img/ава_конь_тёмный_фон.svg" alt="Авторский аватар" />
                    </div>
                    <div className={styles.nicname_sub}> <span>author nickname</span> </div>
                    <div className={styles.rating_green}> <span>999</span> </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;