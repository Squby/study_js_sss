const calc = () => {
    const onoffswitchCheckbox = document.querySelector('.onoffswitch-checkbox'),
    formControl = document.querySelectorAll('.form-control'),
    panelBody = document.getElementById('collapseTwo'),
    contentPanelBody = panelBody.children[0].children,
    accordion = document.querySelector('#accordion'),
    calcResult = document.querySelector('#calc-result'),
    myonoffswitchTwo = document.querySelector('#myonoffswitch-two'),
    distanceInput = document.querySelector('#collapseFour').children[0].children[1],
    distanceBtn = document.querySelector('#collapseFour').children[0].children[2];
    let maintotal = 0;

    accordion.addEventListener('click', () => {
        if (onoffswitchCheckbox.checked){
            contentPanelBody[5].classList.add('hidden');
            contentPanelBody[4].classList.add('hidden');
            contentPanelBody[3].classList.add('hidden');
            
            let total = 10000;
            maintotal = total;
            if (contentPanelBody[1].children[1].value === '2 метра'){
                maintotal = total + (total * 0.2);
            }  
            if (contentPanelBody[2].children[1].value === '2 штуки'){
                maintotal += (total * 0.3);
            }   else if (contentPanelBody[2].children[1].value === '3 штуки'){
                maintotal += (total * 0.5);
            }
            if (myonoffswitchTwo.checked){
                maintotal += 1000;
            }
        }   else{
            contentPanelBody[5].classList.remove('hidden');
            contentPanelBody[4].classList.remove('hidden');
            contentPanelBody[3].classList.remove('hidden');
            let total = 15000;
            maintotal = total;
            if (contentPanelBody[1].children[1].value === '2 метра'){
                maintotal += (total * 0.2);
            }  
            if (contentPanelBody[2].children[1].value === '2 штуки'){
                maintotal += (total * 0.3);
            }   else if (contentPanelBody[2].children[1].value === '3 штуки'){
                maintotal += (total * 0.5);
            }
            if (contentPanelBody[4].children[1].value === '2 метра'){
                maintotal += (total * 0.2);
            }  
            if (contentPanelBody[5].children[1].value === '2 штуки'){
                maintotal += (total * 0.3);
            }   else if (contentPanelBody[5].children[1].value === '3 штуки'){
                maintotal += (total * 0.5);
            }
            if (myonoffswitchTwo.checked){
                maintotal += 2000;
            }

        }
        calcResult.value = maintotal;
        if (distanceInput.value === ''){
            distanceBtn.disabled = true;
        }
        distanceInput.addEventListener('input', () => {
            distanceInput.value = distanceInput.value.replace (/[^0-9]/, '');
            if (distanceInput.value === ''){
                distanceBtn.disabled = true;
            }   else{
                distanceBtn.disabled = false;
            }
        });
        
    });  
};

export default calc;