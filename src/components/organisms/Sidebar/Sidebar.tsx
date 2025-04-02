import React from "react";
import styles from "./style.module.css";

export const Sidebar: React.FC = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.interesting}>
                <h3 className={styles.interesting_title}>Интересное</h3>
                <div className={styles.interest_item}>
                    <p className={styles.interest_item_title}>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className={styles.reaction_count}>
                        <span className={styles.reaction_stat}>
                            <img className={styles.reaction_stat_img} src="/img/глаза_интерес.svg" alt="Icon 4" />{" "}
                            999
                        </span>
                        <span className={styles.reaction_stat}>
                            <img className={styles.reaction_stat_img}  src="/img/комментарии.svg" alt="Icon 5" /> 999
                        </span>
                    </div>
                </div>
                <div className={styles.interest_item}>
                    <p className={styles.interest_item_title}>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className={styles.reaction_count}>
                        <span className={styles.reaction_stat}>
                            <img className={styles.reaction_stat_img} src="/img/глаза_интерес.svg" alt="Icon 4" />{" "}
                            999
                        </span>
                        <span className={styles.reaction_stat}>
                            <img className={styles.reaction_stat_img}  src="/img/комментарии.svg" alt="Icon 5" /> 999
                        </span>
                    </div>
                </div>
                <div className={styles.interest_item}>
                    <p className={styles.interest_item_title}>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
                    <div className={styles.reaction_count}>
                        <span className={styles.reaction_stat}>
                            <img className={styles.reaction_stat_img} src="/img/глаза_интерес.svg" alt="Icon 4" />{" "}
                            999
                        </span>
                        <span className={styles.reaction_stat}>
                            <img className={styles.reaction_stat_img}  src="/img/комментарии.svg" alt="Icon 5" /> 999
                        </span>
                    </div>
                </div>
            </div>

            <div className={styles.events}>
                <h3 className={styles.events_title}>Ближайшие события</h3>
                <div className={styles.event_item}>
                    <img className={styles.events_image} src="/img/image 2.png" alt="Event Image" />
                    <div className={styles.event_details}>
                        <span className={styles.event_date}>11.09.2001</span>
                        <p className={styles.event_title}>Сидим, не рыпаемся.</p>
                        <p className={styles.event_type}>Онлайн</p>
                    </div>
                </div>
                <div className={styles.event_item}>
                    <img className={styles.events_image} src="/img/image 2.png" alt="Event Image" />
                    <div className={styles.event_details}>
                        <span className={styles.event_date}>11.09.2001</span>
                        <p className={styles.event_title}>Сидим, не рыпаемся.</p>
                        <p className={styles.event_type}>Онлайн</p>
                    </div>
                </div>
                <div className={styles.event_item}>
                    <img className={styles.events_image} src="/img/image 2.png" alt="Event Image" />
                    <div className={styles.event_details}>
                        <span className={styles.event_date}>11.09.2001</span>
                        <p className={styles.event_title}>Сидим, не рыпаемся.</p>
                        <p className={styles.event_type}>Онлайн</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};
