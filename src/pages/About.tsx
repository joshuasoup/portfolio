import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout pageName="about">
      <div className="max-w-4xl mx-auto space-y-12 animate-fade-in">
        <header className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold animate-slide-down">
            About Me
          </h1>
          <div className="w-20 h-1 bg-primary rounded animate-slide-right"></div>
        </header>

        <section className="space-y-8 animate-fade-in [--animation-delay:200ms]">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary/80">
            Introduction
          </h2>
          <div className="prose prose-lg text-portfolio-text max-w-none space-y-6">
            <p className="text-lg leading-relaxed animate-slide-up [--animation-delay:300ms]">
              Hi, I'm Josh, an incoming second-year computer science student who
              lives to try new things and explore the world.
            </p>
            <p className="text-lg leading-relaxed animate-slide-up [--animation-delay:400ms]">
              I love building with purpose especially when it means helping
              others succeed and seeing the impact firsthand. Whether I'm
              tackling a tough technical challenge like fixing my golf swing or
              exploring perspectives different from my own, I love to hear what
              others think. These thoughts push me to grow, learn, and
              ultimately create better things for the people around me.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
