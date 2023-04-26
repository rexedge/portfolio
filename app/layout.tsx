import '../global.css';
import { Inter } from '@next/font/google';
import LocalFont from '@next/font/local';
import { Metadata } from 'next';
import { Analytics } from './components/analytics';

export const metadata: Metadata = {
	title: {
		default: 'R3d5 - Oyeniran Ayobami Paul',
		template: '%s | R3d5 - Oyeniran Ayobami Paul',
	},
	description:
		'Software engineer at ISCE Digital Concepts and founder of R3D 5tudio',
	openGraph: {
		title: 'R3d5 - Oyeniran Ayobami Paul',
		description:
			'Software engineer at ISCE Digital Concepts and founder of R3D 5tudio',
		url: 'https://rexedge.xyz',
		siteName: 'rexedge.xyz',
		images: [
			{
				url: 'https://rexedge.xyz/og.png',
				width: 1920,
				height: 1080,
			},
		],
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'R3d5 - Oyeniran Ayobami Paul',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.png',
	},
};
const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const calSans = LocalFont({
	src: '../public/fonts/CalSans-SemiBold.ttf',
	variable: '--font-calsans',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='en'
			className={[inter.variable, calSans.variable].join(' ')}
		>
			<body
				className={`bg-black ${
					process.env.NODE_ENV === 'development'
						? 'debug-screens'
						: undefined
				}`}
			>
				<Analytics />
				{children}
			</body>
		</html>
	);
}
