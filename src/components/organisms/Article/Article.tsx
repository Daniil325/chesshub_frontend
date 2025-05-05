import styles from "./style.module.css";
import React from "react";
import { useTheme } from "../ThemeContext";
import { articleApi } from "@/store/article";
import { format } from "date-fns";
import { Link } from "react-router-dom";

const DynamicIcon: React.FC<{
    lightSrc: string;
    darkSrc: string;
    alt: string;
    className?: string;
}> = ({ lightSrc, darkSrc, alt, className }) => {
    const { theme } = useTheme();

    return (
        <img
            src={theme === "dark" ? darkSrc : lightSrc}
            alt={alt}
            className={className}
        />
    );
};

type Props = {
    id: string;
    img: string;
    title: string;
    pubDate: string;
    username: string
};

const formatDateTime = (date) => {
    return format(date, "dd.MM.yyyy HH:mm:ss");
};

export const Article: React.FC<Props> = ({ id, img, title, pubDate, username }: Props) => {
    const { theme } = useTheme();

    console.log(id, img, title, pubDate, username)

    const { isLoading, isFetching } = articleApi.useGetArticlesQuery();

    if (isFetching) {
        return <h1>Loading</h1>;
    }

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <article
            className={`${styles.article} ${
                theme === "dark" ? styles.dark : ""
            }`}
        >
            <div className={styles.article_container}>
                <div className={styles.author_info}>
                    <img
                        className={styles.author_profile_logo}
                        src="/img/ава_конь_тёмный_фон.svg"
                        alt="Author Avatar"
                    />
                    <span className={styles.nickname}>{username}</span>
                    <span className={styles.pub_date}>
                        {formatDateTime(pubDate)}
                    </span>
                </div>

                <img
                    src={`http://127.0.0.1:9000/content-images/${img}`}
                    alt="Chess Image"
                    className={styles.article_preview}
                />

                <h2 className={styles.article_title}><Link to={`/article/${id}`}>{title}</Link></h2>

                <p className={styles.article_text}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                </p>

                <div className={styles.reactions}>
                    <span className={styles.article_stat}>
                        <DynamicIcon
                            lightSrc="/public/иконка_зелён_светлая.svg"
                            darkSrc="/public/иконка_зелён_тёмная.svg"
                            alt="Likes"
                            className={styles.icon_reaction}
                        />
                        999
                    </span>

                    <span className={styles.article_stat}>
                        <DynamicIcon
                            lightSrc="/public/иконка_красн_светлая.svg"
                            darkSrc="/public/иконка_красн_тёмная.svg"
                            alt="Dislikes"
                            className={styles.icon_reaction}
                        />
                        999
                    </span>
                </div>
            </div>
        </article>
    );
};

export default Article;
