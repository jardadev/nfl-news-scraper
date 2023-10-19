import { supabase } from '@/supabase/config';
import Container from '@/components/ui/Container';
import ArticleList from '@/components/Articles/ArticleList';
import Head from 'next/head';

export default function Home({ articles }) {
	return (
		<>
			<Head>
				<title>NFL News Reader</title>
				<meta property='og:title' content='NFL News Reader' />
				<meta
					property='og:description'
					content='A NFL news reader app built with Next.js and Supabase'
				/>
				<meta property='og:type' content='website' />
				<meta
					property='og:url'
					content='https://nfl-news-reader.vercel.app/'
				/>
				<meta name='viewport' content='width=device-width' />
			</Head>
			<Container>
				<ArticleList articles={articles} />
			</Container>
		</>
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
