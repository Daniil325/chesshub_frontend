import { useContext } from "react";
import { Chessboard } from "react-chessboard";
import { ChessboardContext } from "./Context";

export const Board = () => {
    const {game, onDrop} = useContext(ChessboardContext)


    return (
        <div className="div">
            <Chessboard
                position={game.fen()}
                onPieceDrop={onDrop}
                autoPromoteToQueen={true}
            />
        </div>
    );
};