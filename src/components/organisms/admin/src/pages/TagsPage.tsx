import React, { useMemo, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
    useReactTable,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender,
} from "@tanstack/react-table";
import Modal from "../components/Modal";
import "./UsersPage.css";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Sidebar } from "../components/Sidebar";


const fetchData = async (setData) => {
  try {
      const response = await axios.get("http://localhost:8000/tag");
      setData(response.data);
  } catch (error) {
      console.error("Error fetching users:", error);
  }
};


// Типы для данных пользователя

const CategoryTable = ({ categories, setCategories }) => {
    const handleDeleteUser = async (userId: number) => {
        try {
            await axios.delete(`http://localhost:8000/tag/${userId}`);
            fetchData(setCategories);
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const columns = useMemo(
        () => [
            { header: "ID", accessorKey: "id" },
            { header: "Name", accessorKey: "name" },
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
        data: categories["items"],
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

const TagsPage: React.FC = () => {
    const [categories, setCategories] = useState([]);
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
        fetchData(setCategories);
    }, []);

    // Добавление нового пользователя
    const handleAddUser = async (data) => {
        console.log(data);
        try {
            const response = await axios.post(
                "http://localhost:8000/tag",
                data
            );
            fetchData(setCategories);
            reset(); // Очистка формы
            setIsModalOpen(false); // Закрытие модального окна
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    if (categories.length != 0) {
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
                        Add Category
                    </button>

                    {/* Модальное окно */}
                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                    >
                        <h2>Add Category</h2>
                        <Card
                            className="flex align-items-center justify-content-center mt-3 m-auto bg-white-alpha-10"
                        >
                            <form
                                className="flex flex-column gap-3"
                                onSubmit={handleSubmit(handleAddUser)}
                            >
                                
                                <InputText
                                    {...register("name", { required: true })}
                                    placeholder="First name"
                                />
                                {errors.name && <p>This field is required</p>}
                               
                                <Button
                                    label="Добавить категорию"
                                    severity="success"
                                />
                            </form>
                        </Card>
                    </Modal>

                    <CategoryTable categories={categories} setCategories={setCategories} />
                </div>
            </div>
        );
    }
};

export default TagsPage;
