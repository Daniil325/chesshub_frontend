import { Chess } from "chess.js";
import { useCallback, useEffect, useRef, useState } from "react";
import { Chessboard } from "react-chessboard";
import "./App.css";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/Table";
import ReactDOM from "react-dom/client";
import { Header as MainHeader } from "../components/organisms/Header";
import { Article } from "../components/organisms/Article";
import { Sidebar } from "../components/organisms/Sidebar";
import { MainPage } from "@/pages/Main";

const DEFAULT_INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
        {
            type: "header",
            data: {
                text: "This is my awesome editor!",
                level: 1,
            },
        },
    ],
};

export const Board = (changeData) => {
    const [game, setGame] = useState(new Chess());
    const [moveLog, setMoveLog] = useState([]);

    const moveBack = () => {
        const currentMovies = moveLog.slice(0, -1);
        setMoveLog(moveLog.slice(0, -1));
        console.log(moveLog);

        game.fen();
    };

    const onDrop = useCallback(
        (sourceSquare, targetSquare) => {
            try {
                const move = game.move({
                    from: sourceSquare,
                    to: targetSquare,
                    promotion: "q",
                });

                if (move) {
                    setGame(new Chess(game.fen()));
                    const moveNotation = move.san;
                    setMoveLog((prev) => [...prev, moveNotation]);
                    changeData((prev) => [...prev, moveNotation]);
                    return true;
                }
            } catch (error) {
                return false;
            }
            return false;
        },
        [game]
    );

    return (
        <div className="board_container">
            <Chessboard
                position={game.fen()}
                onPieceDrop={onDrop}
                autoPromoteToQueen={true}
            />
            <div className="move_list">
                <div>
                    {moveLog.length > 0 ? (
                        moveLog.map((move, index) => (
                            <div key={index}>{`${
                                Math.floor(index / 2) + 1
                            }. ${move}`}</div>
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

                    <p onClick={moveBack}>{"<<"}</p>
                    <p>{">>"}</p>
                </div>
            </div>
        </div>
    );
};

class BoardTool {
    static get toolbox() {
        return {
            title: "Image",
            icon: '<svg width="17" height="15" viewBox="0 0 336 276" xmlns="http://www.w3.org/2000/svg"><path d="M291 150V79c0-19-15-34-34-34H79c-19 0-34 15-34 34v42l67-44 81 72 56-29 42 30zm0 52l-43-30-56 30-81-67-66 39v23c0 19 15 34 34 34h178c17 0 31-13 34-29zM79 0h178c44 0 79 35 79 79v118c0 44-35 79-79 79H79c-44 0-79-35-79-79V79C0 35 35 0 79 0z"/></svg>',
        };
    }

    constructor() {
        this.nodes = {
            holder: null,
        };

        this.data = [];
    }

    render() {
        const rootNode = document.createElement("div");
        this.nodes.holder = rootNode;
        const root = ReactDOM.createRoot(rootNode);

        const onDataChange = (newData: object[]) => {
            this.data = {
                ...newData,
            };
        };

        root.render(<Board />);

        return this.nodes.holder;
    }

    save(blockContent) {
        return {
            moves: this.data,
        };
    }
}

const EditorComponent = () => {
    const ejInstance = useRef(null);

    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: DEFAULT_INITIAL_DATA,
            onChange: async () => {
                let content = await editor.saver.save();

                console.log(content);
            },
            tools: {
                header: Header,
                board: BoardTool,
                list: List,
                table: Table,
            },
        });
    };

    // This will run only once
    useEffect(() => {
        if (ejInstance.current === null) {
            initEditor();
        }

        return () => {
            ejInstance?.current?.destroy();
            ejInstance.current = null;
        };
    }, []);

    return (
        <>
            <div id="editorjs"></div>
        </>
    );
};

export function App() {
    return (
        <>
            <MainPage />
        </>
    );
}
