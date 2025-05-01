import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import CategoriesPage from './pages/CategoriesPage';
import ArticlesPage from './pages/ArticlesPage';
import TagsPage from './pages/TagsPage';
import UsersPage from './pages/UsersPage';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/tags" element={<TagsPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="*" element={<CategoriesPage />} /> {/* По умолчанию */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;