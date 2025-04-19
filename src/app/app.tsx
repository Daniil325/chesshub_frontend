import { useEffect, useRef } from "react";
import "./App.css";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/Table";
import { BoardTool } from "@/entities/Chessboard/BoardTool";
import { Header as MainHeader } from "@/components/organisms/Header";

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
            <MainHeader />
            <div className="main">
                 <h2>Создайте свою статью!</h2>
                <div className="content">
                    <EditorComponent />
                </div>
            </div>
        </>
    );
}
