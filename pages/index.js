import Container from '@/components/ui/Container';
import ArticleItem from '@/components/Articles/ArticleItem';

export default function Home({ articles }) {
	return (
		<Container>
			<ul className='flex flex-col gap-3 items-center'>
				{articles &&
					articles.map(({ headline, image, summary, link }, i) => (
						<ArticleItem
							key={i}
							headline={headline}
							image={image}
							summary={summary}
							link={link}
						/>
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
