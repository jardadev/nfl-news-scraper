import Container from '@/components/ui/Container';
import ArticleItem from '@/components/Articles/ArticleItem';

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

// export async function getStaticPaths() {
// 	// Get all the homes IDs from the database
// 	const res = await fetch('http://127.0.0.1:3000/api/teams');
// 	const teams_dict = await res.json();
// 	const teams = Object.values(teams_dict);
// 	return {
// 		paths: teams.map((team) => ({
// 			params: { team: team.toLowerCase() },
// 		})),
// 		fallback: false, // returns 404 error page when trying to access an invalid record.
// 	};
// }

// export async function getStaticProps({ params }) {
// 	const res = await fetch(`http://127.0.0.1:3000/api/team/${params.team}`);
// 	const articles = await res.json();
// 	return { props: { articles, team: params.team } };
// }
