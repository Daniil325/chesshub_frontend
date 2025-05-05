import { useContext } from "react";
import {
    Chessboard,
    ChessboardDnDProvider,
    SparePiece,
} from "react-chessboard";
import { ChessboardContext } from "./Context";
import { Piece } from "chess.js";
import styles from "./styles.module.css";

export const Board = ({readOnly=false}) => {
    const {
        game,
        fenPosition,
        setFenPosition,
        boardOrientation,
        setBoardOrientation,
        handleFenInputChange,
        isHidden,
        setMoveLog,
        onClearClick,
        handlePieceDrop,
        handleSparePieceDrop,
        handlePieceDropOffBoard,
        onDrop,
    } = useContext(ChessboardContext);

    const pieces = [
        "wP",
        "wN",
        "wB",
        "wR",
        "wQ",
        "wK",
        "bP",
        "bN",
        "bB",
        "bR",
        "bQ",
        "bK",
    ];

    return (
        <div
            className="div"
            style={{
                margin: "0 auto",
                maxWidth: "60vh",
                // display: isHidden ? "none" : "flex",
            }}
        >
            <div>
                <ChessboardDnDProvider>
                    <Chessboard
                        position={fenPosition}
                        onPieceDrop={readOnly ?  null : (isHidden ? onDrop : handlePieceDrop)}
                        autoPromoteToQueen={true}
                        boardOrientation={boardOrientation}
                        className={styles.board_container}
                        onSparePieceDrop={readOnly ?  null : handleSparePieceDrop}
                        onPieceDropOffBoard={readOnly ?  null : handlePieceDropOffBoard}
                    />

                    <div className={isHidden ? "d-none" : "d-block"}>
                        <div className="tools">
                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                {pieces.slice(6, 12).map((piece) => (
                                    <SparePiece
                                        key={piece}
                                        piece={piece as Piece}
                                        width={400 / 8}
                                    />
                                ))}
                            </div>

                            <div
                                style={{
                                    display: "flex",
                                }}
                            >
                                {pieces.slice(0, 6).map((piece) => (
                                    <SparePiece
                                        key={piece}
                                        piece={piece as Piece}
                                        width={400 / 8}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="buttons">
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <button
                                    onClick={() => {
                                        game.reset();
                                        setFenPosition(game.fen());
                                        setMoveLog([]);
                                    }}
                                >
                                    Start position ♟️
                                </button>
                                <button onClick={onClearClick}>
                                    Clear board 🗑️
                                </button>
                                <button
                                    onClick={() => {
                                        setBoardOrientation(
                                            boardOrientation === "white"
                                                ? "black"
                                                : "white"
                                        );
                                    }}
                                >
                                    Flip board 🔁
                                </button>
                            </div>
                            <input
                                value={fenPosition}
                                onChange={handleFenInputChange}
                                placeholder="Paste FEN position to start editing"
                            />
                        </div>
                    </div>
                </ChessboardDnDProvider>
            </div>
        </div>
    );
};
