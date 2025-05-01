import React, { useMemo, useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useReactTable, getCoreRowModel, getSortedRowModel, getPaginationRowModel, flexRender, ColumnDef } from '@tanstack/react-table';
import Modal from '../components/Modal';
import './UsersPage.css';

// Типы для данных пользователя
type UserRole = 'Admin' | 'Editor' | 'Viewer';
interface User {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: 'active' | 'inactive';
  lastLogin: string;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Инициализация React Hook Form
  const { register, handleSubmit, reset, formState: { errors } } = useForm<User>();

  // Получение данных с сервера
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  // Добавление нового пользователя
  const handleAddUser = async (data: User) => {
    try {
      const response = await axios.post('http://localhost:8000/api/users', data);
      setUsers([...users, response.data]);
      reset(); // Очистка формы
      setIsModalOpen(false); // Закрытие модального окна
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  // Удаление пользователя
  const handleDeleteUser = async (userId: number) => {
    try {
      await axios.delete(`http://localhost:8000/api/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Конфигурация таблицы
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      { header: 'ID', accessorKey: 'id' },
      { header: 'Name', accessorKey: 'name' },
      { header: 'Email', accessorKey: 'email' },
      { header: 'Role', accessorKey: 'role' },
      { header: 'Status', accessorKey: 'status' },
      { header: 'Last Login', accessorKey: 'lastLogin' },
      {
        header: 'Actions',
        cell: ({ row }) => (
          <button onClick={() => handleDeleteUser(row.original.id)}>Delete</button>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="users-page">
      <h1>User Management</h1>

      {/* Кнопка для открытия модального окна */}
      <button className="add-user-button" onClick={() => setIsModalOpen(true)}>
        Add New User
      </button>

      {/* Модальное окно */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Add New User</h2>
        <form onSubmit={handleSubmit(handleAddUser)} className="add-user-form">
          <div>
            <label>Name:</label>
            <input
              {...register('name', { required: 'Name is required' })}
              placeholder="Enter name"
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>
          <div>
            <label>Email:</label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Invalid email' },
              })}
              placeholder="Enter email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>
          <div>
            <label>Role:</label>
            <select {...register('role', { required: 'Role is required' })}>
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
            {errors.role && <span>{errors.role.message}</span>}
          </div>
          <div>
            <label>Status:</label>
            <select {...register('status', { required: 'Status is required' })}>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors.status && <span>{errors.status.message}</span>}
          </div>
          <button type="submit">Add User</button>
        </form>
      </Modal>

      {/* Таблица пользователей */}
      <table className="users-table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {/* Пагинация */}
      <div className="pagination-controls">
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {'< Prev'}
        </button>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {'Next >'}
        </button>
      </div>
    </div>
  );
};

export default UsersPage;