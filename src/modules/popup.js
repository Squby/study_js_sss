  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn');

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            let count = 0,
                indexSetInterval;
            popup.style.display = 'block';
            function opacityAdd() {
                count += 0.1;
                popup.style.opacity = count;
                console.log(count);
                if (count >= 1) {
                    clearInterval(indexSetInterval);
                    count = 0;
                }
            }
            if (screen.width > 768) {
                popup.style.opacity = 0;

                indexSetInterval = setInterval(() => opacityAdd(), 50);
                console.log(indexSetInterval);
            }
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
};

export default togglePopUp;