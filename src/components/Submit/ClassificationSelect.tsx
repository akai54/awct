import React from "react";
import { useTranslation } from "react-i18next";
import { classifications } from "../../data/classifications";
import { Tag } from "lucide-react";

interface ClassificationSelectProps {
  value: string[];
  onChange: (value: string[]) => void;
}

export const ClassificationSelect: React.FC<ClassificationSelectProps> = ({
  value,
  onChange,
}) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as "en" | "fr" | "ar";

  const handleChange = (classificationId: string) => {
    if (value.includes(classificationId)) {
      onChange(value.filter((id) => id !== classificationId)); // Remove if already selected
    } else {
      onChange([...value, classificationId]); // Add if not selected
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        <div className="flex items-center gap-2">
          <Tag className="w-4 h-4" />
          {i18n.t("submit.form.classification")}
        </div>
      </label>
      <div className="space-y-2">
        {classifications.map((classification) => (
          <div key={classification.id} className="flex items-center">
            <input
              type="checkbox"
              id={classification.id}
              checked={value.includes(classification.id)}
              onChange={() => handleChange(classification.id)}
              className="mr-2"
            />
            <label htmlFor={classification.id}>
              {classification.translations[currentLang]}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};
