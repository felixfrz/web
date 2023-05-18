import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { books } from './books';
import Book from './Book';

const BookList = () => {
	const getBook = (id) => {
		const book = books.find((book) => book.id == id);
		console.log(book);
	};

	return (
		<section className='booklist'>
			{books.map((book) => {
				return <Book {...book} key={book.id} getBook={getBook} />;
			})}
		</section>
	);
};
// const EventExamples = () => {
// const handleFormInput = (e) => {
// 	console.log(e);
// 	console.log(e.target);
// 	console.log(e.target.name);
// 	console.log(e.target.value);
// 	console.log('handle form input');
// };
// const handleButtonClick = () => {
// 	alert('handle button click');
// };
// const handleFormSubmission = (e) => {
// 	e.preventDefault();
// 	console.log('form submitted');
// };
// 	return (
// 		<section>
// 			<form>
// 				<h2>Form</h2>
// 				<input
// 					type='text'
// 					name='Example'
// 					style={{ margin: '1rem 0' }}
// 					onChange={(e) => console.log(e.target.value)}
// 				/>
// 			</form>
// 			<button onClick={() => console.log('click me')}>click me</button>
// 		</section>
// 	);
// };
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
