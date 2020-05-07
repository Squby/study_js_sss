 //ValidationFormInput
    function ValidationFormInput() {
        const calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day');

        function validationNum(inputValid) {
            inputValid.addEventListener('input', () => {
                inputValid.value = inputValid.value.replace(/\D/gi);
            });
        }
        validationNum(calcSquare);
        validationNum(calcCount);
        validationNum(calcDay);
    }

    export default ValidationFormInput;