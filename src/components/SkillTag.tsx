import React from 'react';

interface SkillTagProps {
  name: string;
  level: number; // 1-5
}

const SkillTag: React.FC<SkillTagProps> = ({ name, level }) => {
  return (
    <div className="inline-flex items-center px-3 py-1 bg-white border border-teal-200 rounded-full shadow-sm">
      <span className="text-sm text-slate-700 mr-2">{name}</span>
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full ${
              index < level ? 'bg-teal-500' : 'bg-slate-200'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SkillTag;