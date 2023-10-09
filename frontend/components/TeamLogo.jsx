import React from 'react';
import NFL_TEAMS from '@/nfl-team-data/nfl-data';
import Image from 'next/image';

const TeamLogo = ({ teamName }) => {
	const foundTeam = NFL_TEAMS.find(
		(team) => team.name.toLowerCase() === teamName.toLowerCase()
	);
	if (!foundTeam) return null;

	const teamImageName = foundTeam.name.replaceAll(' ', '-').toLowerCase();

	return (
		<Image
			src={`/images/nfl-images/${teamImageName}.png`}
			alt={`${teamName} logo`}
			height={32}
			width={32}
		/>
	);
};

export default TeamLogo;
