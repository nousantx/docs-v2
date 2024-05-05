import { useStyles } from "../hooks/useStyles";

const Test = () => {
  useStyles();

  return (
    <section className="h-100vh flex-center relative p-2rem">
      <header className="ta-center">
        <h1 className="text-3xl flex-center fw-500 gap-4px">
          <span className="ms-sharp text-4xl tc-[accent-500]">science</span>
          Test Page
        </h1>
        <p className="text-base mt-8px">
          It's a test page. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sequi, quibusdam?
        </p>
      </header>
    </section>
  );
};

export default Test;
