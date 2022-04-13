import '../styles/globals.css'
import * as gtag from '../lib/gtag';
import { hotjar } from 'react-hotjar';
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function MyApp({ Component, pageProps })
{
	const router = useRouter();

	const HJID = process.env.ENV_HJID || 2922466;
	const HJSV = process.env.ENV_HJSV || 6;

	useEffect( () =>
	{
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
