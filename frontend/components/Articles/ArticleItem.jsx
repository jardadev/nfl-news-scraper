import React from 'react';
import Image from 'next/image';

const ArticleImage = ({ url, alt }) => {
	return (
		<Image
			src={url}
			alt={alt}
			sizes='100vw'
			fill
			style={{
				objectFit: 'fill',
			}}
		/>
	);
};

const ArticleItem = ({ headline, image, summary, link }) => {
	return (
		<div className='card lg:card-side bg-base-100 shadow-xl'>
			<figure className='aspect-w-16 aspect-h-9'>
				<ArticleImage url={image} alt={headline} />
			</figure>
			<div className='card-body'>
				<h2 className='card-title'>{headline}</h2>
				{summary && <p>{summary}</p>}
				<div className='card-actions justify-end'>
					<a className='btn btn-primary' role='button' href={link}>
						Read
					</a>
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;
