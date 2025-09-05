'use client';

import { ReactNode } from 'react';
import { Shield, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ConnectWallet, Wallet } from '@coinbase/onchainkit/wallet';
import { Name } from '@coinbase/onchainkit/identity';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Rights', href: '#rights' },
    { name: 'Scripts', href: '#scripts' },
    { name: 'Record', href: '#record' },
    { name: 'Alerts', href: '#alerts' },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="glass-card m-4 mb-0">
        <div className="max-w-screen-md mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">CitizenShield</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              <Wallet>
                <ConnectWallet>
                  <Name />
                </ConnectWallet>
              </Wallet>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors duration-200"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="mt-4 pt-4 border-t border-white border-opacity-20">
              <div className="grid grid-cols-2 gap-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-3 py-2 text-sm text-white hover:bg-white hover:bg-opacity-10 rounded-lg transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-md mx-auto px-6 py-6">
        {children}
      </main>
    </div>
  );
}
