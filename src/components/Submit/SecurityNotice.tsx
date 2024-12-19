import React from "react";
import { useTranslation } from "react-i18next";
import { Shield, Lock, Eye, AlertTriangle } from "lucide-react";

export const SecurityNotice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
        <Shield className="w-5 h-5 text-green-600" />
        {t("submit.security.title")}
      </h2>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <Lock className="w-5 h-5 text-gray-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">
              {t("submit.security.encryption")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("submit.security.encryptionDetails")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Eye className="w-5 h-5 text-gray-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">
              {t("submit.security.anonymity")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("submit.security.anonymityDetails")}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-gray-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">
              {t("submit.security.warning")}
            </h3>
            <p className="text-sm text-gray-600">
              {t("submit.security.warningDetails")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
