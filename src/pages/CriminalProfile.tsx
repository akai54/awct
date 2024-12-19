import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, User, MapPin, Shield, AlertTriangle, Calendar, Globe } from 'lucide-react';
import { mockCriminals } from '../data/mockData';

export const CriminalProfile: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  const criminal = mockCriminals.find(c => c.id === id);

  if (!criminal) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Profile Not Found</h2>
          <button
            onClick={() => navigate('/')}
            className="mt-4 inline-flex items-center text-red-600 hover:text-red-800"
          >
            <ArrowLeft className="mr-2" size={20} />
            Return to Database
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/')}
        className="mb-6 inline-flex items-center text-red-600 hover:text-red-800"
      >
        <ArrowLeft className="mr-2" size={20} />
        Back to Database
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className={`p-6 ${criminal.status === 'At Large' ? 'bg-red-50' : 'bg-gray-50'}`}>
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{criminal.fullName}</h1>
              <p className="text-gray-600 flex items-center gap-2 mt-2">
                <User size={18} />
                {criminal.aliases.join(', ')}
              </p>
            </div>
            <span className={`px-4 py-2 rounded-full text-sm font-medium
              ${criminal.status === 'At Large' ? 'bg-red-100 text-red-800' : 
                criminal.status === 'Detained' ? 'bg-blue-100 text-blue-800' : 
                'bg-gray-100 text-gray-800'}`}>
              {criminal.status}
            </span>
          </div>
        </div>

        <div className="p-6 space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Position & Unit</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Shield className="text-gray-500" size={20} />
                <div>
                  <p className="font-medium">Position</p>
                  <p className="text-gray-600">{criminal.position}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="text-gray-500" size={20} />
                <div>
                  <p className="font-medium">Unit</p>
                  <p className="text-gray-600">{criminal.unit}</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Timeline</h2>
            <div className="space-y-4">
              {criminal.timeline.map((event, index) => (
                <div key={index} className="border-l-2 border-red-200 pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <Calendar className="text-red-500 shrink-0" size={20} />
                    <div>
                      <p className="font-medium">{event.date}</p>
                      <p className="text-gray-600">{event.description}</p>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                        <Globe size={16} />
                        {event.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {criminal.sanctions.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4">Active Sanctions</h2>
              <div className="space-y-4">
                {criminal.sanctions.map((sanction, index) => (
                  <div key={index} className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="text-red-500 shrink-0" size={20} />
                      <div>
                        <p className="font-medium">{sanction.type}</p>
                        <p className="text-gray-600">{sanction.details}</p>
                        <div className="flex items-center gap-2 mt-1 text-sm text-gray-500">
                          <Calendar size={16} />
                          {sanction.date} - {sanction.issuedBy}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </main>
  );
};