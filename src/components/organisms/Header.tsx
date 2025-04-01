import React from 'react';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className='header-top'>
                <h1>ChessHub</h1>
                <img src="/img/ава_конь.svg" alt="###" />
            </div>
            <nav>
                <ul>
                    <li><a href="#">Выйти</a></li>
                    <li><a href="#">Выйти</a></li>
                    <li><a href="#">Выйти</a></li>
                    <li><a href="#">Выйти</a></li>
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