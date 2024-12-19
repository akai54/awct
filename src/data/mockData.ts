import { Criminal } from '../types';

export const mockCriminals: Criminal[] = [
  {
    id: '001',
    fullName: 'Fictional General Ahmad Al-Rashid',
    aliases: ['The Desert Commander'],
    position: 'Former Brigade Commander',
    unit: '115th Mechanized Brigade',
    classification: '',
    status: 'At Large',
    timeline: [
      {
        date: '2012-03-15',
        description: 'Alleged involvement in civilian targeting operations',
        location: 'Fictional City, Syria',
        type: 'Crime'
      },
      {
        date: '2013-07-20',
        description: 'Promoted to Brigade Commander',
        location: 'Damascus, Syria',
        type: 'Appointment'
      }
    ],
    sanctions: [
      {
        issuedBy: 'European Union',
        date: '2014-05-12',
        type: 'Asset Freeze',
        details: 'All EU assets frozen under regulation 2014/123'
      }
    ]
  },
  // Add more mock data as needed
];