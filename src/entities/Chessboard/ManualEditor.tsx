import {
    Chessboard,
    ChessboardDnDProvider,
    SparePiece,
} from "react-chessboard";
import { ChessboardContext } from "./Context";
import { useContext } from "react";
import { Piece } from "chess.js";

export const ManualEditor = () => {
    const {
        game,
        fenPosition,
        setFenPosition,
        boardOrientation,
        setBoardOrientation,
        handleFenInputChange,
        handlePieceDrop,
        handleSparePieceDrop,
        handlePieceDropOffBoard,
        isHidden,
        changeHidden,
        setMoveLog,
        onClearClick,
        moveLog,
    } = useContext(ChessboardContext);

    console.log(moveLog);

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
        <div>
            <p onClick={changeHidden}>Закрыть</p>
            <ChessboardDnDProvider>
                <div className={isHidden ? "d-none" : "d-block"}>
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
                    <Chessboard
                        boardOrientation={boardOrientation}
                        position={game.fen()}
                        onSparePieceDrop={handleSparePieceDrop}
                        onPieceDrop={handlePieceDrop}
                        onPieceDropOffBoard={handlePieceDropOffBoard}
                        dropOffBoardAction="trash"
                    />
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
                    <button onClick={onClearClick}>Clear board 🗑️</button>
                    <button
                        onClick={() => {
                            setBoardOrientation(
                                boardOrientation === "white" ? "black" : "white"
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
            </ChessboardDnDProvider>
        </div>
    );
};
