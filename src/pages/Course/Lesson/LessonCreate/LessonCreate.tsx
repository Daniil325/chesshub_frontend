import Header from "@editorjs/header";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import { useEffect, useRef, useState } from "react";
import { Header as MainHeader } from "@/components/organisms/Header";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { TitleTool } from "@/entities/Chessboard/BoardTool";


const DEFAULT_INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [

    ],
};

const EditorComponent = ({ setContent }) => {
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
                list: List,
                board: TitleTool,
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


export const LessonCreate = () => {
    const [content, setContent] = useState({})
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    return (
        <>
            <MainHeader />
            <main className="main">
                <h2>Создание урока</h2>
                <InputText
                    {...register("name", { required: true })}
                    placeholder="Название урока"
                />
                <h3>Контент:</h3>
                <EditorComponent setContent={setContent} />
                <Button label="Добавить курс" severity="success" />
            </main>
        </>
    )
}