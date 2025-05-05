import React, { createContext, useState, useContext } from "react";

// Определяем типы для локализации
type Language = "en" | "ru";

interface LocalizationContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

// Создаем контекст
const LocalizationContext = createContext<LocalizationContextType | undefined>(undefined);

// Провайдер контекста
export const LocalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("en");

    return (
        <LocalizationContext.Provider value={{ language, setLanguage }}>
            {children}
        </LocalizationContext.Provider>
    );
};

// Хук для использования контекста
export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error("useLocalization must be used within a LocalizationProvider");
    }
    return context;
};