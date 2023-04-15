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

function addBouncingText() {
	const text = textInput.value.trim();
	if (text !== '') {
		const bouncingText = document.createElement('span');
		bouncingText.textContent = text;
		bouncingText.classList.add('bouncingText');
		bouncingText.style.left = `${Math.random() * 100}%`;
		bouncingText.style.top = `${Math.random() * 100}%`;
		textContainer.appendChild(bouncingText);
	}
	textInput.value = '';
}
