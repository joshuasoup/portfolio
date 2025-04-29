
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="animate-fade-in">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">About Me</h1>
        
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="border-l-2 border-gray-800 pl-6 py-2">
            <div className="mb-4">
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="text-xl font-medium">Carleton University</h3>
                <span className="text-portfolio-muted">Expected 2028 • Ottawa, ON</span>
              </div>
              <p className="text-lg">Bachelor of Computer Science</p>
              <p className="text-portfolio-muted mt-1">
                Relevant Coursework: Discrete Math & Structures, Linear Algebra, Systems Programming, Algorithms
              </p>
              <p className="mt-1">
                <span className="font-medium">Awards & Scholarships:</span> President's Scholars
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="border-l-2 border-gray-800 pl-6">
            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="text-xl font-medium">Automotive Restoration Technician</h3>
                <span className="text-portfolio-muted">Jun 2022 - Sep 2024</span>
              </div>
              <p className="text-lg mb-2">Classic Plus Builds</p>
              <ul className="list-disc list-inside space-y-2 text-portfolio-muted">
                <li>Specialized in restoring high-end classic automobiles, focusing on comprehensive overhauls of mechanical and aesthetic components.</li>
                <li>Performed meticulous bodywork restoration, including rust repair, panel fabrication, and precision alignment to return the vehicle to its original condition.</li>
                <li>Managed project timelines effectively, ensuring the restoration process was completed within scheduled deadlines while maintaining exceptional quality.</li>
              </ul>
            </div>

            <div className="mb-8">
              <div className="flex flex-col md:flex-row md:justify-between mb-1">
                <h3 className="text-xl font-medium">Founder and President</h3>
                <span className="text-portfolio-muted">Sep 2022 - Jun 2024</span>
              </div>
              <p className="text-lg mb-2">Richmond Hill High School Robotics Club</p>
              <ul className="list-disc list-inside space-y-2 text-portfolio-muted">
                <li>Led a team of over 30 members in designing, building, and programming VEX robots for regional competitions, fostering a collaborative environment that encouraged innovation and technical skill development.</li>
                <li>Secured over $5,000 in funding and sponsorships by crafting compelling proposals and presenting them to potential donors, ensuring adequate resources for projects and competitions.</li>
                <li>Promoted STEM education and outreach by organizing community events, demonstrations, and school presentations, increasing interest in robotics and engineering among younger students.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Python</span>
                <span className="badge">Java</span>
                <span className="badge">TypeScript/JavaScript</span>
                <span className="badge">HTML</span>
                <span className="badge">CSS</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Libraries/Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">React</span>
                <span className="badge">Node.js</span>
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-2">Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge">AWS</span>
                <span className="badge">MongoDB</span>
                <span className="badge">Clerk</span>
                <span className="badge">Stripe</span>
                <span className="badge">Pinecone</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
