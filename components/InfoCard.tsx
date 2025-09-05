'use client';

interface InfoCardProps {
  variant: 'rights' | 'script' | 'howTo';
  title: string;
  content: string;
  state?: string;
  language?: string;
  onExpand?: () => void;
}

export function InfoCard({ variant, title, content, state, language, onExpand }: InfoCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'rights':
        return 'border-l-4 border-l-green-400';
      case 'script':
        return 'border-l-4 border-l-blue-400';
      case 'howTo':
        return 'border-l-4 border-l-purple-400';
      default:
        return '';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'rights':
        return '⚖️';
      case 'script':
        return '💬';
      case 'howTo':
        return '📋';
      default:
        return '📄';
    }
  };

  return (
    <div className={`glass-card p-6 ${getVariantStyles()} cursor-pointer hover:bg-opacity-15 transition-all duration-200`} onClick={onExpand}>
      <div className="flex items-start space-x-4">
        <div className="text-2xl">{getIcon()}</div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {(state || language) && (
              <div className="flex space-x-2">
                {state && (
                  <span className="px-2 py-1 bg-white bg-opacity-20 rounded-md text-xs text-white">
                    {state}
                  </span>
                )}
                {language && (
                  <span className="px-2 py-1 bg-white bg-opacity-20 rounded-md text-xs text-white">
                    {language}
                  </span>
                )}
              </div>
            )}
          </div>
          <p className="text-white text-opacity-90 text-sm leading-relaxed">
            {content.length > 150 ? `${content.substring(0, 150)}...` : content}
          </p>
          {content.length > 150 && (
            <button className="mt-2 text-accent hover:text-accent-light text-sm font-medium">
              Read more →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
