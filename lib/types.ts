export interface User {
  userId: string;
  walletAddress: string;
  preferences: {
    language: string;
    state: string;
    notifications: boolean;
  };
  lastKnownLocation?: {
    latitude: number;
    longitude: number;
    state: string;
  };
}

export interface Recording {
  recordingId: string;
  userId: string;
  timestamp: Date;
  geoLocation: {
    latitude: number;
    longitude: number;
    state: string;
  };
  mediaUrl?: string;
  status: 'recording' | 'completed' | 'uploaded' | 'shared';
  duration?: number;
  notes?: string;
}

export interface LegalInfo {
  state: string;
  rightsSummary: string;
  relevantLaws: Array<{
    title: string;
    description: string;
    statute: string;
  }>;
  emergencyContacts: Array<{
    name: string;
    phone: string;
    type: 'legal_aid' | 'emergency' | 'advocacy';
  }>;
}

export interface DeescalationScript {
  id: string;
  scenario: string;
  language: string;
  script: string;
  tips: string[];
  doNots: string[];
}

export interface IncidentAlert {
  id: string;
  userId: string;
  timestamp: Date;
  location: {
    latitude: number;
    longitude: number;
    address: string;
  };
  contacts: string[];
  message: string;
  status: 'sent' | 'delivered' | 'failed';
}
