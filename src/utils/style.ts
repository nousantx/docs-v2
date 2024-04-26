// define styles :D
type Styles = Record<string, string | Record<string, string>>;

// all styles
export const styles: Styles = {
  html: "scroll-smooth",
  body: "family-[font-body] bg-[neutral-100] tc-[neutral-900]",
  p: "family-[font-body] tc-[neutral-800]",
  code: "family-[font-mono]",
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
  ".none": "d-none",
  ".text-primary, .text-primary-500": "tc-[accent-500]",
};
