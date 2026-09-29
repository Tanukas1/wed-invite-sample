import React from 'react';

export const Divider: React.FC = () => {
  return (
    <div className="my-6 flex items-center justify-center gap-3 text-primary-foreground">
      <span className="h-px w-16 bg-gold-soft" />
      <span className="text-gold text-lg font-emoji select-none">❀</span>
      <span className="h-px w-16 bg-gold-soft" />
    </div>
  );
};
