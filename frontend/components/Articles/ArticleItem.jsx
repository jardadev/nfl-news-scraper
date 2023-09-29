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
		<div className='w-full card bg-base-100 shadow-xl max-w-lg h-1/6'>
			<figure className='aspect-w-16 aspect-h-9'>
				<ArticleImage url={image} alt={headline} />
			</figure>
			<div className='flex flex-col gap-3 p-3 '>
				<h2 className='card-title font-bold text-2xl'>{headline}</h2>
				{summary && <p className='text-neutral-500'>{summary}</p>}
				<div className='card-actions justify-end'>
					<a className='btn btn-secondary' role='button' href={link}>
						Read
					</a>
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;
