import { MainPage } from "@/pages/Main";
import Post from "@/pages/Post";
import UserPage from "@/pages/UserPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"><MainPage /></Route>
                <Route path="/post"><Post /></Route>
                <Route path="/user_profile"><UserPage /></Route>
                <Route path="/user_posts"><UserPage /></Route>
            </Routes>
        </BrowserRouter>
    )
}