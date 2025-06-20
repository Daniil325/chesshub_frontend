import { CourseListItem } from "@/components/organisms/CourseListItem/CourseListItem";
import { Header } from "@/components/organisms/Header";
import { courseApi } from "@/store/course";

export const CoursesList = () => {
    const { data, isLoading, isError, isFetching } =
        courseApi.useGetCoursesQuery();

    console.log(data)

    if (isLoading) {
        return <h1>loading...</h1>;
    }
    return (
        <>
            <Header />
            <main className="main">
                <div className="main_container">
                    <h2>Курсы</h2>
                    {data["items"].map((el) => {
                        return (
                            <CourseListItem
                                id={el["id"]}
                                name={el["name"]}
                                description={el["description"]["description"]}
                                price={el["price"]}
                                author={el["author_username"]}
                                preview={el["preview"]}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
};
