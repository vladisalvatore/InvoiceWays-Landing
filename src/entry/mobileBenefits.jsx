import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "../../styles.css";
import MobileBenefits from "../pages/MobileBenefits/MobileBenefits";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<HelmetProvider>
			<MobileBenefits />
		</HelmetProvider>
	</React.StrictMode>
);
