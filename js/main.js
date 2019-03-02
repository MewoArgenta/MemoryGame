const myDocFrag = document.createDocumentFragment();

for (let i = 0; i < 16; i++) {
    const newElement = document.createElement('img');
    newElement.innerText = 'This is paragraph number ' + i;

    fragment.appendChild(newElement);
}

document.body.appendChild(fragment);