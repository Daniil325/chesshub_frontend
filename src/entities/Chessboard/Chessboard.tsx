import { ChessboardProvider } from "./Context";
import { Board } from "./Board";
import styles from "./styles.module.css";
import { MoveList } from "./MoveList";

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
