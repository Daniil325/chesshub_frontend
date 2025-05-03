import { Header } from "@/components/organisms/Header";
import { authUser, userApi } from "@/store/user";
import { Button } from "primereact/button";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Login = () => {
    const dispatch = useDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [addProduct, { isError }] = userApi.useLoginUserMutation();
    

    const navigate = useNavigate();

    const handleRegister = async (data) => {
        addProduct({
            username: data["username"],
            password: data["password"],
        });
        dispatch(authUser({username: data["username"], role: "USER"}));
        navigate("/");
    };

    return (
            <>
                <Header />
                <Card className="flex w-3 align-items-center justify-content-center mt-3 m-auto bg-white-alpha-10" title="Вход">
                    <form className="flex flex-column gap-3" onSubmit={handleSubmit(handleRegister)}>
                        <InputText
                            {...register("username", { required: true })}
                            placeholder="Username"
                        />
                        {errors.username && <p>This field is required</p>}
                        
    
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
}