import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "../../styles.css";
import MobileEstimatesVsWordDocs from "../pages/Blog/MobileEstimatesVsWordDocs/MobileEstimatesVsWordDocs";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<MobileEstimatesVsWordDocs />
		</HelmetProvider>
	</React.StrictMode>
);
