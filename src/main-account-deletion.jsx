import React from "react";
import ReactDOM from "react-dom/client";
import "../styles.css";
import { HelmetProvider } from "react-helmet-async";
import AccountDeletion from "./pages/AccountDeletion/AccountDeletion";

ReactDOM.createRoot(document.getElementById("root")).render(
	<HelmetProvider>
		<AccountDeletion />
	</HelmetProvider>,
);
