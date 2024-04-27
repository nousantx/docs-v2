import { useStyles } from "../hooks/useStyles";

const Footer = () => {
  useStyles();
  return (
    <footer className="w-mx-1440px mv-0 mh-auto p-2rem pb-4rem bg-[neutral-100] shadow-xl">
      <div className="flex jc-[sb] ai-[flex-start] gap-5rem flex-wrap fd-[max-lg]">
        <div className="flex fd-column ai-[flex-start]">
          <a href="/" className="flex center gap-4px">
            <h2 className="tc-[accent-500] text-2xl font-semibold tracking-tight">
              NOuSan<span className="font-medium tc-[neutral-900]">.tx</span>
            </h2>
          </a>
          <p className="mt-1.5rem tc-[neutral-800] lh-1.75rem tc-[neutral-900] w-mx-[sm-w]">
            Lorem ipsum dolor sit amet is always the best words. And don't
            forget to try TenoxUI CSS Framework, It's Fast! Dan jangan lupa
            sholat!
          </p>
          <div className="flex ai-center gap-1.25rem mt-2rem">
            <a
              href="https://linkedin.com/in/nousantx"
              aria-label="linkedin"
              className="flex center"
            >
              <i className="txi ti-linkedin fs-18px tc-[neutral-800] hover:text-slate-gray"></i>
            </a>
            <a
              href="https://github.com/nousantx"
              aria-label="github"
              className="flex center"
            >
              <i className="txi ti-github_square fs-18px tc-[neutral-800] hover:text-slate-gray"></i>
            </a>
            <a
              href="https://x.com/nousantx"
              aria-label="twitter_x"
              className="flex center"
            >
              <i className="txi ti-twitter_x fs-18px tc-[neutral-800] hover:text-slate-gray"></i>
            </a>
            <a
              href="https://instagram.com/nousantx"
              aria-label="instagram"
              className="flex center"
            >
              <i className="txi ti-instagram fs-18px tc-[neutral-800] hover:text-slate-gray"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-1 jc-[sb] gap-[lg-gap] flex-wrap">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-1.5rem tc-[neutral-900]">
              Other Projects
            </h3>
            <ul>
              <li className="footer-link hover:text-slate-gray">
                <a target="_blank" href="https://github.com/tenoxui/css">
                  TenoxUI CSS Framework
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a target="_blank" href="https://github.com/tenoxui/cli">
                  TenoxUI CLI
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a target="_blank" href="https://tenoxui.web.app">
                  TenoxUI Docs
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a target="_blank" href="https://cliffui.web.app">
                  Cliff UI Components
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a
                  target="_blank"
                  href="https://github.com/nousantx/React-Styler"
                >
                  React Styler
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-1.5rem tc-[neutral-900]">
              Try TenoxUI /css
            </h3>
            <ul>
              <li className="footer-link hover:text-slate-gray">
                <a
                  target="_blank"
                  href="https://github.com/nousantx/tui-template-react"
                >
                  React JSX/TSX
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a
                  target="_blank"
                  href="https://github.com/nousantx/tui-template-vue"
                >
                  VueJS Template
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a
                  target="_blank"
                  href="https://github.com/nousantx/tui-template-svelte"
                >
                  Svelte Kit
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a
                  target="_blank"
                  href="https://github.com/nousantx/tui-template-solid"
                >
                  SolidJS Template
                </a>
              </li>
              <li className="footer-link hover:text-slate-gray">
                <a
                  target="_blank"
                  href="https://github.com/nousantx/Portfolio-pug-design"
                >
                  Pug Template
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-1.5rem tc-[neutral-900]">
              Get In Touch
            </h3>
            <ul>
              <li className="mt-0.75rem fs-16px fw-300 tc-[neutral-800] lh-1.5 tc-[neutral-800] flex ai-center gap-12px">
                <span className="material-symbols-rounded fs-20px">mail</span>
                nousantx@gmail.com
              </li>
              <li className="mt-0.75rem fs-16px fw-300 tc-[neutral-800] lh-1.5 tc-[neutral-800] flex ai-center gap-12px">
                <span className="material-symbols-rounded fs-20px">
                  smartphone
                </span>
                +62 815 151 939 72
              </li>
              <li className="mt-0.75rem fs-16px fw-300 tc-[neutral-800] lh-1.5 tc-[neutral-800] flex ai-center gap-12px">
                <span className="material-symbols-rounded fs-20px">map</span>
                Malang Regency, East Java, ID
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex jc-[sb] tc-[neutral-900] mt-6rem fd-[max-sm] ai-[sm-center]">
        <div className="flex flex-1 jc-[flex-start] ai-center gap-0.5rem">
          <p>&copy; 2024 NOuSantx. All Rights Reserved.</p>
        </div>
        <a
          className="cursor-pointer tc-[neutral-800] hover:text-slate-gray"
          href="https://tenoxui.web.app"
        >
          Built with TenoxUI
        </a>
      </div>
    </footer>
  );
};

export default Footer;
