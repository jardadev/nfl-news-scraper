import { useState } from 'react';
import ArticleItem from './ArticleItem';

const ArticleList = (props) => {
	const { articles } = props;
	// const [, set] = useState();
	const [fetchedArticles, setFethedArticles] = useState(articles);
	const [displayedArticles, setDisplayedArticles] = useState(
		fetchedArticles.slice(0, 5)
	);
	return (
		<ul className='flex flex-col gap-3 items-center'>
			{displayedArticles.map(({ headline, image, summary, link }, i) => (
				<ArticleItem
					key={i}
					headline={headline}
					image={image}
					summary={summary}
					link={link}
				/>
			))}
		</ul>
	);
};

export default ArticleList;
