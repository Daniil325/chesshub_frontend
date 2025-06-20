
import ArticlePOST from "@/components/organisms/ArticlePOST/ArticlePost";
import { CourseDetail } from "@/pages/Course/CourseDetail/CourseDetail";
import { MainPage } from "@/pages/Main";
import Post from "@/pages/Post";
import UserPage from "@/pages/ProfilePage/UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <MainPage />
                </Route>
                <Route path="/article/:id">
                    <ArticlePOST />
                </Route>
                <Route path="/post">
                    <Post />
                </Route>
                <Route path="/user_profile">
                    <UserPage />
                </Route>
                <Route path="/user_posts">
                    <UserPage />
                </Route>
                <Route path="/course_detail">
                    <CourseDetail />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
