const Book = ({ id, img, title, author, displayFunc, getBook, deleteBook }) => {
	const displayTitle = () => {
		console.log(title);
	};
	function getSingleBook() {
		getBook(id);
	}
	return (
		<article className='book'>
			<img src={img} alt={title} />
			<h2>{title}</h2>
			<h4>{author}</h4>
			<button onClick={() => deleteBook(id)}>display</button>
		</article>
	);
};

export default Book;
