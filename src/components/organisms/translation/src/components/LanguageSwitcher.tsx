import React from "react";
import { useLocalization } from "./LocalizationContext";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLocalization();

    return (
        <div>
            <button onClick={() => setLanguage("en")} disabled={language === "en"}>
                English
            </button>
            <button onClick={() => setLanguage("ru")} disabled={language === "ru"}>
                Русский
            </button>
        </div>
    );
};

export default LanguageSwitcher;