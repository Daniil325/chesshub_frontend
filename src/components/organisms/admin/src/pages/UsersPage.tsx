import React, { useMemo, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender,
    ColumnDef,
} from "@tanstack/react-table";
import Modal from "../components/Modal";
import "./UsersPage.css";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Sidebar } from "../components/Sidebar";

function isValidEmail(email: string) {
    const reg = /\S+@\S+\.\S+/;
    return reg.test(email);
}

const fetchUsers = async (setData) => {
    try {
        const response = await axios.get("http://localhost:8000/user");
        setData(response.data);
    } catch (error) {
        console.error("Error fetching users:", error);
    }
};

// Типы для данных пользователя

const UsersTable = ({ users, setUsers }) => {
    const handleDeleteUser = async (userId: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/users/${userId}`);
            setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const columns = useMemo<ColumnDef<User>[]>(
        () => [
            { header: "ID", accessorKey: "id" },
            { header: "Name", accessorKey: "name" },
            { header: "Email", accessorKey: "email" },
            { header: "Role", accessorKey: "role" },
            {
                header: "Actions",
                cell: ({ row }) => (
                    <button onClick={() => handleDeleteUser(row.original.id)}>
                        Delete
                    </button>
                ),
            },
        ],
        []
    );

    const table = useReactTable({
        data: users["items"],
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <>
            <table className="users-table">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th key={header.id}>
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Пагинация */}
            <div className="pagination-controls">
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    {"< Prev"}
                </button>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    {"Next >"}
                </button>
            </div>
        </>
    );
};

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Инициализация React Hook Form
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // Получение данных с сервера
    useEffect(() => {
        fetchUsers(setUsers);
    }, []);

    // Добавление нового пользователя
    const handleAddUser = async (data) => {
        console.log(data);
        try {
            const response = await axios.post(
                "http://localhost:8000/user/register",
                data
            );
            fetchUsers(setUsers);
            reset(); // Очистка формы
            setIsModalOpen(false); // Закрытие модального окна
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    if (users.length != 0) {
        return (
            <div className="app">
                <Sidebar />
                <div className="users-page">
                    <h1>User Management</h1>

                    {/* Кнопка для открытия модального окна */}
                    <button
                        className="add-user-button"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Add New User
                    </button>

                    {/* Модальное окно */}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    >
                        <h2>Add New User</h2>
                        <Card
                            className="flex align-items-center justify-content-center mt-3 m-auto bg-white-alpha-10"
                            title="Регистрация"
                        >
                            <form
                                className="flex flex-column gap-3"
                                onSubmit={handleSubmit(handleAddUser)}
                            >
                                <InputText
                                    {...register("username", {
                                        required: true,
                                    })}
                                    placeholder="Username"
                                />
                                {errors.username && (
                                    <p>This field is required</p>
                                )}
                                <InputText
                                    {...register("name", { required: true })}
                                    placeholder="First name"
                                />
                                {errors.name && <p>This field is required</p>}
                                <InputText
                                    {...register("surname", { required: true })}
                                    placeholder="First name"
                                />
                                {errors.surname && (
                                    <p>This field is required</p>
                                )}
                                <InputText
                                    {...register("email", {
                                        required: true,
                                        validate: (value) =>
                                            isValidEmail(value) ||
                                            "Invalid email format", // Добавляем кастомную валидацию
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
                                {errors.password && (
                                    <p>This field is required</p>
                                )}

                                <Button
                                    label="Добавить пользоателя"
                                    severity="success"
                                />
                            </form>
                        </Card>
                    </Modal>

                    <UsersTable users={users} setUsers={setUsers} />
                </div>
            </div>
        );
    }
};

export default UsersPage;
