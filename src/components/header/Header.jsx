export default function Header({ posts, onClearPosts, searchQuery, setSearchQuery }) {
	return (
		<header>
			<h1>
				<span>⚛️</span>The Atomic Blog
			</h1>
			<div>
				<Results posts={posts} />
				<SearchPosts searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
				<button onClick={onClearPosts}>Clear posts</button>
			</div>
		</header>
	);
}

function Results({ posts }) {
	return <p>🚀 {posts.length} atomic posts found</p>;
}

function SearchPosts({ searchQuery, setSearchQuery }) {
	return (
		<input
			value={searchQuery}
			onChange={(e) => setSearchQuery(e.target.value)}
			placeholder='Search posts...'
		/>
	);
}
