
import Layout from '../components/Layout';
import { FileText } from 'lucide-react';

const Resume = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold">Resume</h1>
          <button 
            className="flex items-center gap-2 bg-portfolio-accent text-black px-4 py-2 rounded hover:bg-portfolio-accent/90 transition-colors"
            onClick={() => window.print()}
          >
            <FileText size={18} />
            <span>Download PDF</span>
          </button>
        </div>
        
        <div className="max-w-4xl mx-auto bg-gray-900 rounded-lg p-8 shadow-lg print:shadow-none print:p-0 print:bg-white">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Joshua Souphanthong</h2>
            <p className="text-portfolio-muted">
              <a href="mailto:joshuasouphanthong@carleton.ca" className="hover:text-portfolio-accent">joshuasouphanthong@carleton.ca</a> | 
              <a href="https://www.linkedin.com/in/joshua-souphanthong/" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent"> linkedin.com/in/joshua-souphanthong</a> | 
              <a href="https://github.com/joshuasoup" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-accent"> github.com/joshuasoup</a>
            </p>
          </div>
          
          {/* Education */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b border-gray-700 pb-1 mb-3">EDUCATION</h3>
            <div className="flex justify-between items-start mb-1">
              <h4 className="font-semibold">Carleton University</h4>
              <span className="text-portfolio-muted">Expected 2028</span>
            </div>
            <div className="flex justify-between">
              <p className="italic">Bachelor of Computer Science</p>
              <span className="text-portfolio-muted">Ottawa, ON</span>
            </div>
            <p className="mt-1"><span className="font-medium">Relevant Coursework:</span> Discrete Math & Structures, Linear Algebra, Systems Programming, Algorithms</p>
            <p className="mt-1"><span className="font-medium">Awards & Scholarships:</span> President's Scholars</p>
          </section>
          
          {/* Projects */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b border-gray-700 pb-1 mb-3">PROJECTS</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">RiseHealth</h4>
                <span className="text-portfolio-muted">Mar 2024 - Jan 2025, 1 person project</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-portfolio-muted">
                <li>Built a full-stack web application allowing users to upload medical report PDFs and interact with the content by asking questions or highlighting text for definitions and explanations, improving health literacy.</li>
                <li>Integrated OpenAI's GPT models to power an AI assistant that provides contextual answers, summaries, and insights directly tied to the uploaded documents, enhancing user experience.</li>
                <li>Designed and implemented a contextual model using Pinecone DB embeddings, resulting in high-accuracy matching between user queries and document sections.</li>
                <li>Implemented secure user authentication and authorization through Clerk, including multi-factor authentication (MFA) to protect sensitive health data.</li>
                <li>Integrated Stripe for secure subscription management and payment processing, enabling scalable transaction handling.</li>
                <li>Developed a secure file upload system using AWS S3, ensuring scalable, reliable, and protected storage for user-uploaded documents.</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Stockii</h4>
                <span className="text-portfolio-muted">Jan 2025 - uOttaHacks, 4 person project</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-portfolio-muted">
                <li>Developed and maintained a full-stack stock tracking application using TypeScript, React, and Google API.</li>
                <li>Implemented secure user authentication with role-based access control and OAuth integration via Google.</li>
                <li>Built and optimized RESTful API endpoints for real-time stock data retrieval and user profile management.</li>
                <li>Designed and developed responsive UI components with Tailwind CSS to ensure a consistent cross-device experience.</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">BetterReads</h4>
                <span className="text-portfolio-muted">May 2024 - Jun 2024, 3 person project</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-portfolio-muted">
                <li>Developed a Java application for the Memorial High School library that allows users to scan books (e.g., via ISBN barcode scanning) to retrieve detailed information, enhancing the efficiency of data access.</li>
                <li>Integrated the Google Books API to automatically pull up information about scanned books, including titles, authors, summaries, and cover images, providing users with comprehensive insights.</li>
                <li>Collaborated with a team to conduct testing and refine features based on user feedback, improving overall usability and functionality of our application, ensuring a seamless user experience.</li>
              </ul>
            </div>
          </section>
          
          {/* Experience */}
          <section className="mb-8">
            <h3 className="text-xl font-bold border-b border-gray-700 pb-1 mb-3">EXPERIENCE</h3>
            
            <div className="mb-4">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Automotive Restoration Technician - Classic Plus Builds</h4>
                <span className="text-portfolio-muted">June 2022 - Sep 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-portfolio-muted">
                <li>Specialized in restoring high-end classic automobiles, focusing on comprehensive overhauls of mechanical and aesthetic components.</li>
                <li>Performed meticulous bodywork restoration, including rust repair, panel fabrication, and precision alignment to return the vehicle to its original condition.</li>
                <li>Managed project timelines effectively, ensuring the restoration process was completed within scheduled deadlines while maintaining exceptional quality.</li>
              </ul>
            </div>
            
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Founder and President - Richmond Hill High School Robotics Club</h4>
                <span className="text-portfolio-muted">September 2022 - June 2024</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-portfolio-muted">
                <li>Led a team of over 30 members in designing, building, and programming VEX robots for regional competitions, fostering a collaborative environment that encouraged innovation and technical skill development.</li>
                <li>Secured over $5,000 in funding and sponsorships by crafting compelling proposals and presenting them to potential donors, ensuring adequate resources for projects and competitions.</li>
                <li>Promoted STEM education and outreach by organizing community events, demonstrations, and school presentations, increasing interest in robotics and engineering among younger students.</li>
              </ul>
            </div>
          </section>
          
          {/* Skills */}
          <section>
            <h3 className="text-xl font-bold border-b border-gray-700 pb-1 mb-3">SKILLS</h3>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div>
                <p><span className="font-medium">Languages:</span> Python, Java, TypeScript/JavaScript, HTML, CSS</p>
              </div>
              <div>
                <p><span className="font-medium">Libraries:</span> React, Node.js</p>
              </div>
              <div>
                <p><span className="font-medium">Tools:</span> AWS, MongoDB, Clerk, Stripe, Pinecone</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;
