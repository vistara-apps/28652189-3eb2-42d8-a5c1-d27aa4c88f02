'use client';

import { useState, useEffect } from 'react';
import { useMiniKit } from '@coinbase/onchainkit/minikit';
import { AppShell } from '@/components/AppShell';
import { InfoCard } from '@/components/InfoCard';
import { CallToAction } from '@/components/CallToAction';
import { LanguageSelector } from '@/components/LanguageSelector';
import { LocationAwareContent } from '@/components/LocationAwareContent';
import { SAMPLE_RIGHTS_DATA, SAMPLE_SCRIPTS } from '@/lib/constants';
import { Shield, AlertTriangle, Mic, Share2, BookOpen, MessageSquare } from 'lucide-react';

export default function HomePage() {
  const { setFrameReady } = useMiniKit();
  const [selectedState, setSelectedState] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isRecording, setIsRecording] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setFrameReady();
  }, [setFrameReady]);

  const handleRecordAction = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop actual recording
    console.log(isRecording ? 'Stopping recording...' : 'Starting recording...');
  };

  const handleAlertAction = () => {
    // In a real app, this would send alerts to emergency contacts
    console.log('Sending emergency alert...');
  };

  const handleShareAction = () => {
    // In a real app, this would generate and share incident summary
    console.log('Sharing incident summary...');
  };

  const currentRightsData = selectedState ? SAMPLE_RIGHTS_DATA[selectedState as keyof typeof SAMPLE_RIGHTS_DATA] : null;

  return (
    <AppShell>
      <div className="space-y-6">
        {/* Hero Section */}
        <section id="home" className="text-center space-y-6">
          <div className="glass-card p-8">
            <div className="mx-auto w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">CitizenShield</h1>
            <p className="text-xl text-white text-opacity-90 mb-6">
              Know Your Rights. Stay Safe. Anytime, Anywhere.
            </p>
            <p className="text-white text-opacity-80 leading-relaxed">
              Access your legal rights, de-escalation tactics, and discreetly document interactions 
              with law enforcement, all integrated seamlessly into the Base ecosystem.
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <CallToAction 
              variant="record" 
              onAction={handleRecordAction}
            />
            <CallToAction 
              variant="alert" 
              onAction={handleAlertAction}
            />
            <CallToAction 
              variant="share" 
              onAction={handleShareAction}
            />
          </div>
        </section>

        {/* Location Selection */}
        <section id="location" className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span>Your Location</span>
          </h2>
          <LocationAwareContent
            variant="stateSpecific"
            selectedState={selectedState}
            onStateChange={setSelectedState}
          />
        </section>

        {/* Language Selection */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <MessageSquare className="h-6 w-6" />
            <span>Language Preference</span>
          </h2>
          <LanguageSelector
            selectedLanguage={selectedLanguage}
            onLanguageChange={setSelectedLanguage}
          />
        </section>

        {/* Rights Information */}
        {currentRightsData && (
          <section id="rights" className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <Shield className="h-6 w-6" />
              <span>Your Rights in {selectedState}</span>
            </h2>
            <div className="space-y-4">
              <InfoCard
                variant="rights"
                title="Rights Summary"
                content={currentRightsData.rightsSummary}
                state={selectedState}
              />
              {currentRightsData.relevantLaws.map((law, index) => (
                <InfoCard
                  key={index}
                  variant="rights"
                  title={law.title}
                  content={`${law.description} (${law.statute})`}
                  state={selectedState}
                />
              ))}
            </div>
          </section>
        )}

        {/* De-escalation Scripts */}
        <section id="scripts" className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
            <MessageSquare className="h-6 w-6" />
            <span>De-escalation Scripts</span>
          </h2>
          <div className="space-y-4">
            {SAMPLE_SCRIPTS.map((script) => (
              <InfoCard
                key={script.id}
                variant="script"
                title={script.scenario}
                content={script.script}
                language={selectedLanguage}
              />
            ))}
          </div>
        </section>

        {/* Emergency Contacts */}
        {currentRightsData && (
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6" />
              <span>Emergency Contacts</span>
            </h2>
            <div className="space-y-4">
              {currentRightsData.emergencyContacts.map((contact, index) => (
                <div key={index} className="glass-card p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-white">{contact.name}</h3>
                      <p className="text-white text-opacity-70 text-sm capitalize">
                        {contact.type.replace('_', ' ')}
                      </p>
                    </div>
                    <a
                      href={`tel:${contact.phone}`}
                      className="btn-primary py-2 px-4 text-sm"
                    >
                      Call {contact.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Recording Status */}
        {isRecording && (
          <section className="fixed bottom-4 left-4 right-4 z-50">
            <div className="glass-card p-4 border-2 border-red-500">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Recording in progress...</span>
                <Mic className="h-5 w-5 text-red-500" />
              </div>
            </div>
          </section>
        )}

        {/* Footer */}
        <footer className="glass-card p-6 text-center">
          <p className="text-white text-opacity-70 text-sm">
            CitizenShield - Empowering citizens with knowledge and tools for safe interactions.
          </p>
          <p className="text-white text-opacity-50 text-xs mt-2">
            Built on Base • Powered by OnchainKit
          </p>
        </footer>
      </div>
    </AppShell>
  );
}
