import React from "react";
import {Sidebar} from "@/components/SidebarColorchange/Sidebar";
import {Article} from "@/components/ArticleColorchange/Article";
import {ArticlePOST} from "@/components/ArticlePOSTColorchange/ArticlePOST";
import { ThemeProvider, useTheme } from "@/components/ThemeContext";
import {Header} from "@/components/HeaderColorchange/Header";
import {CommentSection} from "@/components/CommentSectionColorchange/CommentSection";
import {AuthorInfo} from "@/components/AuthorInfoColorchange/AuthorInfo";
import {ProfileInfo} from "@/components/ProfileInfoColorchange/ProfileInfo";
import {Tabs} from "@/components/TabsColorchange/Tabs";
import {ProfileInfo1} from "@/components/SubscriptionsColorchange/Subscriptions";

import {SidebarUser_page} from "@/components/SidebarUser_pageColorchange/SidebarUser_page";
import './index.css';


const App: React.FC = () => {
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

export default App;