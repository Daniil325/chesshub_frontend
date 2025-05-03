import "./App.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import { MainPage } from "@/pages/Main";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from "@/pages/Post";
import UserPage from "@/pages/UserPage";
import { ArticleCreate } from "@/pages/ArticleCreate/ArticleCreate";
import { ArticleDetail } from "@/pages/ArticleDetail/ArticleDetail";
import { Register } from "@/pages/Register/Register";
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import { CoursesList } from "@/pages/Courses/CoursesList";


export function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage />}></Route>
                    <Route path="/article/create/" element={<ArticleCreate />}></Route>
                    <Route
                        path="/article/:id"
                        element={<ArticleDetail />}
                    ></Route>
                    <Route path="/post" element={<Post />}></Route>
                    <Route path="/user_profile" element={<UserPage />}></Route>
                    <Route path="/user_posts" element={<UserPage />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/course" element={<CoursesList />}></Route>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}
