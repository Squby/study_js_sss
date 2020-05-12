const sendForm = () =>{

    const errorMessage = 'Что то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
   
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size:2rem;color:#fff;';
   
   
    const form = document.querySelectorAll('form');
   

    const validate = body => {
      const invalidFields = [];
       const rules = {
        user_name: {
           pattern: new RegExp('(^[а-яё -]{0,50})$', 'igm'), 
           message: 'Invalid fullname'
         },
         user_email: {
           pattern: new RegExp('[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}', 'igm'),
           message: 'Invalid email address!'
         },
         user_message: {
           pattern: new RegExp('^[а-яё !:;.-]{3,500}$', 'igm'),
           message: 'Invalid message'
         },
    
         user_phone:{
          pattern: new RegExp('(\\+?7|8)[0-9]{10,18}', 'g'),
          message: 'Invalid message'
         }
       };
      
      body.forEach((key, val) => {
         if(!key.match(rules[val].pattern)) {
           invalidFields.push(val);
         }
      });
      
      return invalidFields;
    };
   
   

   
    form.forEach((item, i)=> {
      form[i].addEventListener('submit', (event) =>{
        event.preventDefault();
    
        form[i].appendChild(statusMessage);
        const inputs = form[i].querySelectorAll('input');
    

        const clear =  () =>{inputs.forEach((item, i) => {
          inputs[i].value='';});
           };

        const formData = new FormData(form[i]);
        
        let body = {};
    
        formData.forEach((val, key) =>{
          body[key]=val;
         
          formData[key]=val;
   
        
         });
        
      statusMessage.textContent = loadMessage;
   
   
      const invalidFields = validate(formData);
      if (invalidFields.length !== 0) {
        invalidFields.forEach(elem => {
            item.querySelector(`input[name="${elem}"], textarea[name="${elem}"]`).style.cssText = `
                border: 2px solid red;
            `;
            item.querySelector(`input[name="${elem}"], textarea[name="${elem}"]`).classList.add('not-valid');
            statusMessage.textContent = errorMessage;
        });
   
        }else{

            invalidFields.forEach(elem => {
                item.querySelector(`input[name="${elem}"], textarea[name="${elem}"]`).style.cssText = `
                    border: none;
                `;
            });



       postData(body)
        .then((response) =>{
          if(response.status !==200){
            throw new Error('status network not 200');
          }
         statusMessage.textContent = successMessage; })
   
        .catch((error)=> {statusMessage.textContent = errorMessage;console.log('error');});
        clear();
         }
   
      });
      

   const postData =(body) =>{
   
     return fetch('./server.php', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(body)
     });
   };
    
    }
   
    );
   
      
   
   };
   export default sendForm;