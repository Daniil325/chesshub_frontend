import { courseApi } from "@/store/course";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "@/components/organisms/Header";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { authUser, userApi } from "@/store/user";
import { useNavigate } from "react-router-dom";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import List from "@editorjs/list";
import { PreviewUpload } from "@/components/molecules/PreviewUpload/PreviewUpload";
import styles from "./style.module.css";

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

export const CreateCourse = () => {
    const [image, setImage] = useState<string | null>(null);
    const dispatch = useDispatch();
    const [content, setContent] = useState({})

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const { username, role } = useSelector((state) => {
        return {
            username: state.loginUser.username,
            role: state.loginUser.role,
        };
    });

    const { data } = userApi.useGetProfileQuery(username);

    const [addProduct, { isError }] = courseApi.useCreateCourseMutation();

    const navigate = useNavigate();

    const handleRegister = async (item) => {
        addProduct({
            name: item["name"],
            subtitle: item["description"],
            description: {blocks: content["blocks"]},
            price: item["price"],
            preview: image,
            authorId: data["id"],
        });
        dispatch(authUser({ username: data["username"], role: "USER" }));
        navigate("/profile");
    };
    return (
        <>
            <Header />
            <main className="main">
                <h2 className={styles.title}>Создание курса</h2>
                <form
                    className="flex flex-column gap-3"
                    onSubmit={handleSubmit(handleRegister)}
                >
                    <InputText
                        {...register("name", { required: true })}
                        placeholder="Название"
                    />
                    {errors.name && <p>This field is required</p>}
                    <PreviewUpload setImage={setImage} />
                    <InputText
                        {...register("price", { required: true })}
                        placeholder="Цена"
                    />
                    {errors.price && <p>This field is required</p>}
                    <InputTextarea
                        {...register("description", { required: true })}
                        placeholder="Краткое описание"
                    />
                    {errors.description && <p>This field is required</p>}
                    <h3>Контент:</h3>
                    <EditorComponent setContent={setContent} />
                    <Button label="Добавить курс" severity="success" />
                </form>
            </main>
        </>
    );
};
