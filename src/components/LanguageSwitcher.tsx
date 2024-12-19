import React from "react";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-2">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`px-2 py-1 rounded ${
          i18n.language === "en"
            ? "bg-green-700 text-white"
            : "text-green-200 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage("fr")}
        className={`px-2 py-1 rounded ${
          i18n.language === "fr"
            ? "bg-green-700 text-white"
            : "text-green-200 hover:text-white"
        }`}
      >
        FR
      </button>
      <button
        onClick={() => i18n.changeLanguage("ar")}
        className={`px-2 py-1 rounded ${
          i18n.language === "ar"
            ? "bg-green-700 text-white"
            : "text-green-200 hover:text-white"
        }`}
      >
        عربي
      </button>
    </div>
  );
};
