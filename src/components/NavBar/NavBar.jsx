// src/components/NavBar.jsx
import React, { useState } from "react";
import styles from "./NavBar.module.css";

export default function NavBar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className={styles.siteHeader}>
			<div className={`container ${styles.navInner}`}>
				{/* Brand */}
				<a href="/" className={styles.logo}>
					INVOICE WAYS
					<span className={styles.logoSub}>by Lux IT Solutions</span>
				</a>

				{/* Hamburger (mobile) */}
				<button
					className={styles.navToggle}
					aria-label="Toggle navigation"
					onClick={() => setOpen(!open)}
				>
					<span className={styles.bar} />
					<span className={styles.bar} />
					<span className={styles.bar} />
				</button>

				{/* Links */}
				<nav
					className={`${styles.navLinks} ${open ? styles.open : ""}`}
					onClick={() => setOpen(false)} /* close after click */
				>
					{/* <a href="/index.html">Home</a> */}
					<a href="/features">Features</a>
					{/* <a href="/pricing">Pricing</a> */}
					<a href="/blog">Blog</a>
					<a
						href="https://app.invoiceways.com"
						className={`${styles.navLogin}`}
					>
						Login
					</a>
				</nav>
			</div>
		</nav>
	);
}
