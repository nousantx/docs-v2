import Code from "../components/Code";
import { useStyles } from "../hooks/useStyles";

const GetStarted = () => {
  useStyles();
  return (
    <section className="p-2rem w-full">
      <header>
        <h1 className="text-4xl font-extrabold tracking-tight">Get Started</h1>
        <p className="text-lg fw-300 mt-6px">
          Let's learn about tenoxui css framework. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex, illum.
        </p>
      </header>
      <h2 className="text-3xl font-semibold tracking-tight mt-2rem mb-1rem">
        Installation{" "}
        <a href="#installation" className="text-primary">
          #
        </a>
      </h2>

      <Code title="Installation" language="bash">
        {`npm i tenoxui --save-dev
#or
yarn add tenoxui -D`}
      </Code>
    </section>
  );
};

export default GetStarted;
