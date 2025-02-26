import styles from "./style.module.css"

export const PostHeader = ({text}: {text: string}) => {
    return <h3 className={styles.postHeader}>{text}</h3>
}