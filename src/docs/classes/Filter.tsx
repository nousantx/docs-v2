import { makeStyles } from "tenoxui";
import Code from "../../components/Code";
import CodeOutput from "../../components/CodeOutput";
import DocLink from "../../components/DocsNavigation";
import Section from "../../components/Section";
import { useStyles } from "../../hooks/useStyles";
import { useLayoutEffect } from "react";

const Filter = () => {
  useStyles();

  useLayoutEffect(() => {
    makeStyles({
      ".filter-showcase":
        "br-8px h-150px ratio-[16/9] bg-size-cover bg-loc-center bg-img-[url(https://images.unsplash.com/photo-1533805994737-558461dcb28e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb25lc2lhfGVufDB8fDB8fHww)]",
    });
  }, []);

  return (
    <Section>
      <h1>Filter</h1>

      <h2 id="about" className="mt-2.5rem">
        About
      </h2>

      <p className="paragraph mt-8px">
        The <code>filter</code> property in CSS allows you to apply graphical
        effects like blurring or color shifting to elements. It's like adding a
        special filter over an image or text to change its appearance.
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
      >{`<div class="blur-3.7px ..."></div>
<div class="grayscale-100% ..."></div>`}</Code>

      <CodeOutput>
        <div className="flex-wrap gap-1rem">
          <div className="blur-3.7px filter-showcase"></div>
          <div className="grayscale-100% filter-showcase"></div>
        </div>
      </CodeOutput>

      <DocLink
        edit="/docs/classes/Display"
        prev="/docs/classes/display"
        prevIcon="fullscreen"
        next="/docs/classes/flexbox"
        nextTitle="Flexbox"
        nextIcon="flex_wrap"
      />
    </Section>
  );
};

export default Filter;
