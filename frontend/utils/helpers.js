export const trimTeamName = (fullName) => {
	const parts = fullName.split(' ');
	if (parts.length > 1) {
		// If there's more than one part, take the last part as the team name
		return parts.slice(1).join(' ');
	} else {
		// If there's only one part, return it as is
		return fullName;
	}
};
