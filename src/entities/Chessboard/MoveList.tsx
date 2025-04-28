import { useContext } from "react";
import { ChessboardContext } from "./Context";
import styles from "./styles.module.css";

export const MoveList = () => {
    const {
        moveLog,
        goToFirstMove,
        goToLastMove,
        moveBackClick,
        moveNextClick,
        boardOrientation,
        setBoardOrientation,
        goToMove,
        changeHidden
    } = useContext(ChessboardContext);

    const onChangeOrientationClick = () => {
        setBoardOrientation(boardOrientation === "white" ? "black" : "white");
    };

    const onMoveClick = (index: number) => {
        goToMove(index);
    };

    return (
        <div className={styles.move_list}>
            <p>Меню</p>
            <div className={styles.menu_container}>
                <p onClick={onChangeOrientationClick}>Перевернуть доску</p>
                <p onClick={changeHidden}>Редактор доски</p>
            </div>

            <div>
                <div className={styles.moves}>
                    {moveLog.length > 0 ? (
                        moveLog.map((move, index) => (
                            <div
                                key={index}
                                onClick={() => onMoveClick(index)}
                            >
                                {index % 2 == 0
                                    ? `${Math.floor(index / 2) + 1}. ${move}`
                                    : `${move}`}
                            </div>
                        ))
                    ) : (
                        <div
                            style={{
                                textAlign: "center",
                                color: "#666",
                                fontStyle: "italic",
                            }}
                        >
                            No moves yet
                        </div>
                    )}
                </div>
                <div className={styles.moves_navigation}>
                    <p onClick={moveBackClick}>{"<<"}</p>
                    <p onClick={moveNextClick}>{">>"}</p>
                </div>
            </div>
        </div>
    );
};
