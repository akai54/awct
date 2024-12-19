import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User, MapPin, Shield, AlertTriangle } from 'lucide-react';
import { Criminal } from '../types';

interface CriminalCardProps {
  criminal: Criminal;
}

export const CriminalCard: React.FC<CriminalCardProps> = ({ criminal }) => {
  const navigate = useNavigate();

  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
      onClick={() => navigate(`/criminal/${criminal.id}`)}
    >
      <div className={`p-4 ${criminal.status === 'At Large' ? 'bg-red-50' : 'bg-gray-50'}`}>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{criminal.fullName}</h3>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <User size={16} />
              {criminal.aliases.join(', ')}
            </p>
          </div>
          <span className={`px-3 py-1 rounded-full text-sm font-medium
            ${criminal.status === 'At Large' ? 'bg-red-100 text-red-800' : 
              criminal.status === 'Detained' ? 'bg-blue-100 text-blue-800' : 
              'bg-gray-100 text-gray-800'}`}>
            {criminal.status}
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="space-y-3">
          <p className="flex items-center gap-2 text-gray-700">
            <Shield size={16} />
            {criminal.position}
          </p>
          <p className="flex items-center gap-2 text-gray-700">
            <MapPin size={16} />
            {criminal.unit}
          </p>
          {criminal.sanctions.length > 0 && (
            <div className="flex items-center gap-2 text-red-600">
              <AlertTriangle size={16} />
              <span>{criminal.sanctions.length} Active Sanctions</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};