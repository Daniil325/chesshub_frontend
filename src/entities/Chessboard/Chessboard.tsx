import { ChessboardProvider } from "./Context";
import { Board } from "./Board";
import styles from "./styles.module.css";
import { MoveList } from "./MoveList";

type Props = {
    onDataChange: () => void,
    readOnly: boolean,
    defaultMoves: string[],
    defaultPosition?: string
}

export const Chessboard = ({ onDataChange, readOnly, defaultMoves, defaultPosition }: Props) => {
    const handleChange = (event) => {
        onDataChange(event);
    };

    return (
        <ChessboardProvider>
            <div className={styles.chessboard_container}>
                <Board readOnly={readOnly} defaultPosition={defaultPosition} />
                <MoveList
                    handleChange={handleChange}
                    defaultMoves={defaultMoves}
                    readOnly={readOnly}
                />
            </div>
        </ChessboardProvider>
    );
};
