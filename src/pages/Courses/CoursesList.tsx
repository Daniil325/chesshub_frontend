import { CourseListItem } from "@/components/organisms/CourseListItem/CourseListItem";
import { Header } from "@/components/organisms/Header";
import { courseApi } from "@/store/course";

export const CoursesList = () => {
    const { data, isLoading, isError, isFetching } =
        courseApi.useGetCoursesQuery();

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
                                img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hollywoodreporter.com%2Fnews%2Fgeneral-news%2Fwhy-img-worldwide-is-being-400544%2F&psig=AOvVaw2gmRrXSj619E5uoKNf7QzH&ust=1746257593481000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKja6c6ihI0DFQAAAAAdAAAAABAE"
                                price={el["price"]}
                                author={el["author_username"]}
                            />
                        );
                    })}
                </div>
            </main>
        </>
    );
};
