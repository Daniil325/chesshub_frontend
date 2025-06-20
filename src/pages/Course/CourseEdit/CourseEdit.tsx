import { useParams } from "react-router-dom";

type Props = {
    name: string;
    description: object;
    preview?: string;

};

export const CourseEdit = ({id, description, preview}: Props) => {
    const { id } = useParams();

    return <></>;
};
