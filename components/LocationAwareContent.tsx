'use client';

import { useState, useEffect } from 'react';
import { MapPin, ChevronDown } from 'lucide-react';

interface LocationAwareContentProps {
  variant: 'stateSpecific';
  onStateChange: (state: string) => void;
  selectedState: string;
}

const US_STATES = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

export function LocationAwareContent({ variant, onStateChange, selectedState }: LocationAwareContentProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDetecting, setIsDetecting] = useState(false);

  const detectLocation = async () => {
    setIsDetecting(true);
    
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          // In a real app, you would use a geocoding service to convert coordinates to state
          // For demo purposes, we'll simulate this
          setTimeout(() => {
            const randomState = US_STATES[Math.floor(Math.random() * US_STATES.length)];
            onStateChange(randomState);
            setIsDetecting(false);
          }, 2000);
        },
        (error) => {
          console.error('Geolocation error:', error);
          setIsDetecting(false);
        }
      );
    } else {
      setIsDetecting(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="glass-card p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-white" />
            <h3 className="text-lg font-semibold text-white">Location</h3>
          </div>
          <button
            onClick={detectLocation}
            disabled={isDetecting}
            className="btn-secondary text-sm py-2 px-4"
          >
            {isDetecting ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Detecting...</span>
              </div>
            ) : (
              'Auto-detect'
            )}
          </button>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full glass-card px-4 py-3 flex items-center justify-between hover:bg-opacity-15 transition-all duration-200"
          >
            <span className="text-white">
              {selectedState || 'Select your state'}
            </span>
            <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 glass-card border border-white border-opacity-20 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
              {US_STATES.map((state) => (
                <button
                  key={state}
                  onClick={() => {
                    onStateChange(state);
                    setIsOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left hover:bg-white hover:bg-opacity-10 transition-colors duration-200 text-white ${
                    state === selectedState ? 'bg-white bg-opacity-10' : ''
                  } first:rounded-t-lg last:rounded-b-lg`}
                >
                  {state}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedState && (
        <div className="glass-card p-4">
          <h4 className="text-md font-semibold text-white mb-2">
            Rights Summary for {selectedState}
          </h4>
          <p className="text-white text-opacity-90 text-sm">
            State-specific legal information and rights will be displayed here based on your selected location.
            This includes relevant laws, procedures, and contact information for legal aid in {selectedState}.
          </p>
        </div>
      )}
    </div>
  );
}
