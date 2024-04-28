import Code from "../components/Code";
import DocLink from "../components/DocsNavigation";
import Meta from "../components/Helmet";
import Tip from "../components/Tip";
import { useStyles } from "../hooks/useStyles";

const GetStarted = () => {
  useStyles();
  return (
    <>
      <Meta title="Get Sarted" />
      <section className="ph-2rem pt-0 pb-1rem w-full">
        <header>
          <h1 className="text-4xl font-extrabold tracking-tight">
            Get Started
          </h1>
          <p className="text-lg mt-6px">
            Let's learn about tenoxui css framework. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Ex, illum.
          </p>
        </header>
        <h2
          id="installation"
          className="text-3xl font-semibold tracking-tight mt-2rem"
        >
          Installation
        </h2>
        <p className="text-md font-light mt-6px mb-1rem">
          Let's learn about tenoxui css framework. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Ex, illum.
        </p>
        <Code title="NPM" lang="bash">
          {`npm i tenoxui --save-dev`}
        </Code>
        <p className="text-md leading-7 mv-8px pl-1rem">Or</p>
        <Code title="Yarn" lang="bash">
          {`yarn add tenoxui -D`}
        </Code>
        <Tip className="mt-2rem" variant="danger" title="This is danger zone">
          <h2 className="text-3xl font-semibold tracking-tight">Danger Zone</h2>
        </Tip>
        <Tip className="mt-2rem" variant="info" title="Tip nya kak">
          <h2 className="text-3xl font-semibold tracking-tight">
            Simple Usage
          </h2>

          <Code lang="typescript" className="mt-1rem" title="styler.jsx">
            {`import tenoxui, { defineProps, makeStyles } from "tenoxui";
import { styles } from "./style";

export function styler() {
  // new props needed
  defineProps({
    d: "display",
  });
  makeStyles(styles);
  tenoxui();
}
`}
          </Code>
          <Code lang="typescript" className="mt-1rem" title="useStyles.jsx">
            {`import { useLayoutEffect } from "react";
import { styler } from "../utils/styler";

export const useStyles = (...hooks: any[]) => {
  useLayoutEffect(() => {
    styler();
  }, [hooks]);
};
`}
          </Code>
        </Tip>
        <Tip className="mt-2rem" variant="tip" title="Just Tips" id="dos">
          <h2 className="text-3xl font-semibold tracking-tight">Tips</h2>
        </Tip>
        <Tip className="mt-2rem" variant="warning" title="Did you get warning?">
          <h2 className="text-3xl font-semibold tracking-tight">Its warning</h2>
          <Code
            lang="javascript"
            className="mt-1rem"
            codeOnly
          >{`import tenoxui from "tenoxui";`}</Code>
        </Tip>
        <DocLink
          prev="/"
          prevIcon="home"
          prevTitle="Overview"
          next="/docs/cli"
          nextTitle="CLI Integration"
          nextIcon="terminal"
        />
      </section>
    </>
  );
};

export default GetStarted;
