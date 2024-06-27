import { useEffect, useState } from 'react';

import Header from './components/header/Header';
import Main from './components/main/Mian';
import Archive from './components/main/Archive';
import Footer from './components/footer/Footer';

import { PostProvider, PostContext } from './context/PostContext';

function App() {
	const [isFakeDark, setIsFakeDark] = useState(false);
	// Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
	useEffect(
		function () {
			document.documentElement.classList.toggle('fake-dark-mode');
		},
		[isFakeDark],
	);

	return (
		<section>
			<button
				onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
				className='btn-fake-dark-mode'
			>
				{isFakeDark ? '☀️' : '🌙'}
			</button>
			<PostProvider>
				<Header />
				<Main />
				<Archive />
				<Footer />
			</PostProvider>
		</section>
	);
}
export default App;
