'use client';

import { useState } from 'react';
import { Mic, MicOff, AlertTriangle, Share2, Phone } from 'lucide-react';

interface CallToActionProps {
  variant: 'record' | 'alert' | 'share';
  onAction?: () => void;
  disabled?: boolean;
}

export function CallToAction({ variant, onAction, disabled = false }: CallToActionProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async () => {
    if (disabled) return;
    
    setIsLoading(true);
    
    if (variant === 'record') {
      setIsRecording(!isRecording);
      // Simulate recording toggle
      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    } else {
      // Simulate other actions
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
    
    onAction?.();
  };

  const getButtonContent = () => {
    switch (variant) {
      case 'record':
        return {
          icon: isRecording ? <MicOff className="h-6 w-6" /> : <Mic className="h-6 w-6" />,
          text: isRecording ? 'Stop Recording' : 'Start Recording',
          className: isRecording ? 'btn-danger recording-pulse' : 'btn-primary',
        };
      case 'alert':
        return {
          icon: <AlertTriangle className="h-6 w-6" />,
          text: 'Send Alert',
          className: 'bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl',
        };
      case 'share':
        return {
          icon: <Share2 className="h-6 w-6" />,
          text: 'Share Summary',
          className: 'btn-secondary',
        };
      default:
        return {
          icon: <Phone className="h-6 w-6" />,
          text: 'Action',
          className: 'btn-primary',
        };
    }
  };

  const { icon, text, className } = getButtonContent();

  return (
    <button
      onClick={handleAction}
      disabled={disabled || isLoading}
      className={`${className} w-full flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {isLoading ? (
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
      ) : (
        <>
          {icon}
          <span>{text}</span>
        </>
      )}
    </button>
  );
}
