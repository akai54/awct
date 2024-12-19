import React from "react";
import { useTranslation } from "react-i18next";
import { SubmissionForm } from "../components/Submit/SubmissionForm";
import { SecurityNotice } from "../components/Submit/SecurityNotice";
import { Shield } from "lucide-react";

export const SubmitInformation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-black-100 rounded-full mb-4">
          <Shield className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          {t("submit.title")}
        </h1>
        <p className="text-gray-600">{t("submit.description")}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <SubmissionForm />
        </div>
        <div className="md:col-span-1">
          <SecurityNotice />
        </div>
      </div>
    </div>
  );
};
