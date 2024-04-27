import { useStyles } from "../hooks/useStyles";
import { Link } from "react-router-dom";
function Home() {
  useStyles();

  return (
    <section className="p-2rem flex-center fd-column h-mn-100vh">
      <header className="flex-center fd-column">
        <div className="box-4rem relative flex-center mb-1rem">
          <i className="txi ti-vtx_part_1 tc-[neutral-900] absolute text-7xl"></i>
          <i className="txi ti-vtx_part_2 tc-[accent-500] absolute text-7xl"></i>
        </div>
        <h1 className="text-2xl font-semibold">
          tenoxUI <span className="tc-[neutral-500]">/</span>{" "}
          <span className="tc-[accent-500]">CSS</span>
        </h1>
        <p className="text-base leading-7 tc-[neutral-700]">
          A CSS Framework without CSS file 🗿 It's fast, really.
        </p>
      </header>
      <div className="flex-center gap-1rem mt-2rem">
        <Link
          to="/docs/get-started"
          className="btn btn-primary text-base bg-[accent-500] tc-[neutral-100] ph-12px pv-4px br-100px"
        >
          Get Started
        </Link>
        <Link
          target="_blank"
          to="https://github.com/tenoxui/css"
          className="btn btn-secondary flex-center gap-6px text-base bw-1px bs-solid bc-[neutral-900] tc-[neutral-900] ph-12px pv-4px br-100px"
        >
          GitHub
          <i className="txi ti-github_square"></i>
        </Link>
      </div>
    </section>
  );
}

export default Home;
