import TeamLogo from './TeamLogo';
import NFL_TEAMS from '@/nfl-data';
import Link from 'next/link';

const TeamNavList = () => {
	return (
		<div className='p-4 w-3/4 sm:w-1/3 min-h-full bg-base-200 text-base-content grid grid-cols-1 gap-2 text-xs'>
			{NFL_TEAMS.map((team) => (
				<div
					key={team.name}
					className='flex items-center px-2 hover:bg-gray-200 w-full cursor-pointer sm:justify-between sm:mx-auto'
				>
					<div className='xl:pl-12'>
						<TeamLogo teamName={team.name} />
					</div>
					<div className='ml-4 flex justify-center w-full xl:text-lg'>
						<Link
							href={`/news/${team.name
								.replace(' ', '-')
								.toLowerCase()}`}
							className='hover:underline'
						>
							<p>{team.name}</p>
						</Link>
					</div>
				</div>
			))}
		</div>
	);
};

export default TeamNavList;
