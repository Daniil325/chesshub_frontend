import React from "react";
import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';
import AuthorInfo from "./components/AuthorInfo/AuthorInfo";
import Tabs from "./components/Tabs/Tabs_subscribers";
import Subscribers from "./components/Subscribers/Subscribers";
import { LocalizationProvider } from "./components/LocalizationContext";
import LanguageSwitcher from "./components/LanguageSwitcher";


const App: React.FC = () => {
  return (
    <LocalizationProvider>
    <div className="app">
    <LanguageSwitcher />
      <Header/>
      <main className='main'>
          <section className='content'>
                  <AuthorInfo />
              

              
              
                  <Tabs />
              

              
              
                  <Subscribers />
              
          </section>
          <Sidebar/>
      </main>
    </div>
    </LocalizationProvider>
  );
};

export default App;