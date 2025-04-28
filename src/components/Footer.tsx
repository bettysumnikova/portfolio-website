import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-600">
          © {currentYear} Alzbeta (Betty) Sumnikova. All rights reserved.
        </p>
        <p className="text-sm text-slate-500 mt-2">
          Have a wonderful day!
        </p>
      </div>
    </footer>
  );
};

export default Footer;