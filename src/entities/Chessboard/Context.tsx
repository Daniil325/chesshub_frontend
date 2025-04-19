import { Chess } from "chess.js";
import { createContext, ReactNode, useCallback, useState } from "react";

type ContextProps = {
    children: ReactNode;
};

type ChessboardContextType = {
    game: Chess;
    moveLog: string[];
};

export const ChessboardContext = createContext<ChessboardContextType>({
    game: new Chess(),
    moveLog: [],
});

export const ChessboardProvider: React.FC<ContextProps> = ({ children }) => {
    const [game, setGame] = useState(new Chess());
    const [moveLog, setMoveLog] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMove, setCurrentMove] = useState<string>();

    // currentMove, currentPosition

    const onDrop = useCallback(
        (sourceSquare, targetSquare) => {
            try {
                const move = game.move({
                    from: sourceSquare,
                    to: targetSquare,
                    promotion: "q",
                });

                if (move && currentIndex == moveLog.length) {
                    setGame(new Chess(game.fen()));
                    const moveNotation = move.san;
                    setCurrentMove(moveNotation);
                    setMoveLog((prev) => [...prev, moveNotation]);
                    setCurrentIndex(moveLog.length + 1);

                    //changeData((prev) => [...prev, moveNotation]);
                    return true;
                }
            } catch (error) {
                return false;
            }
            return false;
        },
        [game, currentIndex, moveLog]
    );

    const pgnFormat = (pgnMoves: string[]) => {
        let a: string = "";
        let moveNum = 1;
        for (let i: number = 0; i < pgnMoves.length; i++) {
            if (i % 2 == 0) {
                a += `${moveNum}. ${pgnMoves[i]} `
                moveNum += 1
            } else {
                a += `${pgnMoves[i]} `
            }
        }
        return a
    } 

    const goToFirstMove = () => {};

    const goToLastMove = () => {};

    const moveBackClick = () => {
        const a = currentIndex - 1;
        setCurrentIndex(a);
        const moves = pgnFormat(moveLog.slice(0, a));
        setGame(game.loadPgn(moves).fen());
    };

    const moveNextClick = () => {
        const a = currentIndex + 1;
        setCurrentIndex(a);
        const moves = pgnFormat(moveLog.slice(0, a+1))
        setGame(game.loadPgn(moves).fen());
    };

    const value = {
        game,
        moveLog,
        currentMove,
        currentIndex,
        goToFirstMove,
        goToLastMove,
        moveBackClick,
        moveNextClick,
        onDrop,
    };

    return (
        <ChessboardContext.Provider value={value}>
            {children}
        </ChessboardContext.Provider>
    );
};
