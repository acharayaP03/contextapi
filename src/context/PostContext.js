import { useState, createContext } from 'react';
import { createRandomPost } from '../utils';

// create context outside of the component so that it will not be created every time the component re-renders
export const PostContext = createContext();

export function PostProvider({ children }) {
	const [posts, setPosts] = useState(() => Array.from({ length: 30 }, () => createRandomPost()));
	const [searchQuery, setSearchQuery] = useState('');

	// Derived state. These are the posts that will actually be displayed
	const searchedPosts =
		searchQuery.length > 0
			? posts.filter((post) =>
					`${post.title} ${post.body}`.toLowerCase().includes(searchQuery.toLowerCase()),
			  )
			: posts;

	function handleAddPost(post) {
		setPosts((posts) => [post, ...posts]);
	}

	function handleClearPosts() {
		setPosts([]);
	}

	return (
		<PostContext.Provider
			value={{
				posts: searchedPosts,
				onAddPost: handleAddPost,
				onClearPosts: handleClearPosts,
				searchQuery,
				setSearchQuery,
			}}
		>
			{children}
		</PostContext.Provider>
	);
}
