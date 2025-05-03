import AuthorInfo from "@/components/organisms/AuthorInfo/AuthorInfo";
import { Header } from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import ProfileInfo from "@/components/organisms/Subscribers/Subscribers";
import Tabs from "@/components/organisms/Tabs/Tabs";
import { useLoginState } from "@/hooks/useLoginState";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UserPage: React.FC = () => {

    const { username, role } = useSelector((state) => {
        return {
            username: state.loginUser.username,
            role: state.loginUser.role,
        };
    });
    const isAuthenticated = useLoginState();
    
    return (
        <div className="app">
            <Header />
            <main className="main">
                <section className="content">
                    <AuthorInfo username={username} />
                    <Link to="/create_course">Создать курс</Link>
                    <Tabs />
                    <ProfileInfo />
                </section>
                <Sidebar />
            </main>
        </div>
    );
};

export default UserPage;
