import React from "react";
import { Shield } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../LanguageSwitcher";

export const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className="bg-green-600 text-white py-6 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <Link to="/" className="flex items-center gap-3 mb-4 md:mb-0">
            <Shield size={32} />
            <h1 className="text-2xl font-bold">{t("title")}</h1>
          </Link>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <nav className="flex flex-col md:flex-row md:space-x-8">
              <Link to="/" className="hover:text-green-200 md:py-2 md:px-4">
                {t("nav.database")}
              </Link>
              <Link
                to="/submit"
                className="hover:text-green-200 md:py-2 md:px-4"
              >
                {t("nav.submit")}
              </Link>
              <Link
                to="/about"
                className="hover:text-green-200 md:py-2 md:px-4"
              >
                {t("nav.about")}
              </Link>
            </nav>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};
