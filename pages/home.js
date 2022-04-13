import Head from '../components/Header';
import { useRouter } from 'next/router';

export default function Home()
{
	const router = useRouter();
	return(
		<>
			<Head/>

			<p>Aqui é um P</p>

			<button type="button" onClick={() => router.back()}>
				Raiz
			</button>
		</>
	);
};
