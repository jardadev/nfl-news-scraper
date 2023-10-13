import Container from '@/components/ui/Container';
import ArticleItem from '@/components/Articles/ArticleItem';
import NFL_TEAMS from '@/nfl-data';
import { supabase } from '@/supabase/config';

export default function TeamArticles({ articles }) {
	const teamName = articles[0].team_name;

	return (
		<Container>
			<div className='h-8 pt-4 pb-8 flex items-center justify-center mx-auto'>
				<h1 className='text-3xl underline'>{teamName}</h1>
			</div>
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

export async function getStaticPaths() {
	const nflTeamNamesFormatted = NFL_TEAMS.map((team) =>
		team.name.replace(/.*\s/, '')
	);

	return {
		paths: nflTeamNamesFormatted.map((team) => ({
			params: { team: team.toLowerCase() },
		})),
		fallback: false, // returns 404 error page when trying to access an invalid record.
	};
}

export async function getStaticProps({ params }) {
	function toTitleCase(str) {
		return str.replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
	const { data: articles, error } = await supabase
		.from('articles')
		.select()
		.eq('team_name', toTitleCase(params.team));

	if (error) {
		console.error(error);
	}

	return { props: { articles, team: params.team } };
}
