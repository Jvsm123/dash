import '../styles/globals.css'

import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';

const HJID = process.env.ENV_HJID || "Mock";
const HJSV = process.env.ENV_HJSV || "Mock";
const GID = process.env.ENV_GTAGID || "Mock";

export default function MyApp({ Component, pageProps })
{
	useEffect( () =>
	{
		if( HJID === "Mock" || HJSV === "Mock" ) return;

		hotjar.initialize( HJID, HJSV );
	}, []);

	return <Component {...pageProps, { gid: GID } }/>
}
