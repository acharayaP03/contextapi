import FormAddPost from './FormAddPost';
import Posts from './Posts';
export default function Main({ posts, onAddPost }) {
	return (
		<main>
			<FormAddPost />
			<Posts />
		</main>
	);
}
