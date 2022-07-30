import { motion } from 'framer-motion';
import Link from 'next/link';
const myLoader = ({ src, width, quality }) => {
	return `${src}?w=${width}&q=${quality || 80}`;
};

function Body({ list }) {
	return (
		<div className='GridContainer'>
			{list.map((item, link) => (
				<Link key={link} href={`/beer/${item.id}`}>
					<motion.a whileTap={{ scale: 0.95 }}>
						<img
							src={myLoader({
								src: item.image_url,
								width: 80,
								quality: 1,
							})}
							alt='ffff'
						/>
						<div className='preview'>
							<div className='preview__header'>{item.name} </div>
							<div className='preview__about'>
								{item.description.length > 140
									? item.description.substring(0, 140) + '...'
									: item.description}
							</div>
						</div>
					</motion.a>
				</Link>
			))}
		</div>
	);
}

export default Body;

// <img
// 	src={myLoader({
// 		src: item.attributes.Pre.data.attributes.url,
// 		width: 80,
// 		quality: 1,
// 	})}
// 	alt='ffff'
// />;
