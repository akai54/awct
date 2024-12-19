import React from "react";
import { useTranslation } from "react-i18next";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-4">{t("footer.about.title")}</h4>
            <p className="text-gray-400">{t("footer.about.description")}</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("footer.resources.title")}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>{t("footer.resources.docs")}</li>
              <li>{t("footer.resources.verification")}</li>
              <li>{t("footer.resources.privacy")}</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">{t("footer.contact.title")}</h4>
            <p className="text-gray-400 whitespace-pre-line">
              {t("footer.contact.description")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
