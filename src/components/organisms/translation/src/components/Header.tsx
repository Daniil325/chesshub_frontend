import React from 'react';
import { useLocalization } from "./LocalizationContext";
import { translations } from "./translations";


const Header: React.FC = () => {
    const { language } = useLocalization();
    const t = translations[language];
    return (
        <header className='header'>
            <div className='header-top'>
                <h1>ChessHub</h1>
                <img src="/img/ава_конь.svg" alt="###" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">{t.header.tab}</a></li>
                    <li><a href="#">{t.header.tab}</a></li>
                    <li><a href="#">{t.header.tab}</a></li>
                    <li><a href="#">{t.header.tab}</a></li>
                </ul>
                <div className='icons'>
                    <img src="/img/пен.svg" alt="###" />
                    <img src="/img/лупа.svg" alt="###" />
                </div>
            </nav>
        </header>
    );
};

export default Header;