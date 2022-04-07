import React from "react";
import ReactDOM from "react-dom";
import Layout from "host/Layout";
import Counter from "host/Counter";

import "./index.scss";

const App = () => (
  <Layout>
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: app-admin</div>
      <br />
      <Counter />
    </div>
  </Layout>
);
ReactDOM.render(<App />, document.getElementById("app"));
