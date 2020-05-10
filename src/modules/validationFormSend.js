   const validationFormSend = () => {

    const forms = document.querySelectorAll('form');

    const validate = input => {

        const parent = input.closest('form');
        const enter = parent.querySelector('.form-btn');

        const rules = {
            user_name: {
                pattern: new RegExp('[а-яё ]', 'ig')
            },
            user_email: {
                pattern: new RegExp('[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}', 'igm'),
            },
            user_phone: {
                pattern: new RegExp('(\\+7|7|8){1,2}[0-9]{10}', 'g')
            },
            user_message: {
                pattern: new RegExp('[а-яё ]', 'ig')
            }
        };

        if(!input.value.match(rules[input.name].pattern)) {
            input.style.cssText = `border: 3px solid red;`;
            enter.disabled = true;
        } else {
            input.style.cssText = `border: 3px solid orange;`;
            enter.disabled = false;
        }

        if(input.value === '') {
            input.style.cssText = `border: none`;
            enter.disabled = false;
        }
        
    };

    forms.forEach(form => {
        form.addEventListener('input', e => {
            validate(e.target);
        });
    });
    };    
    export default validationFormSend;