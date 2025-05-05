import React from "react";
import styles from "./style.module.css";
import { useTheme } from "../ThemeContext";

type Props = {
    name: string;
    surname: string;
    email: string;
    user_info: object;
};

export const ProfileInfo: React.FC<Props> = ({
    user_info,
    name,
    surname,
    email,
}: Props) => {
    const { theme } = useTheme();

    return (
        <div
            className={`${styles.profile_info} ${
                theme === "dark" ? styles.dark : ""
            }`}
        >
            <div className={styles.section}>
                <h3>О себе</h3>
                <p>
                    {surname} {name}
                </p>
                <p>{email}</p>
            </div>
            <div className={styles.section}>
                {user_info.blocks.map((el) => {
                    if (el["type"] == "header") {
                        return (
                            <h3 className={styles.text}>
                                {el["data"]["text"]}
                            </h3>
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
            </div>
        </div>
    );
};
