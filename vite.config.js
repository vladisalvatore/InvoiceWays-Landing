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
				about: resolve(__dirname, "site/about.html"),
				pricing: resolve(__dirname, "site/pricing/index.html"),
				features: resolve(__dirname, "site/features/index.html"),
				site: resolve(__dirname, "site/index.html"),
				blog: resolve(__dirname, "blog/index.html"),
				mobileBenefits: resolve(
					__dirname,
					"blog/mobile-invoicing-benefits.html"
				),
			},
		},
	},
});
