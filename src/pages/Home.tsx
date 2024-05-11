import DocLink from "../components/DocsNavigation";
import Meta from "../components/Helmet";
import Section from "../components/Section";
import { useStyles } from "../hooks/useStyles";
import { Link } from "react-router-dom";
function Home() {
  useStyles();
  return (
    <Section className="ph-2rem">
      <Meta title="Home" />
      <article className="flex-center fd-column h-100vh">
        <header className="flex-center ta-center fd-column">
          <div className="box-4rem relative flex-center mb-1rem">
            <i className="txi ti-vtx_part_1 tc-{neutral-900} absolute text-7xl"></i>
            <i className="txi ti-vtx_part_2 tc-{accent-500} absolute text-7xl"></i>
          </div>
          <h1 className="text-2xl font-semibold">
            tenoxUI <span className="tc-{neutral-500}">/</span>{" "}
            <span className="tc-{accent-500}">CSS</span>
          </h1>
          <p className="text-base leading-7 tc-{neutral-700}">
            A CSS Framework without CSS file.{" "}
            <code className="tc-{accent-500} bg-{neutral-200} ph-6px br-2px fw-500">
              2k
            </code>{" "}
            gzip njir 🗿
          </p>
        </header>
        <div className="flex-center gap-1rem mt-1rem">
          <Link
            to="/docs/start"
            className="btn btn-primary text-base flex-center gap-6px bg-{accent-500} tc-{neutral-100} ph-12px pv-4px br-100px bw-1px"
          >
            <span className="ms-sharp text-base">auto_stories</span>
            Get Started
          </Link>
          <Link
            target="_blank"
            to="https://github.com/tenoxui/css"
            className="btn btn-secondary flex-center gap-6px text-base bw-1px bs-solid bc-{neutral-900} tc-{neutral-900} ph-12px pv-4px br-100px fw-300"
          >
            <i className="txi ti-github_square"></i>
            Repository
          </Link>
        </div>
      </article>
      <DocLink
        next="/docs/intro"
        nextIcon="flag"
        edit="https://github.com/nousantx/docs-v2/tree/main/src/pages/Home.tsx"
      />
    </Section>
  );
}

export default Home;
