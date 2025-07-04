import React from "react";
import ReactDOM from "react-dom/client";
import About from "./pages/About";
import "../styles.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<About />
	</HelmetProvider>
);
