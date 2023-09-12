import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home({ articles }) {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<h1>NFL News Scraper</h1>
			<ul>
				{articles &&
					articles.map((article) => (
						<li key={article.id}>{article.headline}</li>
					))}
			</ul>
		</main>
	);
}

export async function getStaticProps() {
	const res = await fetch('http://127.0.0.1:3000/api');
	const obj = await res.json();
	const articles = obj[0];
	return { props: { articles } };
}
