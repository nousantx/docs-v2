import Code from "../../components/Code";
import CodeOutput from "../../components/CodeOutput";
import DocLink from "../../components/DocsNavigation";
import Section from "../../components/Section";
import { useStyles } from "../../hooks/useStyles";

const Background = () => {
  useStyles();

  return (
    <Section>
      <h1>Background</h1>

      <h2 id="about" className="mt-2.5rem">
        About
      </h2>

      <p className="paragraph mt-8px">
        The <code>background</code> property in CSS lets you control the
        background of an element. You can set things like the background color,
        image, and position all in one place.
      </p>

      <h2 id="types-and-property" className="mt-2.5rem">
        Types
      </h2>

      <p className="paragraph mt-8px">Available types and properties :</p>

      <ul className="list-decimal list-inside docs-list mt-1rem">
        <li>
          <code className="primary">bg</code> : set <code>background</code>{" "}
          property
        </li>
        <li>
          <code className="primary">bg-img</code> : set{" "}
          <code>background-image</code> property
        </li>
        <li>
          <code className="primary">bg-size</code> : set{" "}
          <code>background-size</code> property
        </li>
        <li>
          <code className="primary">bg-clip</code> : set{" "}
          <code>background-clip</code> property
        </li>
        <li>
          <code className="primary">bg-repeat</code> : set{" "}
          <code>background-repeat</code> property
        </li>
        <li>
          <code className="primary">bg-loc</code> : set{" "}
          <code>background-position</code> property
        </li>
        <li>
          <code className="primary">bg-loc-x</code> : set{" "}
          <code>background-position-x</code> property
        </li>
        <li>
          <code className="primary">bg-loc-y</code> : set{" "}
          <code>background-position-y</code> property
        </li>
        <li>
          <code className="primary">bg-blend</code> : set{" "}
          <code>background-blend</code> property
        </li>
      </ul>

      <h2 id="Usage Example" className="mt-2.5rem">
        Usage Example
      </h2>

      <p className="paragraph mt-8px">Let's see how it works :</p>

      <Code
        lang="html"
        className="mt-1rem"
        isWrap
      >{`<div class="box-100px bg-img-{url(...)} bg-size-cover bg-loc-center"></div>`}</Code>

      <CodeOutput>
        <div className="box-100px bg-img-[url(https://tenoxui.web.app/img/tenoxui.svg)] bg-size-cover bg-loc-center border bw-1px bc-{neutral-300} br-8px"></div>
      </CodeOutput>

      <p className="paragraph mt-1.5rem">
        Code above is showed how to add background image to the element using
        tenoxui classname.
      </p>

      <DocLink
        edit="/docs/classes/Background"
        prev="/docs/classes/ratio"
        prevTitle="Aspect Ratio"
        prevIcon="aspect_ratio"
        next="/docs/classes/border"
        nextIcon="border_style"
      />
    </Section>
  );
};

export default Background;
