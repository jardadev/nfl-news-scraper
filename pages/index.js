import { supabase } from '@/supabase/config';
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
							link={link || '/'}
						/>
					))}
			</ul>
		</Container>
	);
}

export async function getStaticProps() {
	const { data: articles, error } = await supabase
		.from('articles')
		.select('headline', 'image', 'summary', 'link')
		.order('created_at', { ascending: false })
		.limit(20);

	return { props: { articles }, revalidate: 60 };
}
