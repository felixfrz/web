import React from 'react';
import ReactDom from 'react-dom/client';
// The first two lines import necessary parts of React. Think of it as bringing in tools that we need to use.

function Greeting() {
	return <h2>First component</h2>;
}
// The code then defines a function called "Greeting". This function is like a blueprint for a specific part of the website or application that we want to create. In this case, it represents a heading saying "First component".

const root = ReactDom.createRoot(document.getElementById('root'));
// Next, there is a line that creates a special object called "root". This object is used by React to manage the rendering of our components on the webpage.

root.render(<Greeting />);
// In simpler terms, this code sets up a basic React application that displays a heading saying "First component" on a webpage.