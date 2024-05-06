import { makeStyles } from "tenoxui";
import Code from "../../components/Code";
import CodeOutput from "../../components/CodeOutput";
import DocLink from "../../components/DocsNavigation";
import Section from "../../components/Section";
import { useStyles } from "../../hooks/useStyles";
import Tip from "../../components/Tip";
import { Link } from "react-router-dom";

const Border = () => {
  useStyles();

  makeStyles({
    ".square": "ratio-{1/1}",
  });

  return (
    <Section>
      <h1>Border</h1>

      <h2 id="about" className="mt-2.5rem">
        About
      </h2>

      <p className="paragraph mt-8px">
        The <code>border</code> property in CSS allows you to create borders
        around elements.
      </p>

      <h2 id="types-and-property" className="mt-2.5rem">
        Types
      </h2>

      <p className="paragraph mt-8px">Available types and properties :</p>

      <ul className="list-decimal list-inside docs-list mt-1rem">
        <li>
          <code className="primary">border</code> : <code>border</code> property
        </li>
        <li>
          <code className="primary">bc</code> : <code>border-color</code>{" "}
          property
        </li>
        <li>
          <code className="primary">bs</code> : <code>border-style</code>{" "}
          property
        </li>
        <li>
          <code className="primary">bw</code> : <code>border-width</code>{" "}
          property
        </li>
        <li>
          <code className="primary">bw-top</code> :{" "}
          <code>border-top-width</code> property
        </li>
        <li>
          <code className="primary">bw-left</code> :{" "}
          <code>border-left-width</code> property
        </li>
        <li>
          <code className="primary">bw-bottom</code> :{" "}
          <code>border-bottom-width</code> property
        </li>
        <li>
          <code className="primary">bw-right</code> :{" "}
          <code>border-right-width</code> property
        </li>
        <li>
          <code className="primary">br</code> : <code>border-radius</code>{" "}
          property
        </li>
        <li>
          <code className="primary">radius-tl</code> :{" "}
          <code>border-top-left-radius</code> property
        </li>
        <li>
          <code className="primary">radius-bl</code> :{" "}
          <code>border-bottom-left-radius</code> property
        </li>
        <li>
          <code className="primary">radius-tr</code> :{" "}
          <code>border-top-right-radius</code> property
        </li>
        <li>
          <code className="primary">radius-br</code> :{" "}
          <code>border-bottom-right-radius</code> property
        </li>
        <li>
          <code className="primary">radius-top</code> :{" "}
          <code>border-top-left-radius</code> and{" "}
          <code>border-top-right-radius</code> property
        </li>
        <li>
          <code className="primary">radius-left</code> :{" "}
          <code>border-top-left-radius</code> and{" "}
          <code>border-bottom-left-radius</code> property
        </li>
        <li>
          <code className="primary">radius-bottom</code> :{" "}
          <code>border-bottom-left-radius</code> and{" "}
          <code>border-bottom-right-radius</code> property
        </li>
        <li>
          <code className="primary">radius-right</code> :{" "}
          <code>border-top-right-radius</code> and{" "}
          <code>border-bottom-right-radius</code> property
        </li>
      </ul>

      <Tip variant="info" className="mv-1.5rem">
        <p className="mt-8px paragraph">
          TenoxUI still under development. So, maybe there will be removal for
          some properties which rarely used, like <code>radius-tl</code>,{" "}
          <code>bs-top</code> and so on. But, you can still define it yourself
          using{" "}
          <Link to="/docs/function/define-props" className="underline">
            defineProps function
          </Link>
          .
        </p>
      </Tip>

      <h2 id="usage-example" className="mt-2.5rem">
        Usage Example
      </h2>

      <p className="paragraph mt-8px">
        Here is a few examples dealing with border using tenoxui :
      </p>

      <h3 className="text-lg mt-1rem">Simple button</h3>

      <p className="paragraph">Make a simple button :</p>

      <Code
        lang="html"
        className="mt-1rem"
        isWrap
      >{`<div class="... bs-solid bw-2px br-1rem bc-[...]">
  Hello
</div>`}</Code>

      <CodeOutput>
        <div className="ph-1rem pv-8px bs-solid bw-2px br-1000px bc-[accent-500]">
          Hello
        </div>
      </CodeOutput>

      <h3 className="text-lg mt-1rem">Working with radius</h3>

      <p className="paragraph">How to use radius for only one corner side :</p>

      <Code
        lang="html"
        className="mt-1rem"
        isWrap
      >{`<div class="radius-tl-1rem radius-br-1rem ..."></div>`}</Code>

      <CodeOutput>
        <div className="box-100px radius-tl-1rem radius-br-1rem bw-2px bs-solid bc-[accent-500]"></div>
      </CodeOutput>

      <h3 className="text-lg mt-1rem">Working with radius</h3>

      <p className="paragraph">How to use radius for only one side :</p>

      <Code
        lang="html"
        className="mt-1rem"
        isWrap
      >{`<div class="radius-top-1rem ..."></div>`}</Code>

      <CodeOutput>
        <div className="box-100px radius-top-1rem bw-2px bs-solid bc-[accent-500]"></div>
      </CodeOutput>

      <DocLink
        edit="/docs/classes/Border"
        prev="/docs/classes/background"
        prevIcon="wallpaper"
        next="/docs/classes/color"
        nextIcon="palette"
      />
    </Section>
  );
};

export default Border;
