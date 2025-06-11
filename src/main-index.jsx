import React from "react";
import ReactDOM from "react-dom/client";
import Landing from "./pages/Landing.jsx"; // the component we built earlier
// import "../styles.css"; // global CSS once per page
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<Landing />
	</HelmetProvider>
);
