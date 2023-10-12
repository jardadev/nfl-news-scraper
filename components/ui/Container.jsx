import React from 'react';

const Container = (props) => {
	return (
		<main className='container py-4 px-8 mx-auto xl:px-5 lg:text-lg'>
			{props.children}
		</main>
	);
};

export default Container;
