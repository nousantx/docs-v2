import DocLink from "../components/DocsNavigation";
import Section from "../components/Section";
import { useStyles } from "../hooks/useStyles";

const Template = () => {
  useStyles();
  return (
    <Section>
      <h1>Template </h1>
      <p className="paragraph mt-8px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        est.
      </p>
      This is template page, you can make some section using this template
      <DocLink
        edit="/docs/Template" // file route from /src/
        prev="/docs/classes" // previous page slug
        prevTitle="Template Page" // previous link title
        prevIcon="chevron_left" // previous link icon
        next="/docs/classes/border" // next page slug
        nextTitle="Next Page" // next link title
        nextIcon="chevron_right" // next link icon
      />
    </Section>
  );
};

export default Template;
