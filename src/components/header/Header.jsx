import { useContext } from 'react';
import { PostContext } from '../../context/PostContext';
export default function Header() {
	const { onClearPosts } = useContext(PostContext);
	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				<Results />
				<SearchPosts />
				<button onClick={onClearPosts}>Clear posts</button>
			</div>
		</header>
	);
}

function Results() {
	const { posts } = useContext(PostContext);
	return <p>🚀 {posts.length} atomic posts found</p>;
}

function SearchPosts() {
	const { searchQuery, setSearchQuery } = useContext(PostContext);
	return (
		<input
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			placeholder='Search posts...'
		/>
	);
}
