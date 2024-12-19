import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchBar } from '../components/SearchBar';
import { CriminalCard } from '../components/CriminalCard';
import { Notice } from '../components/Notice';
import { mockCriminals } from '../data/mockData';

export const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useTranslation();

  const filteredCriminals = mockCriminals.filter(criminal =>
    criminal.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    criminal.unit.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {t('header.tracking')}
        </h2>
        <p className="text-gray-600 mb-8">
          {t('header.description')}
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCriminals.map(criminal => (
          <CriminalCard key={criminal.id} criminal={criminal} />
        ))}
      </div>

      <Notice />
    </main>
  );
};