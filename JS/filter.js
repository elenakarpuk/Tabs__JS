const filter = function (idElem) {
    let parentElem = document.querySelector(`#${idElem}`);
    if (!parentElem) return;

    let tabsParentElem = parentElem.children[0];
    let contentsParentElem = parentElem.children[1];

    if (!tabsParentElem || !contentsParentElem) return;

    let tabsElems = tabsParentElem.children;  //нашли список лишек
    let contentsElems = contentsParentElem.children;

    if (!tabsElems || !contentsElems || tabsElems.length <= 1) return; // проверка //tabsElems.length != contentsElems.length

    tabsElems = Array.from(tabsElems);
    contentsElems = Array.from(contentsElems);
    console.log('tabsElems');
    console.log('contentsElems');

    const reset = function () {
        tabsElems.forEach(elem => {
            elem.classList.remove('active')
        });
        contentsElems.forEach(elem => {
            elem.classList.remove('active')
        });
    }

    const active = function (event) {
        const filter = event.target.dataset.filter; //при клике на элемент мы забираем data-filter этого элемента

        if (!filter || filter.length == 0) return

        reset();

        if (filter === 'all') {
            event.target.classList.add('active')
            contentsElems.forEach(elem => {
                elem.classList.add('active')
            });
        } else {

            const contentElem = contentsParentElem.querySelectorAll(`[data-filter=${filter}]`) //поиск через аттрибут

            if (!contentElem) return;

            contentElem.forEach(ind => {
                ind.classList.add('active')
            });

            event.target.classList.add('active'); //this.classList.add('active') при клике присваиваем класс актив
        }
    }

    tabsElems.forEach(elem => {
        elem.addEventListener('click', active)
    });
}

