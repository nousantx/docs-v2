import Code from "../../components/Code";
import DocLink from "../../components/DocsNavigation";
import Section from "../../components/Section";
import { useStyles } from "../../hooks/useStyles";

const Display = () => {
  useStyles();

  return (
    <Section>
      <h1>Display</h1>

      <h2 id="about" className="mt-2.5rem">
        About
      </h2>

      <p className="paragraph mt-8px">
        The <code>display</code> property in CSS is used to control the layout
        behavior of an element. It determines how an element is rendered on the
        web page.
      </p>

      <h2 id="types-and-property" className="mt-2.5rem">
        Types
      </h2>

      <p className="paragraph mt-8px">
        You can use <code className="primary">d-{"{value}"}</code> or{" "}
        <code className="primary">display-{"{value}"}</code> type, and it will
        set the <code>display</code> property.
      </p>

      <h2 id="Usage Example" className="mt-2.5rem">
        Usage Example
      </h2>

      <p className="paragraph mt-8px">
        There's a simple usage of it, let's see how it works :
      </p>

      <Code
        lang="html"
        className="mt-1rem"
        isWrap
      >{`<div class="d-flex ..."></div>
<div class="d-[inline-block] ..."></div>`}</Code>

      <DocLink
        edit="/docs/classes/Display"
        prev="/docs/classes/cursor"
        prevIcon="mouse"
        next="/docs/classes/filter"
        nextIcon="tune"
      />
    </Section>
  );
};

export default Display;
