import { Header as MainHeader } from "@/components/organisms/Header";
import { userApi } from "@/store/user";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { useSelector } from "react-redux";
import { Password } from "primereact/password";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { useForm } from "react-hook-form";

const DEFAULT_INITIAL_DATA = {
    time: new Date().getTime(),
    blocks: [
        {
            type: "header",
            data: {
                text: "Мой профиль, пока тут пусто(((",
                level: 1,
            },
        },
    ],
};

const ProfileEditorComponent = ({ userInfo, setUserInfo }) => {
    const ejInstance = useRef(null);
    console.log(userInfo)

    const initEditor = () => {
        const editor = new EditorJS({
            holder: "editorjs",
            onReady: () => {
                ejInstance.current = editor;
            },
            autofocus: true,
            data: userInfo ? userInfo : DEFAULT_INITIAL_DATA,
            onChange: async () => {
                setUserInfo(await editor.saver.save());
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

export const EditProfile = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { username, role } = useSelector((state) => {
        return {
            username: state.loginUser.username,
            role: state.loginUser.role,
        };
    });

    const { data, isLoading } = userApi.useGetProfileQuery(username);
    const [userInfo, setUserInfo] = useState(data ? data["user_info"] : "");
    const [updateProfile] = userApi.useUpdateProfileMutation();

    const handleUpdate = async (userData) => {
        updateProfile({
            ...userData,
            user_info: userInfo,
            username: userData["username"]
        });
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <MainHeader />

            <main className="main">
                <h2>Редактирование профиля</h2>
                <form
                    className="flex flex-column gap-3"
                    onSubmit={handleSubmit(handleUpdate)}
                >
                    <InputText
                        className="w-2"
                        placeholder="Username"
                        {...register("username", { required: true })}
                        defaultValue={data["username"]}
                    />

                    <InputText
                        placeholder="Имя"
                        {...register("name", { required: true })}
                        defaultValue={data["name"]}
                    />
                    <InputText
                        placeholder="Фамилия"
                        {...register("surname", { required: true })}
                        defaultValue={data["surname"]}
                    />
                    <InputText
                        placeholder="email"
                        {...register("email", { required: true })}
                        defaultValue={data["email"]}
                    />

                    <InputText
                        className="w-2"
                        placeholder="Password"
                        {...register("password", { required: true })}
                    />

                    <h3>Информация профиля:</h3>
                    <ProfileEditorComponent userInfo={userInfo} setUserInfo={setUserInfo} />

                    <Button label="Зарегистрироваться" severity="success" />
                </form>
            </main>
        </>
    );
};
