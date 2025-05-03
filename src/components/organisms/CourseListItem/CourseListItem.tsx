import styles from "./style.module.css";

type Props = {
    id: string;
    img: string;
    name: string;
    price: number;
    author: string
};

export const CourseListItem = ({ id, img, name, price, author }: Props) => {
    return (
        <div key={id} className={styles.course_list_item__container}>
            <img className={styles.course_list_item__image} src={img} alt="" />
            <div className={styles.course_list_item__info}>
                <p className={styles.course_list_item__title}>{name}</p>
                <p className={styles.course_list_item__price}>{price}</p>
                <p className={styles.course_list_item__price}>{author}</p>
            </div>
        </div>
    );
};
