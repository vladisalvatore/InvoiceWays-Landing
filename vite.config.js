import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, "index.html"),
				about: resolve(__dirname, "about.html"),
				pricing: resolve(__dirname, "pricing.html"),
				features: resolve(__dirname, "features.html"),
				blog: resolve(__dirname, "blog.html"),
				privacy: resolve(__dirname, "privacy.html"),
				account-deletion: resolve(__dirname, "account-deletion.html"),
				mobileBenefits: resolve(
					__dirname,
					"blog/mobile-invoicing-benefits.html",
				),
				mobileEstimatesVsWordDocs: resolve(
					__dirname,
					"blog/mobile-estimates-vs-word-docs.html",
				),
			},
		},
	},
});
