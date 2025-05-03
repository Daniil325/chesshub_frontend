import { ChessboardProvider } from "./Context";
import { Board } from "./Board";
import styles from "./styles.module.css";
import { MoveList } from "./MoveList";

export const Chessboard = ({ data, onDataChange, readOnly }) => {
    const handleChange = (event) => {
        onDataChange(event);
    };

    return (
        <ChessboardProvider>
            <div className={styles.chessboard_container}>
                <Board />
                <MoveList handleChange={handleChange} />
            </div>
        </ChessboardProvider>
    );
};

export const ChessboardView = ({defaultMoves}) => {
    return (
        <ChessboardProvider>
            <div className={styles.chessboard_container}>
                <Board />
                <MoveList handleChange={() => {}} defaultMoves={defaultMoves} />
            </div>
        </ChessboardProvider>
    );
}
