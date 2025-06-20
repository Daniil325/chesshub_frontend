type Props = {
    name: string;
    description: object;
    preview?: string;

};

export const CourseDetail = ({name, description, preview}: Props) => {
    const { id } = useParams();

    return (
        <>
            <h2>{name}</h2>
            <p>
                {description}
            </p>
        </>
    )
}