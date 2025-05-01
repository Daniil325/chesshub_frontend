import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000', // Базовый URL вашего FastAPI сервера
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

// Запросы для пользователей
export const getUsers = async () => {
  try {
    const response = await apiClient.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const addUser = async (user: any) => {
  try {
    const response = await apiClient.post('/users', user);
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};

export const updateUser = async (id: number, updatedUser: any) => {
  try {
    const response = await apiClient.put(`/users/${id}`, updatedUser);
    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};

export const deleteUser = async (id: number) => {
  try {
    await apiClient.delete(`/users/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
};

// Запросы для категорий
export const getCategories = async () => {
  try {
    const response = await apiClient.get('/categories');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

export const addCategory = async (category: any) => {
  try {
    const response = await apiClient.post('/categories', category);
    return response.data;
  } catch (error) {
    console.error('Error adding category:', error);
    throw error;
  }
};

export const updateCategory = async (id: number, updatedCategory: any) => {
  try {
    const response = await apiClient.put(`/categories/${id}`, updatedCategory);
    return response.data;
  } catch (error) {
    console.error('Error updating category:', error);
    throw error;
  }
};

export const deleteCategory = async (id: number) => {
  try {
    await apiClient.delete(`/categories/${id}`);
  } catch (error) {
    console.error('Error deleting category:', error);
    throw error;
  }
};

// Запросы для тегов
export const getTags = async () => {
  try {
    const response = await apiClient.get('/tags');
    return response.data;
  } catch (error) {
    console.error('Error fetching tags:', error);
    throw error;
  }
};

export const addTag = async (tag: any) => {
  try {
    const response = await apiClient.post('/tags', tag);
    return response.data;
  } catch (error) {
    console.error('Error adding tag:', error);
    throw error;
  }
};

export const updateTag = async (id: number, updatedTag: any) => {
  try {
    const response = await apiClient.put(`/tags/${id}`, updatedTag);
    return response.data;
  } catch (error) {
    console.error('Error updating tag:', error);
    throw error;
  }
};

export const deleteTag = async (id: number) => {
  try {
    await apiClient.delete(`/tags/${id}`);
  } catch (error) {
    console.error('Error deleting tag:', error);
    throw error;
  }
};