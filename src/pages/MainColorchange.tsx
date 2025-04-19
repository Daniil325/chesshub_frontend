import React from "react";

import './index.css';
import { ThemeProvider, useTheme } from "@/components/organisms/ThemeContext";
import { Header } from "@/components/organisms/Header";
import AuthorInfo from "@/components/organisms/AuthorInfo/AuthorInfo";
import Tabs from "@/components/organisms/Tabs/Tabs";
import ProfileInfo1 from "@/components/organisms/Subscriptions/Subscriptions";
import ProfileInfo from "@/components/organisms/Subscribers/Subscribers";
import ArticlePOST from "@/components/organisms/ArticlePost/ArticlePost";
import CommentSection from "@/components/organisms/CommentSection/CommentSection";
import Article from "@/components/organisms/Article/Article";
import SidebarUser_page from "@/components/organisms/SidebarUserPage/SidebarUser_page";


const AApp: React.FC = () => {
    return (
        <ThemeProvider>
            <ThemedApp />
        </ThemeProvider>
    );
};

const ThemedApp: React.FC = () => {
    const { theme } = useTheme();
    
    return (
        <div className={`App ${theme}`}>
        
            <Header />
            <div className="main">
                <div className="content">
                    <AuthorInfo/>
                    <Tabs/>
                    <ProfileInfo1/>
                    <ProfileInfo/>
                    <ArticlePOST />
                    <CommentSection/>
                    <Article />
                </div>
                
                <SidebarUser_page />
                
            </div>
            
        </div>
    );
};

export default AApp;