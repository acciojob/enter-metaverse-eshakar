//your JS code here. If required.
const statusParagraph = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');

enterButton.addEventListener('click', function() {
	const newHeading = document.createElement('h1');
	newHeading.textContent = 'Entered Metaverse';

	statusParagraph.textContent = '';
	statusParagraph.appendChild(newHeading);
});