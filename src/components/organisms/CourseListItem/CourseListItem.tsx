import styles from "./style.module.css";

type Props = {
    id: string;
    description: string;
    name: string;
    price: number;
    author: string;
    preview?: string;
};

export const CourseListItem = ({
    id,
    description,
    name,
    price,
    author,
    preview,
}: Props) => {
    return (
        <div key={id} className={styles.course_list_item__container}>
            <div className={styles.course_list_item__info}>
                <p className={styles.course_list_item_image}>
                    <img src={`/media/content-images/${preview}`} alt="" />
                </p>
                <div>
                    <p className={styles.course_list_item__title}>{name}</p>
                    <p className={styles.course_list_item__title}>
                        Описание: {description}
                    </p>
                    <p className={styles.course_list_item__price}>Цена: {price}</p>
                    <p className={styles.course_list_item__price}>Автор: {author}</p>
                </div>
            </div>
        </div>
    );
};
