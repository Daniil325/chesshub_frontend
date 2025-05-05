import React from "react";
import styles from "./style.module.css";
import { useLocalization } from "@/LocalizationContext";

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLocalization();

    return (
        <div>
            <button 
            onClick={() => setLanguage("en")} 
            disabled={language === "en"}
            className={styles.language}>
                En
            </button>
            <button 
            onClick={() => setLanguage("ru")} 
            disabled={language === "ru"}
            className={styles.language}>
                Ру
            </button>
        </div>
    );
};

export default LanguageSwitcher;