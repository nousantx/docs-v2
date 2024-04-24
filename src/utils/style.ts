type Styles = Record<string, string | Record<string, string>>;

// all styles
export const styles: Styles = {
  selector: "styles",
  nested: {
    "": "styles for nested",
  },
};
