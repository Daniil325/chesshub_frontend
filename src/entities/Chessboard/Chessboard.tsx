import { ChessboardProvider } from "./Context";
import { Board } from "./Board";
import styles from "./styles.module.css";
import { ManualEditor } from "./ManualEditor";
export const Chessboard = () => {
    return (
        <ChessboardProvider>
            <div className={styles.chessboard_container}>
                <Board />
            </div>
            <div>
                <ManualEditor />
            </div>
        </ChessboardProvider>
    );
};
