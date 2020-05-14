const accardionTwo = () => {
    const accordionTwo = document.getElementById('accordion-two'),
    itemsAccardion = Array.from(accordionTwo.children);
    itemsAccardion.forEach(element => {
        element.addEventListener('click', () => {
            event.preventDefault();
            itemsAccardion.forEach(element => {
                if ( element.children[1].classList.contains('in')){
                    element.children[1].classList.remove('in');
                }
            });
            element.children[1].classList.add('in');

        });
        
    });
};

export default accardionTwo;