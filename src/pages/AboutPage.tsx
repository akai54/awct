import React from "react";
import { useTranslation } from "react-i18next";

export const AboutPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <main
      className={`container mx-auto px-4 py-8 ${
        isArabic ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t("about.mission")}
        </h1>
        <p className="text-gray-600 mb-8">{t("about.missionDescription")}</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("about.whatWeDo")}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("about.documentation")}</li>
          <li>{t("about.databaseManagement")}</li>
          <li>{t("about.advocacy")}</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {t("about.whyItMatters")}
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("about.justiceForVictims")}</li>
          <li>{t("about.accountability")}</li>
          <li>{t("about.historicalRecord")}</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">
          {t("about.ourCommitment")}
        </h2>
        <p className="text-gray-700">{t("about.commitmentDescription")}</p>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">{t("about.getInvolved")}</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>{t("about.submittingInformation")}</li>
          <li>{t("about.supportingOurWork")}</li>
          <li>{t("about.spreadingAwareness")}</li>
        </ul>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">{t("about.contactUs")}</h2>
        <p className="text-gray-700">{t("about.contactDescription")}</p>
        <p className="text-gray-700 mt-4">{t("about.together")}</p>
      </div>
    </main>
  );
};
