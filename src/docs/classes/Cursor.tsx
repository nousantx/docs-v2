import Code from "../../components/Code";
import DocLink from "../../components/DocsNavigation";
import Section from "../../components/Section";
import Tip from "../../components/Tip";
import { useStyles } from "../../hooks/useStyles";

const Cursor = () => {
  useStyles();

  return (
    <Section>
      <h1>Cursor</h1>

      <h2 id="about" className="mt-2.5rem">
        About
      </h2>

      <p className="paragraph mt-8px">
        The <code>cursor</code> property in CSS allows you to specify the type
        of cursor to be displayed when hovering over an element.
      </p>

      <h2 id="types-and-property" className="mt-2.5rem">
        Types
      </h2>

      <p className="paragraph mt-8px">
        You can use <code className="primary">cursor-{"{value}"}</code> type,
        and it will set the <code>cursor</code> property.
      </p>

      <h2 id="Usage Example" className="mt-2.5rem">
        Usage Example
      </h2>

      <p className="paragraph mt-8px">Let's see how it works :</p>

      <Code
        lang="html"
        className="mt-1rem"
        isWrap
      >{`<button class="cursor-pointer ...">...</button>
<button class="cursor-[not-allowed] ...">...</button>`}</Code>

      <Tip className="mt-1rem">
        <p className="paragraph mt-8px">
          You can't use multi-words css value like <code>space-between</code>,{" "}
          <code>row-reverse</code>, and so on directly to the class. You need to
          wrap the value inside of a bracket <code>{"[]"}</code>, how it works :
        </p>

        <Code
          lang="html"
          className="mt-1rem"
          isWrap
        >{`<div class="fd-[row-reverse] jc-[space-between] ...">...</div>`}</Code>
      </Tip>

      <DocLink
        edit="/docs/classes/Cursor"
        prev="/docs/classes/color"
        prevIcon="palette"
        next="/docs/classes/display"
        nextIcon="fullscreen"
      />
    </Section>
  );
};

export default Cursor;
