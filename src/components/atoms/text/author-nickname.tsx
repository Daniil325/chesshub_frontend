import styles from "./style.module.css"

export const AuthorNickname = ({text}: {text: string}) => {
    return <p className={styles.postDigit}>{text}</p>
}