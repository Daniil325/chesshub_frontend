import Article from "@/components/organisms/Article/Article";
import AuthorInfo from "@/components/organisms/AuthorInfo/AuthorInfo";
import { Header } from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import Tabs from "@/components/organisms/Tabs/Tabs";
import React from "react";

const UserPosts: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <section className="content">
                    <AuthorInfo />
                    <Tabs />
                    <Article />
                    <Article />
                </section>
                <Sidebar />
            </main>
        </div>
    );
};

export default UserPosts;
