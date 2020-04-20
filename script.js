'use strict';

const DomElement = function () {
    DomElement.selector = '#';
    DomElement.height = '50px' ; 
    DomElement.width = '50px'; 
    DomElement.bg = 'black'; 
    DomElement.fontSize = '20px';

};

DomElement.prototype.selectors = function() {
    let str = DomElement.selector;
    if (str[0] == '.'){
        document.body.innerHTML = '<div class = "block">Dote Lorem lorem</div>';}
    else if (str[0] == '#'){
        document.body.innerHTML = '<div class = "id">Teg Lorem lorem</div>';
    }
};
DomElement();
DomElement.prototype.selectors();

const div1 = new DomElement();