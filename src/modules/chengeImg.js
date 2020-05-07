 //ChengeIMG
 function ChengeIMG() {
    const imgAll = document.querySelectorAll('.command__photo');
    imgAll.forEach((element, i) =>  {
        imgAll[i].addEventListener('mouseenter', () => {
            event.target.src = event.target.dataset.img;
        });
    });
}
export default ChengeIMG;