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

const moreContent = document.createElement('div');
moreContent.style.cssText = 'background: pink; border-color: black; border-style: solid;';

const head = document.createElement('h1');
head.textContent = 'I\'m a div';
moreContent.appendChild(head);

const secPara = document.createElement('p');
secPara.textContent = 'ME TOO!';
moreContent.appendChild(secPara);

container.appendChild(moreContent);

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World");
});