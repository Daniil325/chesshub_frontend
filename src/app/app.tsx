import { LocalizationProvider } from "@/LocalizationContext";
import LanguageSwitcher from "@/components/organisms/LanguageSwitcher/LanguageSwitcher";
import { ThemeProvider } from "@/components/organisms/ThemeContext";
import CategoryPage from "@/components/organisms/admin/src/pages/CategoriesPage";
import TagsPage from "@/components/organisms/admin/src/pages/TagsPage";
import UsersPage from "@/components/organisms/admin/src/pages/UsersPage";
import { ArticleCreate } from "@/pages/ArticleCreate/ArticleCreate";
import { ArticleDetail } from "@/pages/ArticleDetail/ArticleDetail";
import { CreateCourse } from "@/pages/CourseCreate/CourseCreate";
import { CoursesList } from "@/pages/Courses/CoursesList";
import { EditProfile } from "@/pages/EditProfile/EditProfile";
import { Login } from "@/pages/Login/Login";
import { MainPage } from "@/pages/Main";
import Post from "@/pages/Post";
import UserPage from "@/pages/ProfilePage/UserPage";
import { Register } from "@/pages/Register/Register";
import { store } from "@/store/store";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/saga-blue/theme.css";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

export function App() {
    return (
        <Provider store={store}>
            <LocalizationProvider>
                <ThemeProvider>
                    <LanguageSwitcher />
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<MainPage />}></Route>
                            <Route
                                path="/article/create/"
                                element={<ArticleCreate />}
                            ></Route>
                            <Route
                                path="/article/:id"
                                element={<ArticleDetail />}
                            ></Route>
                            <Route path="/post" element={<Post />}></Route>
                            <Route
                                path="/profile"
                                element={<UserPage />}
                            ></Route>
                            <Route
                                path="/user_posts"
                                element={<UserPage />}
                            ></Route>
                            <Route
                                path="/register"
                                element={<Register />}
                            ></Route>
                            <Route
                                path="/edit_profile"
                                element={<EditProfile />}
                            ></Route>
                            <Route path="/login" element={<Login />}></Route>
                            <Route
                                path="/course"
                                element={<CoursesList />}
                            ></Route>
                            <Route
                                path="/create_course"
                                element={<CreateCourse />}
                            ></Route>

                            <Route
                                path="/admin/categories"
                                element={<CategoryPage />}
                            />
                            <Route path="/admin/tags" element={<TagsPage />} />
                            <Route
                                path="/admin/users"
                                element={<UsersPage />}
                            />
                            <Route path="*" element={<CategoryPage />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </LocalizationProvider>
        </Provider>
    );
}
