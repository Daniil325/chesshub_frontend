import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/Table";
import { TitleTool } from "@/entities/Chessboard/BoardTool";
import { articleApi } from "@/store/article";

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
    const [content, setContent] = useState();
    const [addProduct, { isError }] = articleApi.useCreateArticleMutation();

    const handleAddArticle = async () => {
        const title = content["blocks"][0]["data"]["text"];
        addProduct({
            title: title,
            content: {"blocks": content["blocks"]},
            categoryId: "cba47825-631f-4767-b1de-590972535559",
            preview: null,
        });
    };

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
                setContent(await editor.saver.save());
            },
            tools: {
                header: Header,
                board: TitleTool,
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
            <button onClick={handleAddArticle}>добавить</button>
        </>
    );
};

export const ArticleCreate = () => {
    return (
        <>
            <EditorComponent />
        </>
    );
};
