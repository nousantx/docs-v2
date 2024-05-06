import Code from "../components/Code";
import DocLink from "../components/DocsNavigation";
import Section from "../components/Section";
import Tip from "../components/Tip";
import { useStyles } from "../hooks/useStyles";

const GetStarted = () => {
  useStyles();
  return (
    <>
      <Section>
        <h1 id="start">Get Started</h1>

        <p className="paragraph mt-8px">
          TenoxUI CSS is a utility-first css framework that work using DOM to
          manipulate the styles into element by its classname, like{" "}
          <code>d-flex</code>, <code>mt-10px</code>, <code>bg-#ccf654</code> and
          so on. So, it will slice the classname into two pieces, first is the
          type, and second is the value. TenoxUI will works like this :
        </p>

        <Code
          lang="javascript"
          codeOnly
          className="mv-1rem"
        >{`{type}-{value}`}</Code>

        <p className="paragraph">
          What's make tenoxui different from other css framework? tenoxui is not
          using defined classname like <code>m-1</code>, <code>p-8</code>,{" "}
          <code>container</code> and more that already have defined value, like{" "}
          <code>m-1</code> will apply <code>margin: 2px;</code> and so on.
          Instead, tenoxui using real value that will applied to the element,
          like{" "}
          <code>
            p-<span className="primary">2rem</span>
          </code>
          ,{" "}
          <code>
            mt-<span className="primary">10px</span>
          </code>
          ,{" "}
          <code>
            bg-<span className="primary">#ccf654</span>
          </code>
          , and more.
        </p>

        <h2 id="installation" className="mt-2.5rem">
          Installation
        </h2>

        <p className="paragraph mt-8px">
          There's several ways to add tenoxui to your project :
        </p>

        <h3 className="text-lg mt-1.5rem">Using NPM</h3>

        <Code
          lang="shell"
          title="NPM"
          className="mt-8px"
        >{`npm i tenoxui --save-dev`}</Code>

        <h3 className="text-lg mt-1.5rem">Using NPM</h3>

        <Code
          lang="html"
          title="HTML"
          isWrap
          className="mt-8px"
        >{`<script src="https://cdn.jsdelivr.net/npm/tenoxui"></script>`}</Code>

        <h2 id="configuration" className="mt-2.5rem">
          Configuration
        </h2>

        <p className="paragraph mt-8px">
          How to configure tenoxui css framework with your project :
        </p>

        <h3 className="text-lg mt-1.5rem">HTML</h3>

        <p className="paragraph mt-8px">
          There's no specific configuration in html file, just include the
          tenoxui file or call <code>tenoxui</code> function to apply the styles
        </p>

        <Code
          lang="html"
          title="index.html"
          showNumber
          className="mt-8px"
        >{`<body class="bg-#0d0d0d tc-white">
  <h1 class="tc-#ccf654">Hello World!</h1>
  <!-- tenoxui script -->
  <script src="path/to/tenoxui"></script>
</body>`}</Code>

        <p className="pl-1rem mt-8px">Or</p>

        <Code
          lang="html"
          title="index.html"
          showNumber
          className="mt-8px"
        >{`<!DOCTYPE html>
<html>
  <head>
    <title>TenoxUI Page</title>
    <!-- tenoxui script -->
    <script src="path/to/tenoxui"></script>
  </head>
  <body class="bg-#0d0d0d tc-white">
    <h1 class="tc-#ccf654">Hello World!</h1>
    <!-- tenoxui script -->
    <script>
      // apply tenoxui
      tenoxui();
    </script>
  </body>
</html>`}</Code>

        <h3 className="text-lg mt-1.5rem">React JS</h3>

        <p className="paragraph mt-8px">
          There's no specific configuration in html file, just include the
          tenoxui file or call <code>tenoxui</code> function to apply the styles
        </p>

        <Code
          lang="javascript"
          title="App.jsx"
          showNumber
          className="mt-8px"
        >{`import { useLayoutEffect } from "react";
import tenoxui from "tenoxui";

const App = () => {
  useLayoutEffect(()=>{
    tenoxui();
  }, []);
  return <h1 className="tc-#ccf654">Hello World!</h1>;
}

export default App;`}</Code>

        <Tip variant="info" className="mv-1rem">
          <p className="paragraph mt-8px">
            tenoxui is using DOM to manipulate the style. So, you can use{" "}
            <code>useEffect</code> or <code>useLayoutEffect</code> to ensure the
            DOM is applies correctly, you can choose to apply after the DOM or
            before it. I recommend to use <code>useLayoutEffect</code> instead.
            Trust me.
          </p>
        </Tip>

        <DocLink
          edit="/docs/get-started"
          prev="/docs/intro"
          prevIcon="flag"
          prevTitle="Intro"
          next="/docs/intro"
          nextTitle="CLI Integration"
          nextIcon="terminal"
        />
      </Section>
    </>
  );
};

export default GetStarted;
