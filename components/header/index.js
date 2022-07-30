import Link from 'next/dist/client/link';
import styles from '../header/header.module.scss';
const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.header__logo}>
				<Link href={'/'}>Beer with love ❤️</Link>
			</div>

		</header>
	);
};

export default Header;
