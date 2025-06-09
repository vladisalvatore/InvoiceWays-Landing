import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import { HelmetProvider } from "react-helmet-async";
import Blog from "./pages/Blog/Blog";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Blog />
	</HelmetProvider>
);
