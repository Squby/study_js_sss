const sendForm = () => {
    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!',
        panelBody = document.getElementById('collapseTwo'),
        contentPanelBody = panelBody.children[0].children,
        onoffswitchCheckbox = document.querySelector('.onoffswitch-checkbox'),
        myonoffswitchTwo = document.querySelector('#myonoffswitch-two'),
        calcResult = document.querySelector('#calc-result'),
        distanceInput = document.querySelector('#collapseFour').children[0].children[1],
        directorForm = document.querySelector('.director-form'),
        consultationInput = directorForm.user_quest,
        constructBtn = document.querySelector('.construct-btn');
    
    const forms = document.forms;

    const statusMessage = document.createElement('div');
    statusMessage.textContent = 'Тут будет сообщение!';
    statusMessage.style.cssText = 'font-size: 2rem; color: black;';

    const postData = (formData) => fetch('./server.php',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    

    [...forms].forEach(form => {

        form.addEventListener('submit', event => {
            
            event.preventDefault();
            form.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            
            const formData = new FormData(form);
            //formData.append('user_quest');
            let body = {};

            formData.forEach((val, key) => {
                body[key] = val;
            });
            // Комментарий
            
            body['Количество камер'] = onoffswitchCheckbox.value;
            body['Диаметр 1-го колодца'] = contentPanelBody[1].children[1].value; 
            body['Количество колец 1-го колодца'] = contentPanelBody[2].children[1].value;
            if(!onoffswitchCheckbox.checked){
                body['Диаметр 2-го колодца'] = contentPanelBody[4].children[1].value;
                body['Количество колец 2-го колодца'] = contentPanelBody[5].children[1].value;
            }
            body['Наличие днища у колодца'] = myonoffswitchTwo.value;
            body['Растояние до дома'] = distanceInput.value;
            body['Общая стоимость'] = calcResult.value;
            if (consultationInput.value !== ''){
                body['Вопрос'] = consultationInput.value;
            }
            

            postData(body)
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