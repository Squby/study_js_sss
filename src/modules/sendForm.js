const sendForm = () => {
    const errorMessage = 'Что-то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжимся!',
        forms = document.querySelectorAll('form');
    let indexForm;
    forms.forEach((elem, index) => {
        elem.addEventListener('click', event => {
            if (event.target.classList[0] === 'btn') {
                indexForm = index + 1;
                const form = document.getElementById(`form${indexForm}`);
                const statusMessage = document.createElement('div');
                statusMessage.style.cssText = 'font-size: 2rem; color : white;';
                form.addEventListener('submit', event => {
                    event.preventDefault();
                    form.appendChild(statusMessage);
                    statusMessage.textContent = loadMessage;
                    const formData = new FormData(form);
                    const postData = formData => fetch('./server.php', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: formData
                    });

                    postData(formData)
                        .then(response => {
                            if (response.status !== 200) {
                                throw new Error('status network not 200');
                            }
                            statusMessage.textContent = successMessage;
                        })
                        .catch(error => {
                            statusMessage.textContent = errorMessage;
                            console.error(error);
                        });

                        //todo
                        console.log(form);
                        [...form.elements].forEach(elem =>{
                            if (elem.tagName.toLowerCase() === 'input'){
                                console.log(elem);
                                elem.value = '';
                            }
                        }); 
                       
                });
            }
        });
    });


};
export default sendForm;