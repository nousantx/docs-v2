import { useLayoutEffect } from "react";
import tenoxui from "tenoxui";

const App = () => {
  useLayoutEffect(() => {
    tenoxui();
  }, []);
  return (
    <div>
      <h1 className="tc-red">Hello, It's red color!</h1>
    </div>
  );
};

export default App;
