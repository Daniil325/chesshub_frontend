import { Header } from "@/components/organisms/Header";
import { authUser, userApi } from "@/store/user";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Card } from "primereact/card";
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";

function isValidEmail(email: string) {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
}

export const Register = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [addProduct, { isError }] = userApi.useRegisterUserMutation();

    const navigate = useNavigate();

    const handleRegister = async (data) => {
        addProduct({
            name: data["name"],
            surname: data["surname"],
            username: data["username"],
            password: data["password"],
            email: data["email"],
        });
        dispatch(authUser({username: data["username"], role: "USER"}));
        navigate("/");
    };

    return (
        <>
            <Header />
            <Card className="flex w-3 align-items-center justify-content-center mt-3 m-auto bg-white-alpha-10" title="Регистрация">
                <form className="flex flex-column gap-3" onSubmit={handleSubmit(handleRegister)}>
                    <InputText
                        {...register("username", { required: true })}
                        placeholder="Username"
                    />
                    {errors.username && <p>This field is required</p>}
                    <InputText
                        {...register("name", { required: true })}
                        placeholder="First name"
                    />
                    {errors.name && <p>This field is required</p>}
                    <InputText
                        {...register("surname", { required: true })}
                        placeholder="First name"
                    />
                    {errors.surname && <p>This field is required</p>}
                    <InputText
                        {...register("email", {
                            required: true,
                            validate: (value) =>
                                isValidEmail(value) || "Invalid email format", // Добавляем кастомную валидацию
                        })}
                        placeholder="email"
                    />
                    {errors.email && <p>This field is required</p>}

                    <InputText
                        {...register("password", {
                            required: true,
                        })}
                        placeholder="Password"
                    />
                    {errors.password && <p>This field is required</p>}

                    <Button label="Зарегистрироваться" severity="success" />
                </form>
            </Card>
        </>
    );
};
