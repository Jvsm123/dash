import Head from '../components/Header';

export default function Home()
{
	return(
		<>
			<Head/>

			<p>Aqui é um P</p>

			<button type="button" onClick={() => router.push('/')}>
				Raiz
			</button>
		</>
	);
};
