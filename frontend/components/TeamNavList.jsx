import TeamLogo from './TeamLogo';
import NFL_TEAMS from '@/nfl-team-data/nfl-data';
import Link from 'next/link';
import { trimTeamName } from '@/utils/helpers';

const TeamNavList = () => {
	return (
		<div className='p-4 w-3/4 min-h-full bg-base-200 text-base-content grid grid-cols-1 gap-2 text-xs'>
			{NFL_TEAMS.map((team) => (
				<div
					key={team.name}
					className='flex items-center px-2 hover:bg-gray-200 w-full cursor-pointer'
				>
					<div className='self-center'>
						<TeamLogo teamName={team.name} />
					</div>
					<div className='ml-4'>
						<Link
							href={`/news/${trimTeamName(
								team.name
							).toLowerCase()}`}
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
