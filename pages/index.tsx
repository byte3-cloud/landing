/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';

import CallToAction from '../components/CallToAction';
import FeatureComponent from '../components/Features';
import Hero from '../components/Hero';

export default function Home() {
	return (
		<div>
			<Head>
				<title>byte3 | digital solutions for growth business</title>
				<meta name="description" content="byte3 | digital solutions for growth business" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet" />
			</Head>
			<Hero />
			<FeatureComponent />
			<CallToAction />
		</div>
	);
}
