import React from 'react';
import { useTranslation } from 'react-i18next';

export const Notice: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12 bg-white rounded-lg p-6 shadow-md">
      <h3 className="text-xl font-bold mb-4">{t('notice.title')}</h3>
      <p className="text-gray-700">{t('notice.content')}</p>
    </div>
  );
};