'use strict';

const book = document.querySelectorAll('.book');
const title = document.querySelectorAll('h2');
console.log(book);
console.log(title);


book[0].before(book[1]);
book[2].before(book[4]);
book[4].after(book[3]);
book[3].after(book[5]);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

title[4].innerHTML = '<h2>Книга 3. this и Прототипы Объектов</h2>';

const adv = document.querySelector('.adv');
adv.remove();

const elems = document.querySelectorAll('li');
console.log(elems);
elems[9].after(elems[12]);
elems[12].after(elems[14]);
elems[15].after(elems[8]);
elems[37].after(elems[45]);
elems[45].after(elems[39]);
elems[39].after(elems[40]);
elems[43].after(elems[41]);

const elemClone = elems[45].cloneNode();
elemClone.textContent = 'Глава 8: За пределами ES6';
elems[55].after(elemClone);

console.log('elemClone: ', elemClone);