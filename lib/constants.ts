export const SAMPLE_RIGHTS_DATA = {
  'California': {
    rightsSummary: 'In California, you have the right to remain silent, the right to refuse searches without a warrant, and the right to record police interactions in public spaces.',
    relevantLaws: [
      {
        title: 'Right to Record',
        description: 'California is a two-party consent state, but recording police in public is generally protected.',
        statute: 'Penal Code Section 632'
      },
      {
        title: 'Search and Seizure',
        description: 'Police need probable cause or a warrant to search your person or property.',
        statute: 'Fourth Amendment, Article I Section 13 CA Constitution'
      }
    ],
    emergencyContacts: [
      {
        name: 'ACLU of California',
        phone: '415-621-2493',
        type: 'legal_aid' as const
      },
      {
        name: 'California Legal Aid',
        phone: '1-800-222-1753',
        type: 'legal_aid' as const
      }
    ]
  },
  'New York': {
    rightsSummary: 'In New York, you have constitutional rights including the right to remain silent, right to an attorney, and protection against unreasonable searches.',
    relevantLaws: [
      {
        title: 'Stop and Frisk',
        description: 'Police can only stop and frisk with reasonable suspicion of criminal activity.',
        statute: 'Terry v. Ohio, NY CPL 140.50'
      },
      {
        title: 'Recording Rights',
        description: 'You have the right to record police interactions in public spaces.',
        statute: 'First Amendment'
      }
    ],
    emergencyContacts: [
      {
        name: 'NYCLU',
        phone: '212-607-3300',
        type: 'legal_aid' as const
      }
    ]
  }
};

export const SAMPLE_SCRIPTS = [
  {
    id: '1',
    scenario: 'Traffic Stop',
    language: 'en',
    script: 'Officer, I understand you\'ve stopped me. I\'m going to remain calm and cooperative. I\'m reaching for my license and registration now.',
    tips: [
      'Keep your hands visible at all times',
      'Announce your movements before making them',
      'Remain calm and polite'
    ],
    doNots: [
      'Don\'t make sudden movements',
      'Don\'t argue or become confrontational',
      'Don\'t consent to searches without a warrant'
    ]
  },
  {
    id: '2',
    scenario: 'Street Encounter',
    language: 'en',
    script: 'Officer, I want to exercise my right to remain silent. Am I free to go? I do not consent to any searches.',
    tips: [
      'Ask if you\'re free to leave',
      'Clearly state you\'re exercising your rights',
      'Don\'t physically resist'
    ],
    doNots: [
      'Don\'t run away',
      'Don\'t lie or provide false information',
      'Don\'t consent to searches'
    ]
  }
];

export const EMERGENCY_PHRASES = {
  en: {
    'I need help': 'I need help',
    'Call my lawyer': 'I want to call my lawyer',
    'I\'m recording': 'I am recording this interaction',
    'Medical emergency': 'This is a medical emergency'
  },
  es: {
    'I need help': 'Necesito ayuda',
    'Call my lawyer': 'Quiero llamar a mi abogado',
    'I\'m recording': 'Estoy grabando esta interacción',
    'Medical emergency': 'Esta es una emergencia médica'
  }
};
