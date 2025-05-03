import styles from "./style.module.css";
import React from "react";
import { useTheme } from "../ThemeContext";
import { articleApi } from "@/store/article";
import { ChessboardView } from "@/entities/Chessboard/Chessboard";


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

export const ArticlePOST: React.FC = ({id}) => {
    const { theme } = useTheme();
    const { data } = articleApi.useGetArticleQuery(id);
    console.log(data)

    if (data) {
        const item = data["item"]

        return (
            <article
                className={`${styles.article} ${
                    theme === "dark" ? styles.dark : ""
                }`}
            >
                <div className={styles.author_info}>
                    <img
                        src="/img/ава_конь_тёмный_фон.svg"
                        alt="Author Avatar"
                        className={styles.avatar}
                    />
                    <span className={styles.nickname}>author nickname</span>
                    <span className={styles.date}>11.09.2001</span>
                </div>
                
                <h2 className={styles.title}>
                    {item["title"]}
                </h2>

                {item["content"]["blocks"].map(el => {
                    if (el["type"] == "board") {
                        console.log(el)
                        return <ChessboardView defaultMoves={el["data"]}/>
                    }
                    if (el["type"] == "list") {
                        return (
                            <ul className={styles.list}>
                                <li>{el["data"]["items"].map(it => it.content)}</li>
                            </ul>
                        )
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
            </article>
        );
    }
};

export default ArticlePOST;
