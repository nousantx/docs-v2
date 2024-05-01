import Section from "../components/Section";
import DocLink from "../components/DocsNavigation";
import Code from "../components/Code";
import CodeOutput from "../components/CodeOutput";

const Intro = () => {
  return (
    <Section>
      <h1 className="text-5xl">Welcome!!</h1>

      <h2 id="greet" className="mt-3.5rem">
        What is this?
      </h2>
      <p className="text mt-8px">
        TenoxUI is a Utility-First CSS Framework built for elevate web
        development by enhancing speed and efficiency by delivering various
        collection of utility-first classes.
      </p>

      <p className="text mt-1.5rem">
        TenoxUI not providing any defined class names such as <code>mt-1</code>,{" "}
        <code>h-12</code>, <code>d-flex</code>, and more. You make your own
        class from value you desired. So, instead of using defined value like
        that, you can use class names like <code>mt-6px</code>,{" "}
        <code>p-1.5rem</code>, <code>h-100svh</code>, and more.
      </p>

      <p className="text mt-1.5rem"></p>

      <h2 id="core-concept" className="mt-3.5rem">
        Core Concept
      </h2>

      <p className="text mt-8px">
        TenoxUI is a styling framework that work using DOM manipulation to apply
        the styles into element. It will pairing the type and value you want as
        style, like this :
      </p>

      <Code
        lang="javascript"
        codeOnly
        className="mv-16px"
      >{`{type}-{value}`}</Code>

      <p className="text">
        So, the possible values is unlimited, we're not defining any value, you
        will the one who will defining your own styles. The example is like this
        :
      </p>

      <Code
        lang="html"
        title="example"
        className="mt-1rem"
      >{`<h1 class="fs-2.3rem fw-800"> Hello World! </h1>`}</Code>

      <CodeOutput title="Output: Hello World!">
        <h1 className="fs-2.3rem fw-800">Hello World!</h1>
      </CodeOutput>

      <h3 className="mt-1.5rem">Breakdown</h3>
      <p className="text mt-8px">
        In the code above, it have <code>fs</code> class name, this is
        shorthand/type for set <code>font-size</code> property, it also has{" "}
        <code>2.3rem</code> as value, so it will set{" "}
        <code>font-size: 2.3rem;</code> for that element. As for <code>fw</code>{" "}
        type, this is shorthand for <code>font-weight</code> property.
      </p>

      <h2 id="first-example" className="mt-3.5rem">
        First Example
      </h2>

      <p className="text mt-8px">
        Let's take a look how this framework use the styles :
      </p>

      <Code lang="html" showNumber className="mt-8px">
        {`<div class="display-flex flex-parent-center gap-6px">
  <span class="ms-sharp fs-18px tc-[accent-500]">bubble_chart</span>
  <p class="fs-14px fw-500">It's Bubble</p>
</div>`}
      </Code>

      <CodeOutput>
        <div className="display-flex flex-parent-center gap-6px">
          <span className="ms-sharp fs-18px tc-[accent-500]">bubble_chart</span>
          <p className="fs-14px fw-500">It's Bubble</p>
        </div>
      </CodeOutput>

      <h3 className="mt-1.5rem">Code Breakdown :</h3>

      <ul className="list-decimal list-inside mt-16px">
        <li className="mt-8px paragraph">
          <span className="code tc-[accent-500]">display-flex</span> : Set{" "}
          <span className="code">display</span> property to{" "}
          <span className="code">flex</span>.
        </li>
        <li className="mt-8px paragraph">
          <span className="code tc-[accent-500]">flex-parent-center</span> :{" "}
          <span className="code">flex-parent-{"{value}"}</span> will set both{" "}
          <span className="code">align-items</span> and{" "}
          <span className="code">justify-content</span> property to have{" "}
          <span className="code">center</span> value.
        </li>
        <li className="mt-8px paragraph">
          <span className="code tc-[accent-500]">gap-6px</span> : Set{" "}
          <span className="code">gap</span> property value to{" "}
          <span className="code">6px</span>.
        </li>
        <li className="mt-8px paragraph">
          <span className="code tc-[accent-500]">ms-sharp</span> : Is a
          shorthand for{" "}
          <span className="code">google-material-symbols-sharp</span>.
        </li>
        <li className="mt-8px paragraph">
          <span className="code tc-[accent-500]">fs-18px</span>,{" "}
          <span className="code tc-[accent-500]">fs-14px</span> : Set{" "}
          <span className="code">font-size</span> property.
        </li>
        <li className="mt-8px paragraph">
          <span className="code tc-[accent-500]">tc-[accent-500]</span>,{" "}
          <span className="code">fs-14px</span> : Set{" "}
          <span className="code">color</span> property for icon, this is using{" "}
          square bracket <span className="code">[{" {value} "}]</span> that
          indicate the value is called from css variable{" "}
          <span className="code">--accent-500: {"color_value"};</span>
        </li>
        <li className="mt-8px paragraph">
          <span className="code tc-[accent-500]">fw-500</span> : Set{" "}
          <span className="code">font-weight</span> property to{" "}
          <span className="code">500</span>.
        </li>
      </ul>

      <p className="text mt-8px"></p>

      <DocLink
        prev="/"
        prevTitle="Home"
        prevIcon="home"
        next="/docs/installation"
        nextTitle="Installation"
        nextIcon="download"
      />
    </Section>
  );
};

export default Intro;
