import React from "react";
import styles from "./Blog.module.css";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

/**
 * Static list of posts. In a real project, you might fetch from CMS or JSON.
 */
const posts = [
	{
		slug: "blog/mobile-invoicing-benefits.html",
		title: "Mobile Invoicing App Benefits for Contractors & Freelancers",
		excerpt:
			"Discover how a mobile invoicing & estimating app helps contractors and freelancers work smarter and get paid faster with Invoice Ways.",
		img: "/assets/blog/mobile-estimates-hero.jpg",
	},
	{
		slug: "blog/mobile-estimates.html",
		title: "Why Mobile Estimates Beat Word Docs in 2025",
		excerpt:
			"Six reasons contractors are ditching Word docs for mobile estimating—and winning jobs faster.",
		img: "/assets/blog/mobile-estimates-hero.jpg",
	},
	// 🔜  Add more posts here as you publish them
];

const Blog = () => (
	<>
		<NavBar />

		<header className="hero">
			<div className="container hero-content">
				<div className="page-hero-text">
					<h1>Invoice Ways Blog</h1>
				</div>
			</div>
		</header>
		<main
			className={styles.blogIndex}
			itemScope
			itemType="https://schema.org/Blog"
		>
			<section className={styles.cardGrid}>
				{posts.map((post) => (
					<article
						key={post.slug}
						className={styles.card}
						itemScope
						itemType="https://schema.org/BlogPosting"
					>
						<a
							href={post.slug}
							className={styles.cardLink}
							itemProp="url"
						>
							<div className={styles.cardImageWrapper}>
								<img
									src={post.img}
									alt={post.title}
									className={styles.cardImage}
									itemProp="image"
								/>
							</div>
							<div className={styles.cardContent}>
								<h2
									className={styles.cardTitle}
									itemProp="headline"
								>
									{post.title}
								</h2>
								<p
									className={styles.cardExcerpt}
									itemProp="description"
								>
									{post.excerpt}
								</p>
							</div>
						</a>
					</article>
				))}
			</section>
		</main>
		<Footer />
	</>
);

export default Blog;
