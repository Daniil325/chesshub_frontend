import { Header } from "@/components/organisms/Header";
import styles from "./styles.module.css"
import { Chessboard } from "@/entities/Chessboard/Chessboard";


export const LessonDetail = () => {
    return (
        <>
            <Header />
            <main className="main">
                <div className={styles.lesson_container}>
                    <div className={styles.lesson_list}>
                        <p>Урок 1</p>
                        <p>Урок 2</p>
                        <p>Урок 3</p>
                        <p>Урок 4</p>
                        <p>Урок 5</p>
                        <p>Урок 6</p>
                    </div>

                    <div className={styles.lesson_content}>
                        <h2>Урок 1</h2>

                        <p>
                            Мат — это ситуация, когда король противника находится под атакой и не может уйти от неё. Это конечная цель в
                            шахматной партии. Мы рассмотрим несколько простых способов, как можно поставить мат, и научимся распознавать такие ситуации на доске.</p>
                        <h3><b>Основные понятия</b></h3>

                        <p>
                            Прежде чем мы перейдем к примерам, давайте вспомним несколько ключевых терминов.

                            <p>• Мат — это когда король противника не может сделать ни одного безопасного хода.</p>

                            <p>• Шах — это когда король находится под атакой.</p>

                            <p>• Король — самая важная фигура в шахматах, которую нужно защищать.</p>

                            <p>• Фигуры — это ваши пешки, слоны, ладьи, кони и ферзи, которые помогают вам в игре.</p>

                            Также важно знать, как двигаются эти фигуры. Например, слоны ходят по диагонали, а ладьи — по вертикали и горизонтали.
                        </p>

                        <div>
                            <h2>Детский мат</h2>
                            <Chessboard 
                                defaultMoves={["e4", "e5", "Bc4", "Nc6", "Qh5", "Nf6", "Qxf7#"]}
                                readOnly={true}
                                onDataChange={() => { }}
                            />
                        </div>

                        <div>
                            <h2>Мат ферзем</h2>
                            <Chessboard 
                                defaultMoves={["Qf2#"]}
                                defaultPosition="8/8/8/8/8/5K2/1Q6/5k2 w - - 0 1"
                                readOnly={true}
                                onDataChange={() => { }}
                            />
                        </div>

                    </div>
                </div>

            </main>
        </>
    )
}