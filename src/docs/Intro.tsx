import Section from "../components/Section";
import DocLink from "../components/DocsNavigation";
import Code from "../components/Code";
import CodeOutput from "../components/CodeOutput";

const Intro = () => {
  return (
    <Section className="h-100%">
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
        <code>h-12</code>, <code>container</code>, and more. You make your own
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
        the styles into element. It will pair the type and value from a
        classname as style, just like this :
      </p>

      <Code
        lang="javascript"
        codeOnly
        className="mv-16px"
      >{`{type}-{value}`}</Code>

      <p className="text">
        So, the possibilities of values is unlimited, we're not defining any
        value, you will the one who will defining your own styles. The example
        is like this :
      </p>

      <Code
        lang="html"
        title="example"
        className="mt-1rem"
      >{`<h1 class="fs-2.3rem fw-800">Hello World!</h1>`}</Code>

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
        {`<div class="d-flex flex-parent-center gap-6px">
  <!-- icon -->
  <span class="ms-sharp fs-18px tc-[accent-500]">
  bubble_chart
  </span>
  <!-- text -->
  <p class="fs-14px fw-500">It's Bubble</p>
</div>`}
      </Code>

      <CodeOutput>
        <div className="display-flex flex-parent-center gap-6px">
          <span className="ms-sharp fs-18px tc-[accent-500]">bubble_chart</span>
          <p className="fs-14px fw-500">It's Bubble</p>
        </div>
      </CodeOutput>

      <h3 className="mv-1.5rem">Code Breakdown :</h3>

      <ul className="docs-list list-decimal list-inside">
        <li>
          <code className="primary">d-flex</code> : Set <code>display</code>{" "}
          property to <code>flex</code>.
        </li>
        <li>
          <code className="primary">flex-parent-center</code> :{" "}
          <code>flex-parent-{"{value}"}</code> will set both{" "}
          <code>align-items</code> and <code>justify-content</code> property to
          have <code>center</code> value.
        </li>
        <li>
          <code className="primary">gap-6px</code> : Set <code>gap</code>{" "}
          property value to <code>6px</code>.
        </li>
        <li>
          <code className="primary">ms-sharp</code> : Is a shorthand for{" "}
          <a
            href="https://fonts.google.com/icons"
            target="_blank"
            className="code underline td-c-[accent-500]"
          >
            google-material-symbols-sharp
          </a>
          .
        </li>
        <li>
          <code className="primary">fs-18px</code>,{" "}
          <code className="primary">fs-14px</code> : Set <code>font-size</code>{" "}
          property.
        </li>
        <li>
          <code className="primary">tc-[accent-500]</code>, <code>fs-14px</code>{" "}
          : Set <code>color</code> property for icon, this is using square
          bracket <code>[{" {value} "}]</code> that indicate the value is called
          from css variable <code>--accent-500: {"color_value"};</code>
        </li>
        <li>
          <code className="primary">fw-500</code> : Set <code>font-weight</code>{" "}
          property to <code>500</code>.
        </li>
      </ul>

      <hr className="bg-[neutral-300] h-1px bdr-none mv-1.5rem d-none" />

      <p className="text mt-1.5rem">
        As you can see, all of the value is defined inside element class names,
        so it gives you more customization, just add your desired value and it
        will apllied to that element.
      </p>

      <DocLink
        edit="/docs/Intro"
        prev="/"
        prevTitle="Home"
        prevIcon="home"
        next="/docs/start"
        nextTitle="Get Started"
        nextIcon="auto_stories"
      />
    </Section>
  );
};

export default Intro;
