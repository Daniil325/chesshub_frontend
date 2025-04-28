import { useContext } from "react";
import { Chessboard } from "react-chessboard";
import { ChessboardContext } from "./Context";
import { MoveList } from "./MoveList";

export const Board = () => {
    const { fenPosition, onDrop, boardOrientation, isHidden } =
        useContext(ChessboardContext);

    return (
        <div
            className="div"
            style={{
                margin: "0 auto",
                maxWidth: "60vh",
                display: isHidden ? "flex" : "none",
            }}
        >
            <Chessboard
                position={fenPosition}
                onPieceDrop={onDrop}
                autoPromoteToQueen={true}
                boardOrientation={boardOrientation}
            />
            <MoveList />
        </div>
    );
};
