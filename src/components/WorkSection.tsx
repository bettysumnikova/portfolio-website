import React from 'react';
import ProjectCard from './ProjectCard';

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

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Stock Data Analysis',
    description: 'Responsive web app for visualizing and analyzing stock market trends and historical data.',
    image: '/assets/images/projects/project1-placeholder.jpg',
    tags: ['Python', 'Visualisation', 'Machine learning', 'SQL', 'AI'],
    // github: '#',
    demo: '#',
    demoStatus: 'coming-soon'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'A fully responsive and artistic portfolio site to showcase projects, skills, and personal activities, designed to support a tech career and personal branding.',
    image: '/assets/images/projects/project2-placeholder.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
  //   github: 'https://github.com'
  },
  {
    id: 3,
    title: 'Score-Driven Models for Air Temperature Analysis',
    description: 'Master\'s thesis analyzing temperature trends using GAS and SARIMA models, with a focus on GAS\'s ability to capture time-varying characteristics.',
    image: '/assets/images/projects/project3-placeholder.jpg',
    tags: ['R', 'Time Series Analysis', 'Statistical Modeling', 'Visualisations'],
    // github: 'https://github.com',
    link: 'https://vskp.vse.cz/92547_modely-zalozene-na-skore-pro-analyzu-teploty-vzduchu??page=29'
  }
];

const skills = [
  'Python', 'SQL', 'R', 'Tableau', 'Power BI', 'Git', 'LaTeX',
  'Generative AI', 'Statistical Data Analysis', 'Visualisation',
  'Communication', 'Collaboration'
];

const certifications: Certification[] = [
  {
    name: 'Google Cybersecurity',
    issuer: 'Google',
    date: 'May 6, 2024',
    link: 'https://www.coursera.org/account/accomplishments/specialization/HBTG1WLXMUHU'
  },
  {
    name: 'Google AI Essentials',
    issuer: 'Google',
    date: 'December 8, 2024',
    link: 'https://www.coursera.org/account/accomplishments/verify/PVEB6G8SE72R?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course'
  },
  {
    name: 'SQL',
    issuer: 'Czechitas',
    date: 'April 17, 2025',
    link: 'https://certifikat.czechitas.cz/credentials/7904d9f5-25ed-42d7-a128-5a4059171674'
  }
];

const WorkSection: React.FC = () => {
  return (
    <section id="work" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold text-text mb-2">Work & Skills</h2>
        <div className="w-20 h-1 bg-accent mb-10"></div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text/90 mb-8">Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-text/90 mb-8">Skills</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white text-text/80 rounded-lg border border-accent/20 hover:border-accent transition-colors duration-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-text/90 mb-8">Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg border border-accent/20 hover:border-accent transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-text mb-2">{cert.name}</h4>
                <p className="text-text/70 mb-1">{cert.issuer}</p>
                <p className="text-text/60 text-sm mb-3">{cert.date}</p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent-dark text-sm transition-colors duration-300"
                  >
                    View Certificate →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;