import '../styles/globals.css'
import * as gtag from '../lib/gtag';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const HJID = process.env.ENV_HJID || "Mock";
const HJSV = process.env.ENV_HJSV || "Mock";
const GID = process.env.ENV_GTAGID || "Mock";

export default function MyApp({ Component, pageProps })
{
	const router = useRouter();

	useEffect( () =>
	{
		if( HJID === "Mock" || HJSV === "Mock" ) return;

		hotjar.initialize( HJID, HJSV );
	}, []);

	useEffect( () =>
	{
		const handlerRouteChange = url => gtag.pageview( url );

		router.events.on( 'routeChangeComplete', handlerRouteChange );

		router.events.off( 'routeChangeComplete', handlerRouteChange );
	}, [router.events]);

	return <Component {...pageProps } gid={GID}/>
};
