import { ChessboardProvider } from "./Context";
import { Board } from "./Board";
import styles from "./styles.module.css";
import { MoveList } from "./MoveList";

type Props = {
    onDataChange: () => void,
    readOnly: boolean,
    defaultMoves: string[]
}

export const Chessboard = ({ onDataChange, readOnly, defaultMoves }: Props) => {
    const handleChange = (event) => {
        onDataChange(event);
    };

    return (
        <ChessboardProvider>
            <div className={styles.chessboard_container}>
                <Board readOnly={readOnly} />
                <MoveList
                    handleChange={handleChange}
                    defaultMoves={defaultMoves}
                    readOnly={readOnly}
                />
            </div>
        </ChessboardProvider>
    );
};
