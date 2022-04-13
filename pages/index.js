import Head from '../components/Header';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';

export default function Home()
{
	const router = useRouter();
	return (
		<div className={styles.container}>

		<Head/>

		<button type="button" onClick={() => router.push('/home')}>
			IR home?
		</button>

		</div>
	);
};
