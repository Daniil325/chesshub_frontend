import styles from "./style.module.css";
import React from "react";
import { useTheme } from "../ThemeContext";
import { articleApi } from "@/store/article";
import { Chessboard } from "@/entities/Chessboard/Chessboard";
import { format } from "date-fns";

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


const formatDateTime = (date) => {
    return format(date, "dd.MM.yyyy HH:mm:ss");
};


export const ArticlePOST: React.FC = ({ id }) => {
    const { theme } = useTheme();
    const { data, isLoading } = articleApi.useGetArticleQuery(id);

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    const item = data["item"];

    return (
        <article
            className={`${styles.article} ${
                theme === "dark" ? styles.dark : ""
            }`}
        >
            <div className={styles.article_content}>
                <div className={styles.author_info}>
                    <img
                        src="/img/ава_конь_тёмный_фон.svg"
                        alt="Author Avatar"
                        className={styles.avatar}
                    />
                    <span className={styles.nickname}>{item["username"]}</span>
                    <span className={styles.date}>{formatDateTime(item["pubDate"])}</span>
                </div>

                <h2 className={styles.title}>{item["title"]}</h2>
                <img
                    src={`http://127.0.0.1:9000/content-images/${item["preview"]}`}
                    alt=""
                />

                {item.content.blocks.map((el) => {
                    if (el["type"] == "board") {
                        return (
                            <div className="">
                                <Chessboard
                                    defaultMoves={el["data"]}
                                    readOnly={true}
                                    onDataChange={() => {}}
                                />
                            </div>
                        );
                    }
                    if (el["type"] == "list") {
                        return (
                            <ul className={styles.list}>
                                <li>
                                    {el["data"]["items"].map(
                                        (it) => it.content
                                    )}
                                </li>
                            </ul>
                        );
                    }
                    if (el["type"] == "paragraph") {
                        return (
                            <p className={styles.text}>{el["data"]["text"]}</p>
                        );
                    }
                })}

                <div className={styles.reactions}>
                    <span className={styles.reaction}>
                        <img
                            src="/img/layer1.svg"
                            alt="Reaction Icon"
                            className={styles.layer1}
                        />
                    </span>
                    <span className={styles.reaction}>
                        <img
                            src="/img/комм_пост.svg"
                            alt="Comment Icon"
                            className={styles.komm_post}
                        />
                        999
                    </span>
                    <span className={styles.reaction}>
                        <DynamicIcon
                            lightSrc="/img/иконка_зелён_светлая.svg"
                            darkSrc="/img/иконка_зелён_тёмная.svg"
                            alt="Positive Reaction"
                            className={styles.icongreen}
                        />
                        999
                    </span>
                    <span className={styles.reaction}>
                        <DynamicIcon
                            lightSrc="/img/иконка_красн_светлая.svg"
                            darkSrc="/img/иконка_красн_тёмная.svg"
                            alt="Negative Reaction"
                            className={styles.iconred}
                        />
                        999
                    </span>
                </div>
            </div>
        </article>
    );
};

export default ArticlePOST;
