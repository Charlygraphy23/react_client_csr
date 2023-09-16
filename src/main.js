import React, { lazy } from "react";
import { createRoot } from "react-dom";
const App = lazy(() => import("./app.js"));

const root = createRoot(document.getElementById("root"));
root.render(<App />);
