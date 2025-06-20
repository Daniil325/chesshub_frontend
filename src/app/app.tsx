import { LocalizationProvider } from "@/LocalizationContext";
import LanguageSwitcher from "@/components/organisms/LanguageSwitcher/LanguageSwitcher";
import { ThemeProvider } from "@/components/organisms/ThemeContext";
import CategoryPage from "@/components/organisms/admin/src/pages/CategoriesPage";
import TagsPage from "@/components/organisms/admin/src/pages/TagsPage";
import UsersPage from "@/components/organisms/admin/src/pages/UsersPage";
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
import { ArticleCreate } from "@/pages/Article/ArticleCreate/ArticleCreate";
import { ArticleDetail } from "@/pages/Article/ArticleDetail/ArticleDetail";
import { CoursesList } from "@/pages/Course/Courses/CoursesList";
import { CreateCourse } from "@/pages/Course/CourseCreate/CourseCreate";
import { CourseDetail } from "@/pages/Course/CourseDetail/CourseDetail";
import { LessonDetail } from "@/pages/Course/Lesson/LessonDetail/LessonDetail";
import { LessonCreate } from "@/pages/Course/Lesson/LessonCreate/LessonCreate";

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
                            <Route path="/course_detail" element={<CourseDetail />} />
                            <Route path="/lesson_detail" element={<LessonDetail />} />
                            <Route path="/lesson_create" element={<LessonCreate />} />
                            <Route path="*" element={<CategoryPage />} />
                        </Routes>
                    </BrowserRouter>
                </ThemeProvider>
            </LocalizationProvider>
        </Provider>
    );
}
