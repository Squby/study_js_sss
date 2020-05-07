   const validationFormSend = () => {
        const formName = document.querySelectorAll('.form-name'),
            formPhone = document.querySelectorAll('.form-phone'),
            mess = document.querySelector('.mess');

        formPhone.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^0-9+]/, '');
            });
        });

        mess.addEventListener('input', () => {
            mess.value = mess.value.replace(/[^а-яА-ЯёЁ]/, '');
            console.log(mess.value);
        });


        formName.forEach(elem => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/[^а-яА-ЯёЁ]/, '');
            });
        });

    };

    
    export default validationFormSend;