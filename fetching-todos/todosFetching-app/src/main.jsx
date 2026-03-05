import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import FetchTodos from "./fetchTodos.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FetchTodos />
    </StrictMode>,
);
