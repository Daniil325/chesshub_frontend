import AuthorInfo from "@/components/organisms/AuthorInfo/AuthorInfo";
import { Header } from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import ProfileInfo from "@/components/organisms/Subscribers/Subscribers";
import Tabs from "@/components/organisms/Tabs/Tabs";
import React from "react";

const UserPage: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <main className="main">
                <section className="content">
                    <AuthorInfo />
                    <Tabs />
                    <ProfileInfo />
                </section>
                <Sidebar />
            </main>
        </div>
    );
};

export default UserPage;
