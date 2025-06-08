// src/pages/About.jsx
import { Helmet } from "react-helmet-async";

export default function About() {
	return (
		<>
			<Helmet>
				<title>About Us - InvoiceWays</title>
				<meta
					name="description"
					content="Learn how InvoiceWays empowers contractors to get paid faster."
				/>
				<link rel="canonical" href="https://invoiceways.com/about" />

				<meta property="og:type" content="website" />
				<meta property="og:title" content="About InvoiceWays" />
				<meta
					property="og:description"
					content="See the story behind the free invoice app built for contractors."
				/>
				<meta property="og:image" content="/assets/hero-image.webp" />
			</Helmet>

			<h1>Test</h1>
		</>
	);
}
