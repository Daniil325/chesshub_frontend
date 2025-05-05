import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Table from "@editorjs/Table";
import { TitleTool } from "@/entities/Chessboard/BoardTool";
import { articleApi } from "@/store/article";
import { Header as MainHeader } from "@/components/organisms/Header";
import axios from "axios";
import { userApi } from "@/store/user";
import { useSelector } from "react-redux";
import { Button } from "primereact/button";

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
        </>
    );
};

const postImage = async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const config = {
        headers: { "content-type": "multipart/form-data" },
    };
    return axios
        .post("http://localhost:8000/image/", formData, config)
        .then((data) => data?.name);
};

const PreviewUpload = ({ setImage }) => {
    const onUploadImage = (e) => {
        setImage(e.target.files[0]["name"]);
        postImage(e.target.files[0]);
    };

    return (
        <>
            <label className="input-file">
                <i className="pi pi-upload" style={{ fontSize: "1rem", marginRight: "10px" }}></i>
                <input
                    id="uploadImage"
                    name="uploadImage"
                    className="file"
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={onUploadImage}
                />
                <span>Загрузить картирнку</span>
            </label>
        </>
    );
};

export const ArticleCreate = () => {
    const [image, setImage] = useState<string | null>(null);
    const [content, setContent] = useState();
    const [addProduct] = articleApi.useCreateArticleMutation();

    const { username } = useSelector((state) => {
        return {
            username: state.loginUser.username,
            role: state.loginUser.role,
        };
    });

    const { data } = userApi.useGetProfileQuery(username);

    const handleAddArticle = async () => {
        const title = content["blocks"][0]["data"]["text"];
        addProduct({
            title: title,
            content: { blocks: content["blocks"] },
            categoryId: "cba47825-631f-4767-b1de-590972535559",
            preview: image,
            authorId: data["id"],
        });
    };

    return (
        <>
            <MainHeader />
            <main className="main">
                <PreviewUpload setImage={setImage} />
                <EditorComponent setContent={setContent} />
                <Button onClick={handleAddArticle}>Добавить</Button>
            </main>
        </>
    );
};
