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
    } = useContext(ChessboardContext);

    return (
        <div className="move_list">
            <div className={styles.moves}>
                {moveLog.length > 0 ? (
                    moveLog.map((move, index) => (
                        <div key={index}>
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
    );
};
