import Layout from "../components/Layout";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  period: string;
  description: string;
  points: string[];
  technologies: string[];
  github?: string;
  link?: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "ClearHealth",
      period: "Mar 2024 - Jan 2025",
      description:
        "A full-stack web application allowing users to upload medical report PDFs and interact with the content",
      points: [
        "Built a full-stack web application allowing users to upload medical report PDFs and interact with the content by asking questions or highlighting text for definitions and explanations, improving health literacy.",
        "Integrated OpenAI's GPT models to power an AI assistant that provides contextual answers, summaries, and insights directly tied to the uploaded documents, enhancing user experience.",
        "Designed and implemented a contextual model using Pinecone DB embeddings, resulting in high-accuracy matching between user queries and document sections.",
        "Implemented secure user authentication and authorization through Clerk, including multi-factor authentication (MFA) to protect sensitive health data.",
        "Integrated Stripe for secure subscription management and payment processing, enabling scalable transaction handling.",
        "Developed a secure file upload system using AWS S3, ensuring scalable, reliable, and protected storage for user-uploaded documents.",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "Pinecone DB",
        "AWS S3",
        "Clerk",
        "Stripe",
        "OpenAI",
      ],
      github: "https://github.com/joshuasoup/Clear-Health",
    },
    {
      title: "Stockll",
      period: "Jan 2025 - uOttaHacks",
      description:
        "A stock tracking application built with TypeScript, React, and RESTful API",
      points: [
        "Developed and maintained a full-stack stock tracking application using TypeScript, React, and Google API.",
        "Implemented secure user authentication with role-based access control and OAuth integration via Google.",
        "Built and optimized RESTful API endpoints for real-time stock data retrieval and user profile management.",
        "Designed and developed responsive UI components with Tailwind CSS to ensure a consistent cross-device experience.",
      ],
      technologies: [
        "TypeScript",
        "React",
        "RESTful API",
        "Tailwind CSS",
        "OAuth",
        "Google API",
      ],
      github: "https://github.com/joshuasoup/stockll",
    },
    {
      title: "BetterReads",
      period: "May 2024 - Jun 2024",
      description:
        "A Java application for the Memorial High School library that allows users to scan books",
      points: [
        "Developed a Java application for the Memorial High School library that allows users to scan books (e.g., via ISBN barcode scanning) to retrieve detailed information, enhancing the efficiency of data access.",
        "Integrated the Google Books API to automatically pull up information about scanned books, including titles, authors, summaries, and cover images, providing users with comprehensive insights.",
        "Collaborated with a team to conduct testing and refine features based on user feedback, improving overall usability and functionality of our application, ensuring a seamless user experience.",
      ],
      technologies: ["Java", "Google Books API", "ISBN Scanning", "UI Design"],
      github: "https://github.com/joshuasoup/BetterReads",
    },
  ];

  return (
    <Layout pageName="projects">
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Projects</h1>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-800 pl-6 py-2 hover:border-portfolio-accent transition-colors project-item"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <div className="text-portfolio-muted text-sm">
                  {project.period}
                </div>
              </div>

              <p className="mb-4 text-lg">{project.description}</p>

              <ul className="list-disc list-inside space-y-3 mb-6 text-portfolio-muted">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="mb-4">
                <div className="text-sm font-medium mb-2">
                  Technologies used:
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    className="flex items-center gap-1 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    className="flex items-center gap-1 text-portfolio-muted hover:text-portfolio-accent transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
