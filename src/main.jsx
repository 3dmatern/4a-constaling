import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/App.jsx";

import "./index.css";
import "./fonts/ptrootui/ptrootui.css";
import "./fonts/rubik/rubik.css";
import "./fonts/bebasneue/bebasneue.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
