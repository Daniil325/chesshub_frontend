import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './TagsPage.css';

// Интерфейс для тега
interface Tag {
  id: number;
  name: string;
}

const TagsPage: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]); // Инициализация как пустой массив
  const [newTagName, setNewTagName] = useState('');

  // Получение списка тегов
  useEffect(() => {
    const fetchTags = async () => {
      try {
        const response = await axios.get('http://localhost:8000/tag');
        console.log('API Response:', response.data); // Проверка данных

        // Проверяем, является ли ответ массивом
        if (Array.isArray(response.data)) {
          setTags(response.data);
        } else if (response.data && Array.isArray(response.data.data)) {
          setTags(response.data.data); // Если данные находятся в поле `data`
        } else {
          console.error('Unexpected API response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    fetchTags();
  }, []);

  // Добавление нового тега
  const handleAddTag = async () => {
    if (!newTagName.trim()) return;

    try {
      const response = await axios.post('http://localhost:8000/tag', { name: newTagName });
      setTags([...tags, response.data]); // Добавляем новый тег в список
      setNewTagName(''); // Очищаем поле ввода
    } catch (error) {
      console.error('Error adding tag:', error);
    }
  };

  // Удаление тега
  const handleDeleteTag = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8000/tag/${id}`);
      setTags(tags.filter((tag) => tag.id !== id)); // Удаляем тег из списка
    } catch (error) {
      console.error('Error deleting tag:', error);
    }
  };

  return (
    <div className="tags-page">
      <h1>Tags Management</h1>

      {/* Форма добавления тега */}
      <div className="add-tag-form">
        <input
          type="text"
          placeholder="Enter tag name"
          value={newTagName}
          onChange={(e) => setNewTagName(e.target.value)}
        />
        <button onClick={handleAddTag}>Add Tag</button>
      </div>

      {/* Список тегов */}
      <ul className="tags-list">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <li key={tag.id}>
              {tag.name}
              <button onClick={() => handleDeleteTag(tag.id)}>Delete</button>
            </li>
          ))
        ) : (
          <p>No tags available.</p>
        )}
      </ul>
    </div>
  );
};

export default TagsPage;