//import ReactMarkdown from 'react-markdown';
//import { url } from '../../config/url.config';
import Image from 'next/image';
import styles from '../beer/beer.module.scss';
export default function Beer({ beer }) {
	const p = beer.beer[0];

	const myLoader = ({ width, quality }) => {
		return `${p.image_url}?w=${width}&q=${quality || 80}`;
	};

	return (
		<div className={styles.post}>
			<Image
				loader={myLoader}
				src='https://images.punkapi.com/v2/keg.png'
				alt='Picture of the author'
				width={120}
				height={100}
			/>
			<div className={styles.post__text}>
				<p className={styles.post__text_name}>{p.name}</p>
				<p>{p.tagline}</p>

				<p>
					{p.description.length > 140
						? p.description.substring(0, 140) + '...'
						: p.description}
				</p>
				<p>{p.abv}</p>
				<p>{p.food_pairing}</p>
			</div>
		</div>
	);
}
export async function getServerSideProps(context) {
	const data = await fetch(
		`https://api.punkapi.com/v2/beers/${context.params.id}`
	);
	const beer = await data.json();
	return {
		props: { beer: { beer } },
	};
}
