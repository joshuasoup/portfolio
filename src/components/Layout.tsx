import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  pageName?: string;
}

const DotPattern = () => {
  const dots = [];
  const gridSize = { rows: 30, cols: 50 };

  for (let i = 0; i < gridSize.rows; i++) {
    for (let j = 0; j < gridSize.cols; j++) {
      const delay = ((i + j) * 0.1) % 2;
      dots.push(
        <div
          key={`${i}-${j}`}
          className="dot"
          style={
            {
              gridRow: i + 1,
              gridColumn: j + 1,
              "--delay": `${delay}s`,
            } as React.CSSProperties
          }
        />
      );
    }
  }

  return (
    <div
      className="dot-pattern"
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${gridSize.rows}, 1fr)`,
        gridTemplateColumns: `repeat(${gridSize.cols}, 1fr)`,
      }}
    >
      {dots}
    </div>
  );
};

const Layout = ({ children, pageName = "home" }: LayoutProps) => {
  return (
    <div className="h-screen flex flex-col relative overflow-x-hidden">
      <DotPattern />
      <div
        className="fixed left-0 bottom-0 text-[20vw] font-bold select-none pointer-events-none -z-10 leading-[0.8]"
        style={{ color: "rgba(0, 0, 0, 0.1)" }}
      >
        {pageName}
      </div>
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <Header />
      </div>
      <main className="flex-1 px-6 md:px-12 py-6 md:py-8 max-w-4xl mx-auto w-full">
        {children}
      </main>
      <div className="max-w-4xl mx-auto w-full px-6 md:px-12">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
