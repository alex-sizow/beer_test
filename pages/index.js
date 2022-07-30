import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import Body from '../components/body/body';
import { url } from '../config/url.config';

export async function getServerSideProps({
	query: { page = 1, search = '' },
}) {
	let adress = '';
	if (search === '') {
		adress = `${url}/beers?page=${page}&per_page=10`;
	} else {
		adress = `${url}/beers?page=${page}&per_page=10&beer_name=${search}`;
	}
	const data = await fetch(adress);
	const list = await data.json();
	return {
		props: {
			list: { list },
			page: parseInt(page, 10),
			search: search,
		},
	};
}

export default function Home({ list, page, search }) {
	return (
		<>
			<Head>
				<title>Лекарства Просто</title>
			</Head>
			<div className='search'>
				<input
					type='text'
					placeholder='Search beer...'
					onChange={(input) =>
						Router.push(`/?search=${(search = input.target.value)}`)
					}
				/>
			</div>
			<Body list={list.list} />
			<div className='pagination'>
				<button
					className='pagination__button'
					onClick={() => Router.push(`/?page=${page - 1}`)}
					disabled={page <= 1}>
					PREV
				</button>
				<button
					className='pagination__button'
					onClick={() => Router.push(`/?page=${page + 1}`)}>
					NEXT
				</button>
				<Link href='/?page=1'>
					<a className='pagination__button'>First page</a>
				</Link>
			</div>
		</>
	);
}
