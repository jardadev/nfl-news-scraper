import Container from '@/components/ui/Container';
import ArticleItem from '@/components/Articles/ArticleItem';
import NFL_TEAMS from '@/nfl-data';
import { supabase } from '@/supabase/config';
import Head from 'next/head';

export default function TeamArticles({ articles }) {
	const teamName = articles[0].team;
	const formattedTeamName = teamName.replaceAll('-', ' ');

	return (
		<>
			<Head>
				<title>{formattedTeamName} News</title>
				<meta
					property='og:url'
					content={'https://nfl-news-reader.vercel.app/' + teamName}
				/>
				<meta name='viewport' content='width=device-width' />
			</Head>
			<Container>
				<div className='h-8 pt-4 pb-8 flex items-center justify-center mx-auto'>
					<h1 className='text-3xl underline'>
						{/* Regex expression to capitalize first letter of each word in team name. */}
						{formattedTeamName
							.toLowerCase()
							.replace(/\b[a-z](?=[a-z]{2})/g, function (letter) {
								return letter.toUpperCase();
							})}
					</h1>
				</div>
				<ul className='flex flex-col gap-3 items-center'>
					{articles &&
						articles.map(
							({ headline, image, summary, link }, i) => (
								<ArticleItem
									key={i}
									headline={headline}
									image={image}
									summary={summary}
									link={link}
								/>
							)
						)}
				</ul>
			</Container>
		</>
	);
}

export async function getStaticPaths() {
	const nflTeamNamesFormatted = NFL_TEAMS.map((team) =>
		team.name.replaceAll(' ', '-')
	);

	return {
		paths: nflTeamNamesFormatted.map((team) => ({
			params: { team: team.toLowerCase() },
		})),
		fallback: false, // returns 404 error page when trying to access an invalid record.
	};
}

export async function getStaticProps({ params }) {
	const { data: articles, error } = await supabase
		.from('articles')
		.select()
		.eq('team', params.team);

	return { props: { articles, team: params.team } };
}
