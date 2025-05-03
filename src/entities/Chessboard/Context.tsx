import { Chess } from "chess.js";
import {
    createContext,
    ReactNode,
    useCallback,
    useMemo,
    useState,
} from "react";

type ContextProps = {
    children: ReactNode;
};

type ChessboardContextType = {
    game: Chess;
    moveLog: string[];
    boardOrientation: string;
};

export const ChessboardContext = createContext<ChessboardContextType>({
    game: new Chess(),
    moveLog: [],
    boardOrientation: "white",
});

export const ChessboardProvider: React.FC<ContextProps> = ({ children }) => {
    const game = useMemo(
        () =>
            new Chess(
                "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
            ),
        []
    );
    const [fenPosition, setFenPosition] = useState(game.fen());
    const [moveLog, setMoveLog] = useState<string[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentMove, setCurrentMove] = useState<string>();
    const [boardOrientation, setBoardOrientation] = useState<"white" | "black">(
        "white"
    );
    const [isHidden, setIsHidden] = useState(true);
    const [style, setStyle] = useState<"none" | "flex">("none");

    const onDrop = useCallback(
        (sourceSquare, targetSquare) => {
            try {
                const move = game.move({
                    from: sourceSquare,
                    to: targetSquare,
                    promotion: "q",
                });

                if (move && currentIndex == moveLog.length) {
                    // setGame(new Chess(game.fen()));
                    setFenPosition(game.fen());
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
                a += `${moveNum}. ${pgnMoves[i]} `;
                moveNum += 1;
            } else {
                a += `${pgnMoves[i]} `;
            }
        }
        return a;
    };

    const goToFirstMove = () => {};

    const goToLastMove = () => {};

    const moveBackClick = () => {
        const a = currentIndex - 1;
        setCurrentIndex(a);
        const moves = pgnFormat(moveLog.slice(0, a));
        game.loadPgn(moves);
        setFenPosition(game.fen());
    };

    const moveNextClick = () => {
        const a = currentIndex + 1;
        setCurrentIndex(a);
        const moves = pgnFormat(moveLog.slice(0, a));
        game.loadPgn(moves);
        setFenPosition(game.fen());
    };

    const onClearClick = () => {
        game.clear();
        setFenPosition(game.fen());
        setMoveLog([]);
        setCurrentIndex(0);
    };

    const goToMove = (index: number) => {
        setCurrentIndex(index + 1);
        const moves = pgnFormat(moveLog.slice(0, index + 1));
        game.loadPgn(moves);
        setFenPosition(game.fen());
        // setGame(game);
    };

    const handleSparePieceDrop = (piece, targetSquare) => {
        const color = piece[0];
        const type = piece[1].toLowerCase();
        const success = game.put(
            {
                type,
                color,
            },
            targetSquare
        );
        if (success) {
            setFenPosition(game.fen());
        } else {
            alert(
                `The board already contains ${
                    color === "w" ? "WHITE" : "BLACK"
                } KING`
            );
        }
        return success;
    };
    const handlePieceDrop = (sourceSquare, targetSquare, piece) => {
        const color = piece[0];
        const type = piece[1].toLowerCase();

        // this is hack to avoid chess.js bug, which I've fixed in the latest version https://github.com/jhlywa/chess.js/pull/426
        game.remove(sourceSquare);
        game.remove(targetSquare);
        const success = game.put(
            {
                type,
                color,
            },
            targetSquare
        );
        if (success) setFenPosition(game.fen());
        return success;
    };
    const handlePieceDropOffBoard = (sourceSquare) => {
        game.remove(sourceSquare);
        setFenPosition(game.fen());
    };
    const handleFenInputChange = (e) => {
        const fen = e.target.value;
        const { valid } = game.validate_fen(fen);
        setFenPosition(fen);
        if (valid) {
            game.load(fen);
            setFenPosition(game.fen());
        }
    };

    const changeHidden = () => {
        setIsHidden(!isHidden);
    };

    const value = {
        game,
        fenPosition,
        moveLog,
        currentMove,
        currentIndex,
        boardOrientation,
        isHidden,
        style,
        goToFirstMove,
        goToLastMove,
        moveBackClick,
        moveNextClick,
        onDrop,
        setBoardOrientation,
        goToMove,
        setFenPosition,
        handleFenInputChange,
        handlePieceDrop,
        handleSparePieceDrop,
        handlePieceDropOffBoard,
        changeHidden,
        setStyle,
        setMoveLog,
        setIsHidden,
        onClearClick,
        setCurrentIndex
    };

    return (
        <ChessboardContext.Provider value={value}>
            {children}
        </ChessboardContext.Provider>
    );
};
