const Book = ({
	id,
	img,
	title,
	author,
	displayFunc,
	getBook,
	deleteBook,
	number,
}) => {
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
			{/* <button onClick={() => getBook(id)}>display</button> */}
			<span className='number'># {number + 1}</span>
		</article>
	);
};

export default Book;
