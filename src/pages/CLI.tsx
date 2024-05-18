import Code from "../components/Code";
import DocLink from "../components/DocsNavigation";
import Section from "../components/Section";
import { TabItem, Tabs } from "../components/Tabs";
import { useStyles } from "../hooks/useStyles";

const CLI = () => {
  useStyles();
  return (
    <>
      <Section className="pt-2rem">
        <Tabs>
          <TabItem
            title={
              <p className="flex-center gap-4px fw-400 fs-14px tc-inherit">
                <span className="ms-sharp fs-16px">terminal</span>Greet
              </p>
            }
          >
            <Code lang="javascript" codeOnly>
              {`console.log("NOuSantx Was Here!")`}
            </Code>
          </TabItem>
          <TabItem
            title={
              <p className="flex-center gap-4px fw-400 fs-14px tc-inherit">
                <span className="ms-sharp fs-16px">barcode</span>Code
              </p>
            }
          >
            <span className="ms-sharp fs-3rem tc-$accent-500">qr_code</span>
            <h2 className="mt-1rem">Let Features</h2>
            <p className="tc-$neutral-800 ta-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dolorum nam labore alias mollitia?
            </p>
          </TabItem>
          <TabItem title={<span className="ms-sharp fs-16px">add</span>}>
            <h2>Let's add new content here</h2>
            <p className="tc-$neutral-800 ta-justify">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur dolorum nam labore alias mollitia?
            </p>
            <button className="btn ph-12px pv-4px bg-$primary-500 mt-1rem tc-$neutral-100 text-base br-4px">
              More
            </button>
          </TabItem>
        </Tabs>
        <DocLink
          prev="/"
          prevIcon="home"
          prevTitle="Home"
          next="/tenox"
          nextIcon="dashboard"
          nextTitle="Semua Tenox"
        />
      </Section>
    </>
  );
};

export default CLI;
