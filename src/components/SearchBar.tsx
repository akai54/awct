import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search by name, unit, or location..."
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
        onChange={(e) => onSearch(e.target.value)}
      />
      <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
    </div>
  );
}