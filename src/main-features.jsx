import React from "react";
import ReactDOM from "react-dom/client";
import Features from "./pages/Features/Features.jsx";
// import "../styles.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Features />
	</HelmetProvider>
);
