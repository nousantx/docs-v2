# tenoxui/css documentation

## About

Built with React, it's fast, really.

## Clone repository

```sh
git clone https://github.com/nousantx/docs-v2
```

## Run project

This project is using yarn as package manager.

Install dependencies :

```sh
yarn
```

Run development server :

```sh
yarn dev
```

## More

### Try tenoxui/css

Add tenoxui to your project

```sh
npm install tenoxui --save-dev
```
or
```sh
yarn add tenoxui -D
```

App.jsx

```jsx
import { useLayoutEffect } from "react";
import tenoxui from "tenoxui";

const App = () => {
  useLayoutEffect(() => {
    tenoxui();
  }, []);
  return <h1 className="tc-red">Hello World</h1>;
};

export default App;
```
