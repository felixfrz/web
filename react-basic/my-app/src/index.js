import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';

// const author = 'Emily Henry';
// const title = 'Happy Place';
// const img = './img1.jpeg';

// const firstBook = {
// 	author: 'Emily Henry',
// 	title: 'Happy Place',
// 	img: 'https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg',
// };
// const secondBook = {
// 	author: 'Robert Greene',
// 	title: 'The 48 Laws of Power',
// 	img: './img1.jpeg',
// };

const books = [
	{
		author: 'Emily Henry',
		title: 'Happy Place',
		img: 'https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg',
		id: 1,
	},
	{
		author: 'Robert Greene',
		title: 'The 48 Laws of Power',
		img: './img1.jpeg',
		id: 2,
	},
];

const BookList = () => {
	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} />;
			})}
		</section>
	);
};
// const BookList = () => {
// 	return (
// 		<section className='booklist'>
// 			{books.map((book) => {
// 				const { img, title, author, id } = book;
// 				return <Book img={img} title={title} author={author}  key={id}/>;
// 			})}
// 		</section>
// 	);
// };

// const Book = (props) => {
// 	console.log(props);
// 	const { img, title, author } = props;
// 	return (
// 		<article className='book'>
// 			<img src={img} alt={title} />
// 			<h2>{title}</h2>
// 			<h4>{author}</h4>
// 		</article>
// 	);
// };
const Book = ({ img, title, author }) => {
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
		</article>
	);
};

// const Image = () => {
// 	return <img src='./img1.jpeg' alt='Happy Place' />;
// };
// const Image = () => {
// 	return (
// 		<img
// 			src='https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg'
// 			alt='Happy Place'
// 		/>
// 	);
// };
// const Title = () => {
// 	return <h2>Happy Place</h2>;
// };
// const Author = () => {
// 	const inlineHeadingStyles = {
// 		color: '#617d98',
// 		fontSize: '0.75rem',
// 		marginTop: '0.5rem',
// 	};
// 	return <h4 style={inlineHeadingStyles}>Emily Henry</h4>;
// };
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
