import styles from "./style.module.css"

export const PostDescription = ({text}: {text: string}) => {
    return <p className={styles.postDescription}>{text}</p>
}