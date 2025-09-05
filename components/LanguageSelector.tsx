'use client';

import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  variant?: 'default';
}

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
];

export function LanguageSelector({ selectedLanguage, onLanguageChange, variant = 'default' }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  
  const selectedLang = languages.find(lang => lang.code === selectedLanguage) || languages[0];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card px-4 py-2 flex items-center space-x-2 hover:bg-opacity-15 transition-all duration-200 w-full"
      >
        <Globe className="h-4 w-4 text-white" />
        <span className="text-white text-sm">{selectedLang.flag} {selectedLang.name}</span>
        <ChevronDown className={`h-4 w-4 text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 glass-card border border-white border-opacity-20 rounded-lg shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                onLanguageChange(language.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-3 text-left hover:bg-white hover:bg-opacity-10 transition-colors duration-200 flex items-center space-x-3 ${
                language.code === selectedLanguage ? 'bg-white bg-opacity-10' : ''
              } first:rounded-t-lg last:rounded-b-lg`}
            >
              <span className="text-lg">{language.flag}</span>
              <span className="text-white text-sm">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
