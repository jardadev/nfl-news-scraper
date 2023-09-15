import { Inter } from 'next/font/google';
import Container from '@/components/ui/Container';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ articles }) {
	return (
		<Container>
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
		</Container>
	);
}

export async function getStaticProps() {
	const res = await fetch('http://127.0.0.1:3000/api/');
	const articles = await res.json();
	return { props: { articles } };
}
