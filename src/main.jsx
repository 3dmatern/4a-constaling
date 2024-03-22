import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App.jsx";

import "./index.css";
import "./assets/fonts/ptrootui/ptrootui.css";
import "./assets/fonts/bebasneuecyrillic/bebasneuecyrillic.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
