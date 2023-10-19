import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ArticleImage = ({ url, alt, priority }) => {
	return (
		<Image
			src={url}
			alt={alt}
			sizes='100vw'
			fill
			style={{
				objectFit: 'fill',
			}}
			priority={priority}
		/>
	);
};

const ArticleItem = ({ headline, image, summary, link, priority = false }) => {
	return (
		<div className='w-full card bg-base-100 shadow-xl max-w-lg h-1/6'>
			<figure className='aspect-w-16 aspect-h-9 cursor-pointer'>
				<Link href={link}>
					<ArticleImage
						url={image}
						alt={headline}
						priority={priority}
					/>
				</Link>
			</figure>
			<div className='flex flex-col gap-3 p-3 '>
				<h2 className='card-title font-bold text-2xl'>{headline}</h2>
				{summary && <p className='text-neutral-500'>{summary}</p>}
				<div className='card-actions justify-end'>
					<a className='btn' role='button' href={link}>
						Read
					</a>
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;
