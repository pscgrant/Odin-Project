const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const para = document.createElement('p');
para.textContent = 'Hey, I\'m red.';
para.style.color = 'red';
container.appendChild(para);

const smallText = document.createElement('h3');
smallText.textContent = 'I\'m a blue h3!';
smallText.style.color = 'blue';
container.appendChild(smallText);