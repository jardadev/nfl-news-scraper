import { supabase } from '@/supabase/config';
import Container from '@/components/ui/Container';
import ArticleItem from '@/components/Articles/ArticleItem';
import { useState } from 'react';

export default function Home({ articles }) {
	const [fetchedArticles, setFethedArticles] = useState(articles);
	const [displayedArticles, setDisplayedArticles] = useState(
		fetchedArticles.slice(0, 5)
	);

	return (
		<Container>
			<ul className='flex flex-col gap-3 items-center'>
				{articles &&
					displayedArticles.map(({ headline, image, summary, link }, i) => (
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
	const { data: articles, error } = await supabase
		.from('articles')
		.select('headline, image, summary, link')
		.order('created_at', { ascending: false })
		.limit(15);

	return { props: { articles }, revalidate: 60 };
}
