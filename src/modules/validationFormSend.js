   const validationFormSend = () => {
        const formName = document.querySelectorAll('.form-name'),
            formPhone = document.querySelectorAll('.form-phone'),
            mess = document.querySelector('.mess');

        formPhone.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^0-9+]/gi, '');
            });
        });

        mess.addEventListener('input', () => {
            mess.value = mess.value.replace(/[^а-яА-ЯёЁ]/gi, '');
        });


        formName.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^а-яА-ЯёЁ]/gi, '');
            });
        });

    };

    
    export default validationFormSend;