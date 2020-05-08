 //ChengeIMG
 function ChengeIMG() {
    const imgAll = document.querySelectorAll('.command__photo');
    imgAll.forEach((element, i) =>  {
        imgAll[i].addEventListener('mouseover', () => {
            const mainSrc = event.target.src;
            event.target.src = event.target.dataset.img;
            event.target.dataset.img = mainSrc;
        });
        imgAll[i].addEventListener('mouseout', () => {
            const mainSrc = event.target.src;
            event.target.src = event.target.dataset.img;
            event.target.dataset.img = mainSrc;
        });
    });
}
export default ChengeIMG;