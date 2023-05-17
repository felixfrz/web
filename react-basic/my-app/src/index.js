import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css'

const BookList = () => {
	return (
		<section className='booklist'>
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
};

const Book = () => {
	return (
		<article className='book'>
			<Image />
			<Title />
			<Author />
		</article>
	);
};

const Image = () => {
	return (
		<img
			src='https://images-na.ssl-images-amazon.com/images/I/71+vQyk44IL._AC_UL600_SR600,400_.jpg'
			alt='Happy Place'
		/>
	);
};
const Author = () => {
	return <p>Emily Henry</p>;
};
const Title = () => {
	return <h2>Happy Place</h2>;
};
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(<BookList />);
