import React from 'react';
import { cx } from '@/utils/helpers';

const Container = (props) => {
	return (
		<div
			className={cx(
				'container px-8 mx-auto xl:px-5',
				props.large ? ' max-w-screen-xl' : ' max-w-screen-lg'
			)}
		>
			{props.children}
		</div>
	);
};

export default Container;
