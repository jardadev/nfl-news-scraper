import React from 'react';
import { cx } from '@/utils/helpers';

const Container = (props) => {
	return (
		<main
			className={cx(
				'container px-8 mx-auto xl:px-5',
				props.large ? ' max-w-screen-xl' : ' max-w-screen-lg'
			)}
		>
			{props.children}
		</main>
	);
};

export default Container;
