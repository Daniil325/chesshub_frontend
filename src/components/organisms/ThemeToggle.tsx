import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useTheme();

    
    const lightIcon = "/public/img/светлая_тема.svg"; 
    const darkIcon = "/public/img/тёмная_тема.svg"; 

    return (
        <button 
            onClick={toggleTheme} 
            style={{ 
                padding: "5px",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                background: "none",
                border: "none",
                cursor: "pointer",
            }}
            aria-label={theme === "dark" ? "Переключить на светлую тему" : "Переключить на тёмную тему"}
        >
            
            <img 
                src={theme === "dark" ? lightIcon : darkIcon}
                alt="" 
                width={60} 
                height={60}
                
            />
            
           
        </button>
    );
};

export default ThemeToggle;