import { courseApi } from "@/store/course";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "@/components/organisms/Header";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { authUser, userApi } from "@/store/user";
import { useNavigate } from "react-router-dom";
import { InputTextarea } from 'primereact/inputtextarea';

export const CreateCourse = () => {
    const dispatch = useDispatch();

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

    const {data} = userApi.useGetProfileQuery(username)

    const [addProduct, { isError }] = courseApi.useCreateCourseMutation();

    const navigate = useNavigate();
    
    const handleRegister = async (item) => {
        addProduct({
                name: item["name"],
                description: {"description": item["description"]},
                price: item["price"],
                preview: null,
                authorId: data["id"],
                email: item["email"],
        });
        dispatch(authUser({username: data["username"], role: "USER"}));
        navigate("/profile");
    };
    return (
        <>
            <Header/>
            <main className="main">
                <Card className="flex w-3 align-items-center justify-content-center mt-3 m-auto bg-white-alpha-10" title="Создание курса">
                    <form className="flex flex-column gap-3" onSubmit={handleSubmit(handleRegister)}>
                        <InputText
                            {...register("name", { required: true })}
                            placeholder="Название"
                        />
                        {errors.name && <p>This field is required</p>}
                        <InputText
                            {...register("price", { required: true })}
                            placeholder="Цена"
                        />
                        {errors.price && <p>This field is required</p>}
                        <InputTextarea
                            {...register("description", { required: true })}
                            placeholder="Описание"
                        />
                        {errors.description && <p>This field is required</p>}
                                    
                        <Button label="Зарегистрироваться" severity="success" />
                    </form>
                </Card>
            </main>
        </>
    )
}