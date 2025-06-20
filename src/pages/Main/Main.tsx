import { Header } from "@/components/organisms/Header";
import styles from "./style.module.css";
import Article from "@/components/organisms/Article/Article";
import { articleApi } from "@/store/article";
import { useEffect } from "react";

export function MainPage() {
    const { data, isLoading, isError, isFetching, refetch } =
        articleApi.useGetArticlesQuery();

    useEffect(() => {
        refetch();
    }, [])

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.main_container}>
                    <div>
                        {data["items"].map((el) => {
                            return (
                                <Article
                                    id={el["id"]}
                                    img={el["preview"]}
                                    title={el["title"]}
                                    pubDate={el["pubDate"]}
                                    username={el["username"]}
                                />
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}
