import React from "react";
import ReactDOM from "react-dom/client";
import Pricing from "./pages/Pricing/Pricing.jsx";
import "../styles.css";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Pricing />
	</HelmetProvider>
);
