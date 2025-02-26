import styles from "./style.module.css"

export const PostDigit = ({text}: {text: string}) => {
    return <p className={styles.postDigit}>{text}</p>
}