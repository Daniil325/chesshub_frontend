import { ChessboardProvider } from "./Context";
import { Board } from "./Board";
import { MoveList } from "./MoveList";
import styles from "./styles.module.css";

export const Chessboard = () => {
    return (
        <ChessboardProvider>
            <div className={styles.chessboard_container}>
                <Board />
                <MoveList />
            </div>
        </ChessboardProvider>
    );
};
