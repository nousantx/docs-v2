import Section from "../../components/Section";
import { useStyles } from "../../hooks/useStyles";
import DocLink from "../../components/DocsNavigation";

const Flex = () => {
  useStyles();
  return (
    <Section>
      <h1>Flexbox</h1>
      <p className="text mt-8px">
        Flexbox is a one-dimensional layout system that we can use to create a
        row or a column axis layout. It makes our life easier to design and
        build responsive web pages without having to use tricky hacks and a lot
        of float and position properties in our CSS code.
      </p>

      <h2 className="mt-2rem">Types and Properties</h2>

      <p className="text mt-8px">All flexbox type and properties :</p>

      <h3 id="flex-type" className="mt-1.5rem">
        Flex types
      </h3>

      <ul className="list-decimal list-inside docs-list mt-1rem">
        <li>
          <code className="primary">d</code>,{" "}
          <code className="primary">display</code> : Set <code>display</code>{" "}
          property. Use <code className="primary">d-flex</code> to set display
          to <code>flex</code>
        </li>
        <li>
          <code className="primary">flex</code> : <code>flex</code> property
          with value of <code>flex: {"{value}"};</code>
        </li>
        <li>
          <code className="primary">auto-flex</code> : <code>flex</code>{" "}
          property with value of <code>flex: {"1 1 {value}"};</code>
        </li>
        <li>
          <code className="primary">flex-grow</code> : Set{" "}
          <code>flex-grow</code> property
        </li>
        <li>
          <code className="primary">flex-basis</code> : Set{" "}
          <code>flex-basis</code> property
        </li>
        <li>
          <code className="primary">flex-shrink</code> : Set{" "}
          <code>flex-shrink</code> property
        </li>
        <li>
          <code className="primary">flex-wrap</code> : Set{" "}
          <code>flex-wrap</code> property
        </li>
      </ul>

      <h3 id="align-type" className="mt-1.5rem">
        Align types
      </h3>
      <ul className="list-decimal list-inside docs-list mt-1rem">
        <li>
          <code className="primary">ai</code> : Set <code>align-items</code>{" "}
          property
        </li>
        <li>
          <code className="primary">ac</code> : Set <code>align-content</code>{" "}
          property
        </li>
      </ul>
      <h3 id="justify-type" className="mt-1.5rem">
        Justify types
      </h3>
      <ul className="list-decimal list-inside docs-list mt-1rem">
        <li>
          <code className="primary">jc</code> : Set <code>justify-content</code>{" "}
          property
        </li>
        <li>
          <code className="primary">ji</code> : Set <code>justify-items</code>{" "}
          property
        </li>
      </ul>

      <DocLink
        edit="/docs/classes/Flex"
        prev="/docs/classes/filter"
        prevIcon="tune"
        next="/docs/classes/flexbox"
        nextTitle="Flexbox"
        nextIcon="flex_wrap"
      />
    </Section>
  );
};

export default Flex;
