import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Upload, Calendar, MapPin, User, FileText } from "lucide-react";
import { ClassificationSelect } from "./ClassificationSelect";

export const SubmissionForm: React.FC = () => {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [classifications, setClassifications] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    alert(t("submit.successMessage"));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {t("submit.form.suspectName")}
            </div>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder={t("submit.form.suspectNamePlaceholder")}
          />
        </div>

        <ClassificationSelect
          value={classifications}
          onChange={setClassifications}
        />

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {t("submit.form.incidentDate")}
            </div>
          </label>
          <input
            type="date"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {t("submit.form.location")}
            </div>
          </label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder={t("submit.form.locationPlaceholder")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {t("submit.form.description")}
            </div>
          </label>
          <textarea
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            placeholder={t("submit.form.descriptionPlaceholder")}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <div className="flex items-center gap-2">
              <Upload className="w-4 h-4" />
              {t("submit.form.evidence")}
            </div>
          </label>
          <input
            type="file"
            multiple
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-transparent"
            accept="image/*,video/*,.pdf,.doc,.docx"
          />
          <p className="mt-2 text-sm text-gray-500">
            {t("submit.form.evidenceHelp")}
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? t("submit.form.submitting") : t("submit.form.submit")}
        </button>
      </div>
    </form>
  );
};
