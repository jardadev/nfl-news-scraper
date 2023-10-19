import { supabase } from '@/supabase/config';
import Container from '@/components/UI/Container';
import ArticleList from '@/components/Articles/ArticleList';

export default function Home({ articles }) {
	return (
		<Container>
			<ArticleList articles={articles} />
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
