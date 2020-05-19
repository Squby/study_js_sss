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
    //check-btn
    const checkBtn = document.querySelector('.check-btn'),
    popupCheck = document.querySelector('.popup-check');
        checkBtn.addEventListener('click', () => {
            popupCheck.style.display = 'block';
    });
    popupCheck.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupCheck.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupCheck.style.display = 'none';
            }
        }
    });

    //consultation-btn
    const consultationBtn = document.querySelector('.consultation-btn'),
    popupConsultation = document.querySelector('.popup-consultation'),
    directorForm = document.querySelector('.director-form'),
    consultationInput = directorForm.user_quest;
    consultationBtn.disabled = true;
    if(consultationInput.value !== ''){
        consultationBtn.disabled = false;
    }
    consultationInput.addEventListener('input', () =>{
        if(consultationInput.value !== ''){
            consultationBtn.disabled = false;
        } else {
            consultationBtn.disabled = true;
        }
    });
    consultationBtn.addEventListener('click', () => {
        event.preventDefault();
        popupConsultation.style.display = 'block';
    });
       
    popupConsultation.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popupConsultation.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popupConsultation.style.display = 'none';
            }
        }
    });

};
export default popupCall;