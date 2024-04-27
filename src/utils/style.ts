// define styles :D
type Styles = Record<string, string | Record<string, string>>;

// all styles
export const styles: Styles = {
  html: "scroll-smooth",
  body: "family-[font-body] bg-[neutral-100] tc-[neutral-900]",
  p: "family-[font-body] tc-[neutral-800]",
  code: "family-[font-mono]",
  nav: {
    "": "bg-[neutral-100] w-100% w-mx-1440px mh-auto p-2rem pv-1rem d-flex flex-parent-center jc-[sb] position-fixed t-0 l-0 r-0 z-999",
    ul: "d-flex flex-parent-center",
    "ul li": "d-flex flex-parent-center tc-[neutral-800] cursor-pointer",
    a: "tc-inherit",
  },
  ".flex": "d-flex",
  ".w-full": "w-100%",
  ".flex-center": "d-flex flex-parent-center",
  ".flex-wrap": "d-flex fx-wrap-wrap",
  ".space-between": "jc-[tx_sb]",
  ".items-center": "ai-center",
  "a.breadcrumb-link": "tc-[neutral-700] td-li-none",
  "a.breadcrumb-link.last.active":
    "tc-[neutral-900] td-li-underline td-c-[accent-500]",
  ".btn": "bg-none bdr-none tc-#fafafa cursor-pointer fw-500",
  ".flex-1": "fx-grow-1 fx-shrink-1 fx-basis-0%",
  ".center": "flex-parent-center",
  ".space > * + *": "ml-1rem",
  ".footer-link": {
    "": "mt-0.75rem  tc-[neutral-800]",
    a: "tc-inherit",
  },
  // important selector must be last
  ".text-xs": "fs-0.75rem lh-1rem",
  ".text-sm": "fs-0.875rem lh-1.25rem",
  ".text-base": "fs-1rem lh-1.5rem",
  ".text-lg": "fs-1.125rem lh-1.75rem",
  ".text-xl": "fs-1.25rem lh-1.75rem",
  ".text-2xl": "fs-1.5rem lh-2rem",
  ".text-3xl": "fs-1.875rem lh-2.25rem",
  ".text-4xl": "fs-2.25rem lh-2.5rem",
  ".text-5xl": "fs-3rem lh-1",
  ".text-6xl": "fs-3.75rem lh-1",
  ".text-7xl": "fs-4.5rem lh-1",
  ".text-8xl": "fs-6rem lh-1",
  ".text-9xl": "fs-8rem lh-1",
  // line height
  ".leading-3": "lh-0.75rem",
  ".leading-4": "lh-1rem",
  ".leading-5": "lh-1.25rem",
  ".leading-6": "lh-1.5rem",
  ".leading-7": "lh-1.75rem",
  ".leading-8": "lh-2rem",
  ".leading-9": "lh-2.25rem",
  ".leading-10": "lh-2.5rem",
  ".leading-none": "lh-1",
  ".leading-tight": "lh-1.25",
  ".leading-snug": "lh-1.375",
  ".leading-normal": "lh-1.5",
  ".leading-relaxed": "lh-1.625",
  ".leading-loose": "lh-2",
  // line height
  ".font-thin": "fw-100",
  ".font-extralight": "fw-200",
  ".font-light": "fw-300",
  ".font-normal": "fw-400",
  ".font-medium": "fw-500",
  ".font-semibold": "fw-600",
  ".font-bold": "fw-700",
  ".font-extrabold": "fw-800",
  ".font-black": "fw-900",
  // line spacing
  ".tracking-tighter": "ls--0.05em",
  ".tracking-tight": "ls--0.025em",
  ".tracking-normal": "ls-0em",
  ".tracking-wide": "ls-0.025em",
  ".tracking-wider": "ls-0.05em",
  ".tracking-widest": "ls-0.1em",
  // position
  ".static": "position-static",
  ".fixed": "position-fixed",
  ".absolute": "position-absolute",
  ".relative": "position-relative",
  ".sticky": "position-sticky",
  // box shadow
  ".shadow": "shadow-[tx__shadow]",
  ".shadow-md": "shadow-[tx__shadow-md]",
  ".shadow-lg": "shadow-[tx__shadow-lg]",
  ".shadow-xl": "shadow-[tx__shadow-xl]",
  ".shadow-2xl": "shadow-[tx__shadow-2xl]",
  ".shadow-inner": "shadow-[tx__shadow-inner]",
  ".shadow-none": "shadow-[tx__shadow-none]",
  ".max-md-none": "d-[max-md\\:none]",
  ".max-lg-none": "d-[max-lg\\:none]",
  ".min-lg-none": "d-[min-lg\\:none]",
  ".min-md-none": "d-[min-md\\:none]",
  ".none": "d-none",
  ".border": "bs-solid bw-0",
  ".text-primary, .text-primary-500": "tc-[accent-500]",
};
