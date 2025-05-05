import AuthorInfo from "@/components/organisms/AuthorInfo/AuthorInfo";
import { Header } from "@/components/organisms/Header";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    Tabs as AriaTabs,
    TabList,
    Tab,
    TabPanel,
} from "react-aria-components";
import { ProfileInfo } from "@/components/organisms/ProfileInfo/ProfileInfo";
import { userApi } from "@/store/user";
import Article from "@/components/organisms/Article/Article";
import { CourseListItem } from "@/components/organisms/CourseListItem/CourseListItem";
import { translations } from "@/translations";
import { useLocalization } from "@/LocalizationContext";

const UserPage: React.FC = () => {
    const { username, role } = useSelector((state) => {
        return {
            username: state.loginUser.username,
            role: state.loginUser.role,
        };
    });

    const { data, isLoading } = userApi.useGetProfileQuery(username);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    const { language } = useLocalization();
    const t = translations[language];

    return (
        <div className="app">
            <Header />
            <main className="main">
                <section className="content">
                    <AuthorInfo username={username} />
                    <AriaTabs>
                        <TabList
                            className="tabs"
                            aria-label="History of Ancient Rome"
                        >
                            <Tab className="tab" id="FoR">
                                {t.tabs.profile}
                            </Tab>
                            <Tab className="tab" id="MaR">
                                {t.tabs.articles}
                            </Tab>
                            <Tab className="tab" id="Course">
                                {t.tabs.courses}
                            </Tab>
                        </TabList>

                        <TabPanel id="FoR">
                            <ProfileInfo
                                email={data["email"]}
                                name={data["name"]}
                                surname={data["surname"]}
                                user_info={data["user_info"]}
                            />
                        </TabPanel>
                        <TabPanel id="MaR">
                            {data["articles"].map((el) => {
                                return (
                                    <Article
                                        id={el["id"]}
                                        img={el["preview"]}
                                        title={el["title"]}
                                        pubDate={el["pub_date"]}
                                        username={username}
                                    />
                                );
                            })}
                        </TabPanel>
                        <TabPanel id="Course">
                            {data["courses"].map((el) => {
                                return (
                                    <CourseListItem
                                        id={el["id"]}
                                        name={el["name"]}
                                        description={
                                            el["description"]["description"]
                                        }
                                        price={el["price"]}
                                        author={username}
                                    />
                                );
                            })}
                        </TabPanel>
                        <TabPanel id="Emp">Alea jacta est.</TabPanel>
                    </AriaTabs>
                </section>
                <Sidebar />
            </main>
        </div>
    );
};

export default UserPage;
