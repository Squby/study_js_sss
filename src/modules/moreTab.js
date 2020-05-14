const moreTab = () => {
    const addSentenceBtn = document.querySelector('.add-sentence-btn'),
    sentence = document.querySelector('.sentence'),
    allTabs = Array.from(sentence.children[0].children[0].children[1].children);
    addSentenceBtn.addEventListener('click', () => {
        allTabs.forEach(element => {
            console.log(element);
            if (element.classList.contains('hidden') || element.classList.contains('visible-sm-block')){
                element.classList.remove('hidden');
                element.classList.remove('visible-sm-block');
            }
            addSentenceBtn.style.display = 'none';
        });

    });
};
export default moreTab;