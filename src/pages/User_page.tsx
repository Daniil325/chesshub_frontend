import React from "react";
import {Header} from '@/components/Header';
import {Sidebar} from '@/components/SidebarUser_page/Sidebar';
import {AuthorInfo} from "@/components/AuthorInfo/AuthorInfo";
import {Tabs} from "@/components/Tabs/Tabs";
import {ProfileInfo} from "@/components/ProfileInfo/ProfileInfo";


const User_page: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <main className='main'>
          <section className='content'>
                  <AuthorInfo />
              

              
              
                  <Tabs />
              

              
              
                  <ProfileInfo />
              
          </section>
          <Sidebar/>
      </main>
    </div>
  );
};

export default User_page;