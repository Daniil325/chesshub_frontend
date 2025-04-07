import React from "react";
import styles from "./style.module.css";

const ProfileInfo: React.FC = () => {
    return (
        <div className={styles.profile_info}>
            <div className={styles.section}>
                <h3>О себе</h3>
                <p>Я такой крутой, блин, класс.</p>
            </div>
            <div className={styles.section}>
                <h3>Разряд</h3>
                <p>Гроссмейстер.</p>
            </div>
            <div className={styles.section}>
                <h3>Достижения</h3>
                <p>1 место на чемпионате Водокачки.</p>
            </div>
        </div>
    );
};

export default ProfileInfo;