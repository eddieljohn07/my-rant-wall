const textInput = document.getElementById('textInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const textContainer = document.getElementById('textContainer');

addButton.addEventListener('click', () => {
	addBouncingText();
});

textInput.addEventListener('keyup', (event) => {
	if (event.key === 'Enter') {
		addBouncingText();
	}
});

clearButton.addEventListener('click', () => {
	textContainer.innerHTML = '';
});