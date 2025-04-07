import React from "react";
import {Header} from '@/components/Header';
import {Sidebar} from '@/components/Sidebar/Sidebar';
import {AuthorInfo} from "@/components/AuthorInfo/AuthorInfo";
import {Tabs} from "@/components/Tabs/Tabs";
import {Article} from '@/components/Article/Article';

const User_posts: React.FC = () => {
  return (
    <div className="app">
      <Header/>
      <main className='main'>
          <section className='content'>
                  <AuthorInfo />
              

              
              
                  <Tabs />
              

              
              
                  <Article />
                  <Article />
              
          </section>
          <Sidebar/>
      </main>
    </div>
  );
};

export default User_posts;