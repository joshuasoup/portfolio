import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { Dialog, DialogContent, DialogTrigger } from "../components/ui/dialog";

const Index = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col justify-center py-12 animate-fade-in">
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">
                <div className="flex items-center animate-slide-down">
                  Joshua
                  <Dialog>
                    <DialogTrigger asChild>
                      <div className="relative group cursor-pointer ml-2">
                        <div className="absolute -inset-2 bg-portfolio-accent/20 rounded-full blur-sm group-hover:blur-md transition-all opacity-0 group-hover:opacity-100"></div>
                        <img
                          src="/portfolio/images/JS.png"
                          alt="Soup Logo"
                          className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 object-contain relative animate-pulse-slow group-hover:animate-none transition-transform group-hover:scale-110"
                        />
                        <div className="absolute -inset-2 border-2 border-portfolio-accent/50 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] flex items-center justify-center bg-transparent border-none shadow-none">
                      <img
                        src="/portfolio/images/JS.png"
                        alt="Large Soup Logo"
                        className="w-[500px] h-[500px] object-contain animate-fade-in"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="animate-slide-right [--animation-delay:200ms]">
                  Souphanthong
                </div>
              </h1>
            </div>
            <img
              src="/portfolio/images/IMG_3956.jpeg"
              alt="Profile"
              className="w-40 h-40 md:w-44 md:h-44 rounded-full object-cover border border-portfolio-accent/50 shadow-lg shadow-portfolio-accent/10 transition-all hover:border-portfolio-accent/80 animate-fade-in [--animation-delay:400ms]"
            />
          </div>
          <div className="space-y-4 text-lg animate-fade-in [--animation-delay:600ms]">
            <div className="flex items-baseline animate-slide-up [--animation-delay:700ms]">
              <span className="text-portfolio-highlight mr-2">•</span>
              <span>
                <span className="text-portfolio-muted">student at </span>
                Carleton University
              </span>
            </div>
            <div className="flex items-baseline animate-slide-up [--animation-delay:800ms]">
              <span className="text-portfolio-highlight mr-2">•</span>
              <span>
                <span className="text-portfolio-muted">studying </span>
                Computer Science
              </span>
            </div>
            <div className="flex items-baseline animate-slide-up [--animation-delay:900ms]">
              <span className="text-portfolio-highlight mr-2">•</span>
              <span className="text-portfolio-muted">recently:</span>
            </div>
            <div className="pl-6">
              <div className="flex animate-slide-right [--animation-delay:1000ms]">
                <span className="text-portfolio-muted mr-2">→</span>
                <span>
                  built{" "}
                  <span className="font-semibold text-portfolio-highlight">
                    ClearHealth
                  </span>
                  <span className="text-portfolio-muted">
                    {" "}
                    - a full-stack web application for medical report
                    interaction
                  </span>
                </span>
              </div>
              <div className="flex animate-slide-right [--animation-delay:1100ms]">
                <span className="text-portfolio-muted mr-2">→</span>
                <span>
                  developed{" "}
                  <span className="font-semibold text-portfolio-highlight">
                    Stockl
                  </span>
                  <span className="text-portfolio-muted">
                    {" "}
                    - a stock tracking app with TypeScript, React, and Google
                    OAuth
                  </span>
                </span>
              </div>
              <div className="flex animate-slide-right [--animation-delay:1200ms]">
                <span className="text-portfolio-muted mr-2">→</span>
                <span>
                  created{" "}
                  <span className="font-semibold text-portfolio-highlight">
                    BetterReads
                  </span>
                  <span className="text-portfolio-muted">
                    {" "}
                    - a Java application with ISBN barcode scanning
                  </span>
                </span>
              </div>
            </div>
            <div className="flex items-baseline animate-slide-up [--animation-delay:1300ms]">
              <span className="text-portfolio-highlight mr-2">•</span>
              <span>
                <span className="text-portfolio-muted">currently </span>
                redfining the syllabus...
              </span>
            </div>
          </div>
        </div>

        <div className="mt-6 md:mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in [--animation-delay:1400ms]">
          <Link
            to="/projects"
            className="link-with-arrow bg-portfolio-accent text-portfolio-text px-6 py-3 rounded inline-flex items-center justify-center transition-all hover:bg-portfolio-accent/90"
          >
            see what I've built
            <span className="arrow-icon">→</span>
          </Link>
          <Dialog>
            <DialogTrigger asChild>
              <button className="link-with-arrow px-6 py-3 rounded border border-portfolio-accent inline-flex items-center justify-center hover:bg-portfolio-accent/10 transition-all">
                view my resume
                <span className="arrow-icon">→</span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
              <iframe
                src="/Joshua Souphanthong Resume 2025 (1).pdf"
                className="w-full h-full rounded-lg"
                title="Resume PDF"
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
