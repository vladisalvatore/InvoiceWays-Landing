import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import { HelmetProvider } from "react-helmet-async";
import Privacy from "./pages/Privacy/Privacy";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Privacy />
	</HelmetProvider>,
);
