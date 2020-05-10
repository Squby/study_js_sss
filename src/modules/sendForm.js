const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
    const forms = document.forms;

    const statusMessage = document.createElement('div');
    statusMessage.textContent = 'Тут будет сообщение!';
    statusMessage.style.cssText = 'font-size: 2rem; color: white;';

    const postData = (formData) => fetch('./server.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
    



        

    [...forms].forEach(form => {

        form.addEventListener('submit', event => {

            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            const formData = new FormData(form);
            postData(formData)
                .then((response) => {
                    if(response.status !==200){
                        throw new Error('status network not 200');
                    }
                    statusMessage.textContent = successMessage;
                    setTimeout(function() {
                        statusMessage.remove();
                    }, 5000);
                })
                .catch((error) => {
                    statusMessage.textContent = errorMessage;
                    console.error(error);
                    setTimeout(function() {
                        statusMessage.remove();
                    }, 5000);
                });

            [...form.elements].forEach(elem => {
                if (elem.tagName.toLowerCase() === 'input') {
                    elem.value = '';
                }
            });
        });
    });
};
export default sendForm;