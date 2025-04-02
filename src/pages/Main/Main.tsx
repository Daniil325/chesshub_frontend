import { Article } from "@/components/organisms/Article";
import { Header } from "@/components/organisms/Header";
import { Sidebar } from "@/components/organisms/Sidebar";
import styles from "./style.module.css";

export function MainPage() {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.main_container}>
                    <div>
                        <Article />
                        <Article />
                    </div>
                    <Sidebar />
                </div>
            </main>
        </>
    );
}
