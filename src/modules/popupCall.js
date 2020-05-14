const popupCall = () => {
    const callBtn = document.querySelectorAll('.call-btn'),
        popup = document.querySelector('.popup');
    callBtn.forEach(element => {
        element.addEventListener('click', () => {
            popup.style.display = "block";
        });
    });


    popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
            }
        }
    });
    //discount-btn
    const discountBtn = document.querySelectorAll('.discount-btn'),
    popupDiscount = document.querySelector('.popup-discount');
    discountBtn.forEach(element => {
        element.addEventListener('click', () => {
            popupDiscount.style.display = 'block';
        });
    });
    popupDiscount.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupDiscount.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupDiscount.style.display = 'none';
            }
        }
    });

};
export default popupCall;