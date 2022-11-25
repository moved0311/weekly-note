import React, { ReactElement, ReactNode } from "react";
import "./App.css";

const Header = ({ children }: { children: ReactNode }): ReactElement => {
  return <h1>{children}</h1>;
};

enum CATEGORY {
  A = "a",
  B = "b",
  C = "c",
}

type Content = Record<CATEGORY, string>;

function App() {
  return (
    <div>
      <Header>
        <strong>Hello</strong>
      </Header>
    </div>
  );
}

export default App;
