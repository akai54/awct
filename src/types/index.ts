export interface Criminal {
  id: string;
  fullName: string;
  aliases: string[];
  position: string;
  unit: string;
  classification: string;
  status: 'At Large' | 'Detained' | 'Deceased' | 'Unknown';
  timeline: TimelineEvent[];
  sanctions: Sanction[];
}

export interface TimelineEvent {
  date: string;
  description: string;
  location: string;
  type: 'Crime' | 'Appointment' | 'Sanction' | 'Legal Action';
}

export interface Sanction {
  issuedBy: string;
  date: string;
  type: string;
  details: string;
}

export interface SearchFilters {
  query: string;
  status: string;
  timeframe: string;
  unit: string;
}

export interface Classification {
  id: string;
  translations: {
    en: string;
    ar: string;
    fr: string;
  };
}