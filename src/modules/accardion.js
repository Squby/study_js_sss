const accardion = () => {
    //переключение табами
    const accordion = document.getElementById('accordion'),
    itemsAccardion = Array.from(accordion.children);
    itemsAccardion.forEach(element => {
        element.children[0].addEventListener('click', () => {
            event.preventDefault();
            itemsAccardion.forEach(element => {
                if ( element.children[1].classList.contains('in')){
                    element.children[1].classList.remove('in');
                }
            });
            element.children[1].classList.add('in');
        });
        
    });
    //переключение кнопокй
    const constructBtn = document.querySelectorAll('.construct-btn');
    constructBtn.forEach(element => {
        element.addEventListener('click', () => {
            event.preventDefault();
            itemsAccardion.forEach(elem => {
                if ( elem.children[1].classList.contains('in')){
                    elem.children[1].classList.remove('in');
                }
                if (element.getAttribute('href')){
                    if (elem.children[1].id === element.getAttribute('href').substr(1)){
                        elem.children[1].classList.add('in');
                   }
                }
               itemsAccardion.forEach(element => {
               
            });
            });
        });
    });

    
};

export default accardion;