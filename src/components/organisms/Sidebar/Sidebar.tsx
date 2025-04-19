import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";

const Sidebar: React.FC = () => {
    const { theme } = useTheme();

    return (
        <aside className={`${styles.aside} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.interesting}>
                <h3>Интересное</h3>
                <div className={styles["interest-item"]}>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className={styles["reaction-count"]}>
                        <span className={styles.icon4}>
                            <img src="/img/глаза_интерес.svg" alt="Icon 4" /> 999
                        </span>
                        <span className={styles.icon5}>
                            <img src="/img/комментарии.svg" alt="Icon 5" /> 999
                        </span>
                    </div>
                </div>
                <div className={styles["interest-item"]}>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className={styles["reaction-count"]}>
                        <span className={styles.icon4}>
                            <img src="/img/глаза_интерес.svg" alt="Icon 4" /> 999
                        </span>
                        <span className={styles.icon5}>
                            <img src="/img/комментарии.svg" alt="Icon 5" /> 999
                        </span>
                    </div>
                </div>
                <div className={styles["interest-item"]}>
                    <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className={styles["reaction-count"]}>
                        <span className={styles.icon4}>
                            <img src="/img/глаза_интерес.svg" alt="Icon 4" /> 999
                        </span>
                        <span className={styles.icon5}>
                            <img src="/img/комментарии.svg" alt="Icon 5" /> 999
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.events}>
                <h3>Ближайшие события</h3>
                <div className={styles["event-item"]}>
                    <img src="/img/image 2.png" alt="Event Image" />
                    <div className={styles["event-details"]}>
                        <span className={styles.span}>11.09.2001</span>
                        <p className={styles.p11}>Сидим, не рыпаемся.</p>
                        <p className={styles.p12}>Онлайн</p>
                    </div>
                </div>
                <div className={styles["event-item"]}>
                    <img src="/img/image 2.png" alt="Event Image" />
                    <div className={styles["event-details"]}>
                        <span className={styles.span}>11.09.2001</span>
                        <p className={styles.p11}>Сидим, не рыпаемся.</p>
                        <p className={styles.p12}>Онлайн</p>
                    </div>
                </div>
                <div className={styles["event-item"]}>
                    <img src="/img/image 2.png" alt="Event Image" />
                    <div className={styles["event-details"]}>
                        <span className={styles.span}>11.09.2001</span>
                        <p className={styles.p11}>Сидим, не рыпаемся.</p>
                        <p className={styles.p12}>Онлайн</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;