
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col justify-center py-12 animate-fade-in">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Joshua Souphanthong
          </h1>
          <div className="space-y-4 text-lg">
            <div className="flex items-baseline">
              <span className="text-portfolio-accent mr-2">◆</span>
              <span>
                <span className="text-portfolio-muted">student at </span> 
                Carleton University
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-portfolio-accent mr-2">◆</span>
              <span>
                <span className="text-portfolio-muted">studying </span> 
                Computer Science
              </span>
            </div>
            <div className="flex items-baseline">
              <span className="text-portfolio-accent mr-2">◆</span>
              <span className="text-portfolio-muted">recently:</span>
            </div>
            <div className="pl-6">
              <div className="flex">
                <span className="text-portfolio-muted mr-2">→</span>
                <span>
                  built <span className="font-semibold">RiseHealth</span>
                  <span className="text-portfolio-muted"> - a full-stack web application for medical report interaction</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-portfolio-muted mr-2">→</span>
                <span>
                  developed <span className="font-semibold">Stockii</span>
                  <span className="text-portfolio-muted"> - a stock tracking app with TypeScript, React, and Google OAuth</span>
                </span>
              </div>
              <div className="flex">
                <span className="text-portfolio-muted mr-2">→</span>
                <span>
                  created <span className="font-semibold">BetterReads</span>
                  <span className="text-portfolio-muted"> - a Java application with ISBN barcode scanning</span>
                </span>
              </div>
            </div>
            <div className="flex items-baseline">
              <span className="text-portfolio-accent mr-2">◆</span>
              <span>
                <span className="text-portfolio-muted">skills: </span> 
                Python, Java, TypeScript, React, AWS, MongoDB
              </span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 md:mt-12 flex flex-col sm:flex-row gap-4">
          <Link 
            to="/projects" 
            className="link-with-arrow bg-portfolio-accent text-black px-6 py-3 rounded inline-flex items-center justify-center transition-all hover:bg-portfolio-accent/90"
          >
            see what I've built
            <span className="arrow-icon">→</span>
          </Link>
          <Link 
            to="/about" 
            className="link-with-arrow px-6 py-3 rounded border border-gray-700 inline-flex items-center justify-center hover:bg-gray-800/50 transition-all"
          >
            view my resume
            <span className="arrow-icon">→</span>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
