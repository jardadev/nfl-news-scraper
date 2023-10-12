import '@/styles/globals.css';
import { chewy, yk, khula } from '@/fonts';
import Navbar from '@/components/Navbar';
export default function App({ Component, pageProps }) {
	return (
		<main className={`${chewy.variable} ${yk.variable} ${khula.variable} flex flex-col items-center justify-items-center`}>
			<Navbar />
			<Component {...pageProps} />
		</main>
	);
}
