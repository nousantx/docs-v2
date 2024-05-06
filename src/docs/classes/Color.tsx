import Code from "../../components/Code";
import CodeOutput from "../../components/CodeOutput";
import DocLink from "../../components/DocsNavigation";
import Section from "../../components/Section";
import Tip from "../../components/Tip";
import { useStyles } from "../../hooks/useStyles";

const Color = () => {
  useStyles();

  return (
    <Section>
      <h1>Color</h1>

      <h2 id="about" className="mt-2.5rem">
        About
      </h2>

      <p className="paragraph mt-8px">
        The color property in CSS is used to specify the color of text content.
      </p>

      <h2 id="types-and-property" className="mt-2.5rem">
        Types
      </h2>

      <p className="paragraph mt-8px">
        You can use <code className="primary">tc-{"{value}"}</code> type, and it
        will set the <code>color</code> property.
      </p>

      <Tip variant="danger" className="mt-1rem">
        <p className="paragraph mt-8px">
          Of course you can still define your desired type to trigger color
          property, like this :
        </p>
        <Code lang="javascript" className="mt-1rem">
          {`defineProps({
  "my-col": "color"
})`}
        </Code>
        <p className="paragraph mv-16px">
          And then you can use inside your element classname :
        </p>
        <Code lang="html">{`<p class="my-col-#f00">Red Color</p>`}</Code>
      </Tip>

      <h2 id="Usage Example" className="mt-2.5rem">
        Usage Example
      </h2>

      <p className="paragraph mt-8px">
        You can use all color values you desire, if can't, wrap your value
        inside <code>{"{}"}</code>, and it will generated the value for you.
        Let's see how it works :
      </p>

      <Code
        lang="html"
        className="mt-1rem"
        isWrap
      >{`<p class="tc-hotpink">color name</p>
<p class="tc-#f43f5e">hex color</p>
<p class="tc-{rgb(16\\_185\\_129)}">rgb color</p>
<p class="tc-{rgb(79\\_70\\_229\\_/\\_0.8)}">rgba color</p>
<p class="tc-{hsl(45,\\_93%,\\_47%)}">hsl color</p>
<p class="tc-{hwb(173\\_8%\\_28%)}">hwb color</p>`}</Code>

      <CodeOutput>
        <div className="flex-center fd-column">
          <p className="tc-hotpink">color name</p>
          <p className="tc-#f43f5e">hex color</p>
          <p className="tc-{rgb(16\_185\_129)}">rgb color</p>
          <p className="tc-{rgb(79\_70\_229\_/\_0.8)}">rgba color</p>
          <p className="tc-{hsl(45,\_93%,\_47%)}">hsl color</p>
          <p className="tc-{hwb(173\_8%\_28%)}">hwb color</p>
        </div>
      </CodeOutput>

      <Tip className="mt-1.5rem">
        <p className="paragraph mt-8px">
          Code above is showed how to use values with space, you can define the
          value inside of <code>{"{}"}</code>, and if you need space, you can
          add <code>\_</code>, it will converted into a space.
        </p>
      </Tip>

      <DocLink
        edit="/docs/classes/Color"
        prev="/docs/classes/border"
        prevIcon="border_style"
        next="/docs/classes/border"
        nextIcon="border_style"
      />
    </Section>
  );
};

export default Color;
