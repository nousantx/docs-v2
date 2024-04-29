import Section from "../components/Section";
import DocLink from "../components/DocsNavigation";
import Code from "../components/Code";
import { useStyles } from "../hooks/useStyles";
import CodeOutput from "../components/CodeOutput";

const Install = () => {
  useStyles();
  return (
    <Section>
      <h1>Installation</h1>

      <p>
        Add tenoxui to your project. You can install it using npm or simply
        attach the file hosted on CDN.
      </p>

      <h2 id="installation" className="mt-2rem">
        Add TenoxUI
      </h2>

      <p id="npm" className="text-lg font-medium tc-[neutral-900] mt-1.6rem">
        Using NPM
      </p>

      <Code
        className="mv-16px"
        lang="shell"
        title="shell"
      >{`npm i tenoxui --save-dev`}</Code>
      <p className="pl-1rem">Or :</p>
      <Code
        className="mt-16px"
        lang="shell"
        title="shell"
      >{`yarn add tenoxui -D`}</Code>

      <p id="cdn" className="text-lg font-medium tc-[neutral-900] mt-1.6rem">
        Using CDN
      </p>

      <Code className="mt-8px" lang="html" title="html">{`<script 
  src="https://cdn.jsdelivr.net/npm/tenoxui">
</script>`}</Code>

      <h2 id="react-tui" className="mt-2rem">
        React Configuration
      </h2>

      <p>First you need to import tenoxui </p>

      <Code lang="javascirpt" title="App.jsx">
        {`import tenoxui from "tenoxui";`}
      </Code>

      <Code
        className="mt-8px"
        lang="javascript"
        title="App.jsx"
        showNumber
      >{`import { useLayoutEffect } from "react";
import tenoxui from "tenoxui";

const App = () => {
  // applying tenoxui using \`useLayoutEffect\`
  useLayoutEffect(() => {
    tenoxui();
  }, []);

  return (
    <div className="box-100px bg-black br-4px">
      <h1 className="tc-#ccf654 fs-1.3rem">Hello, Cool!</h1>
    </div>
  );
};

export default App;`}</Code>

      <CodeOutput title="Simple box tenoxui" className="mt-8px">
        <div className="box-100px bg-black br-4px p-10px">
          <h1 className="tc-#ccf654 fs-1.3rem">Hello, Cool!</h1>
        </div>
      </CodeOutput>

      <DocLink
        edit="/pages/Install.tsx"
        prev="/"
        prevIcon="home"
        prevTitle="Home"
        next="/docs/get-started"
        nextIcon="flag"
      />
    </Section>
  );
};

export default Install;
