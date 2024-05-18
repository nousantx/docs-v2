import { makeStyles } from "tenoxui";
import Code from "../../components/Code";
import CodeOutput from "../../components/CodeOutput";
import DocLink from "../../components/DocsNavigation";
import Section from "../../components/Section";
import { useStyles } from "../../hooks/useStyles";

const AspectRatio = () => {
  useStyles();

  makeStyles({
    ".square": "ratio-[1/1]",
  });

  return (
    <Section>
      <h1>Aspect Ratio</h1>

      <h2 id="about" className="mt-2.5rem">
        About
      </h2>

      <p className="paragraph mt-8px">
        The <code>aspect-ratio</code> property in CSS helps control the
        proportion of an element's width to its height. It's like a simple way
        to set the aspect ratio of a box, making it easy to maintain the right
        shape, especially for responsive designs.
      </p>

      <p className="paragraph mt-8px">
        You can use <code className="primary">ratio-{"{value}"}</code> to set
        aspect-ratio property. Here's the example :
      </p>

      <Code
        lang="html"
        className="mt-1rem"
      >{`<div class="ratio-[1/1] ..."></div>
<div class="ratio-[16/9] ..."></div>
<div class="ratio-[4/5] ..."></div>
<div class="ratio-[2/1] ..."></div>`}</Code>

      <CodeOutput>
        <div className="flex-center gap-1rem flex-wrap">
          <div className="ratio-1/1 bg-$accent-500 h-100px flex-center tc-$neutral-100 fw-500 text-sm br-4px">
            1 / 1
          </div>
          <div className="ratio-[16/9] bg-$accent-500 h-100px flex-center tc-$neutral-100 fw-500 text-sm br-4px">
            16 / 9
          </div>
          <div className="ratio-[4/5] bg-$accent-500 h-100px flex-center tc-$neutral-100 fw-500 text-sm br-4px">
            4 / 5
          </div>
          <div className="ratio-[2/1] bg-$accent-500 h-100px flex-center tc-$neutral-100 fw-500 text-sm br-4px">
            2 / 1
          </div>
        </div>
      </CodeOutput>

      <p className="paragraph mt-1.5rem">
        Above is just a few examples, you can just add your own ratio, maybe{" "}
        <code>ratio-{"[10/1]"}</code>, <code>ratio-{"[50/10]"}</code>, and so
        on.
      </p>

      <h2 id="custom-style" className="mt-2.5rem">
        Working with Alias
      </h2>

      <p className="paragraph mt-8px">
        You can use <code>makeStyles</code> function to store your aspect ratio
        size within classnames, here is the example :
      </p>

      <Code lang="javascript" className="mt-1.5rem">
        {`makeStyles({
  ".square": "ratio-[1/1]",
  ".video": "ratio-[16/9]",
})`}
      </Code>

      <p className="paragraph mv-1rem">
        And then you can use it inside your element classnames :
      </p>

      <Code lang="html">
        {`<div class="square ..."></div>
<div class="video ..."></div>`}
      </Code>

      <CodeOutput>
        <div className="flex-center flex-wrap gap-1rem">
          <div className="ratio-1/1 bg-$accent-500 h-100px flex-center tc-$neutral-100 fw-500 text-sm br-4px">
            Square
          </div>
          <div className="ratio-[16/9] bg-$accent-500 h-100px flex-center tc-$neutral-100 fw-500 text-sm br-4px">
            Video
          </div>
        </div>
      </CodeOutput>

      <DocLink
        edit="/docs/classes/AspectRatio"
        prev="/docs/classes"
        prevIcon="style"
        next="/docs/classes/background"
        nextIcon="wallpaper"
      />
    </Section>
  );
};

export default AspectRatio;
