import { useContext, useEffect, useState } from "react";
import { ChessboardContext } from "./Context";
import styles from "./styles.module.css";

export const MoveList = ({
    handleChange,
    defaultMoves = [],
    readOnly = false,
}) => {
    const {
        moveLog,
        currentIndex,
        moveBackClick,
        moveNextClick,
        boardOrientation,
        setBoardOrientation,
        goToMove,
        setMoveLog,
        setIsHidden,
        isHidden,
        setCurrentIndex,
    } = useContext(ChessboardContext);

    useEffect(() => {
        const a = Object.values(defaultMoves);
        setMoveLog(a);
    }, []);

    console.log(moveLog);

    useEffect(() => {
        handleChange(moveLog);
    }, [moveLog]);

    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    const onChangeOrientationClick = () => {
        setBoardOrientation(boardOrientation === "white" ? "black" : "white");
    };

    const onToolOpenClick = () => {
        setMoveLog([]);
        handleChange([]);
        setIsHidden(!isHidden);
        setCurrentIndex(0);
    };

    const onMoveClick = (index: number) => {
        goToMove(index);
    };

    const changeMenuVisible = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className={styles.move_menu_container}>
            <div className={styles.menu_container}>
                <img
                    className={styles.menu_icon}
                    src="/public/menu.png"
                    alt=""
                    onClick={changeMenuVisible}
                />
                <div
                    className={styles.menu_items}
                    style={{ display: menuVisible ? "flex" : "none" }}
                >
                    <p
                        className={styles.menu_item}
                        onClick={onChangeOrientationClick}
                    >
                        <img
                            className={styles.menu_item_icon}
                            src="/public/exchange.png"
                            alt=""
                        />{" "}
                        Перевернуть доску
                    </p>
                    {readOnly ? <></> : (
                        <p
                            className={styles.menu_item}
                            onClick={onToolOpenClick}
                        >
                            <img
                                className={styles.menu_item_icon}
                                src="/public/pen.png"
                                alt=""
                            />{" "}
                            Редактор доски
                        </p>
                    ) }
                </div>
            </div>

            <div className={styles.moves_container}>
                {moveLog.length > 0 ? (
                    moveLog.map((move, index) => (
                        <div className={styles.a}>
                            {index % 2 == 0 ? (
                                <>
                                    <p className={styles.move_num}>
                                        {Math.floor(index / 2) + 1}.
                                    </p>
                                    <p
                                        className={
                                            index + 1 == currentIndex
                                                ? `${styles.grid_move} ${styles.active}`
                                                : styles.grid_move
                                        }
                                        key={index}
                                        onClick={() => onMoveClick(index)}
                                    >
                                        {move}
                                    </p>
                                </>
                            ) : (
                                <p
                                    className={
                                        index + 1 == currentIndex
                                            ? `${styles.grid_move} ${styles.active}`
                                            : styles.grid_move
                                    }
                                    key={index}
                                    onClick={() => onMoveClick(index)}
                                >
                                    {move}
                                </p>
                            )}
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
    );
};
