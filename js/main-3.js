const h1DOM = document.querySelector('h1');
h1DOM.classList.add('simba');

const allLiDOM = document.querySelectorAll('li');

for (let i = 0; i < allLiDOM.length; i++) {
    const itemDOM = allLiDOM[i];
    itemDOM.classList.add('darzove');
}