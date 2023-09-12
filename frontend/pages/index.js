import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export default function Home({ articles }) {
	return (
		<main
			className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
		>
			<h1>NFL News Scraper</h1>
			<ul className='flex flex-col gap-3'>
				{articles &&
					articles.map(({ headline, image, summary, link }, i) => (
						<div
							className='card lg:card-side bg-base-100 shadow-xl'
							key={i}
						>
							<figure>
								<img src={image} alt={headline} />
							</figure>
							<div className='card-body'>
								<h2 className='card-title'>{headline}</h2>

								{summary && <p>{summary}</p>}
								<div className='card-actions justify-end'>
									<a className='btn btn-primary' href={link}>
										Read
									</a>
								</div>
							</div>
						</div>
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
