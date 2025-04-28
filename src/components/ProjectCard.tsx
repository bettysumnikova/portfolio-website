import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  demoStatus?: 'coming-soon' | 'live';
  link?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft group hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h4 className="text-xl font-semibold text-text mb-2">{project.title}</h4>
        <p className="text-text/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-1 bg-accent/10 text-accent-dark rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/60 hover:text-accent transition-colors duration-300 flex items-center"
              aria-label={`Github repository for ${project.title}`}
            >
              <Github size={18} className="mr-1" />
              <span className="text-sm">Code</span>
            </a>
          )}
          {project.demo && (
            <div className="relative">
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center ${
                  project.demoStatus === 'coming-soon'
                    ? 'text-accent/60 cursor-not-allowed'
                    : 'text-text/60 hover:text-accent'
                } transition-colors duration-300`}
                onClick={(e) => {
                  if (project.demoStatus === 'coming-soon') {
                    e.preventDefault();
                    setShowTooltip(true);
                    setTimeout(() => setShowTooltip(false), 2000);
                  }
                }}
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={18} className="mr-1" />
                <span className="text-sm">
                  {project.demoStatus === 'coming-soon' ? 'Demo (Coming Soon)' : 'Demo'}
                </span>
              </a>
              {showTooltip && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-text text-white text-xs rounded shadow-lg whitespace-nowrap">
                  Demo will be available soon!
                </div>
              )}
            </div>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text/60 hover:text-accent transition-colors duration-300 flex items-center"
              aria-label={`View ${project.title}`}
            >
              <ExternalLink size={18} className="mr-1" />
              <span className="text-sm">View Project</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;