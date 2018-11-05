export default function tabs_finish() {
    let body_tabs = document.querySelector('body'),
        slider_dec = document.querySelector('.decoration_slider'),
        //tabs_dec = slider_dec.querySelectorAll('.decoration_item'),
        internal_link = slider_dec.querySelector('.internal_link'),
        external_link = slider_dec.querySelector('.external_link'),
        rising_link = slider_dec.querySelector('.rising_link'),
        roof_link = slider_dec.querySelector('.roof_link'),
        dec_content = document.querySelector('.decoration_content'),
        internal = dec_content.querySelector('.internal'),
        external = dec_content.querySelector('.external'),
        rising = dec_content.querySelector('.rising'),
        roof = dec_content.querySelector('.roof');
        
    const toActive = (a) => {
        a.classList.add('after_click');
    };

    const disActive = (b) => {
        b.classList.remove('after_click');
    };

    const displayOn = (c) => {
        c.style.display = 'block';
    };

    const displayNone = (d) => {
        c.style.display = 'none';
    };

    body_tabs.addEventListener('click', function(event){
        let target = event.target;
        if (target.classList.contains('internal_lnk')){
            //event.preventDefault();
            //activited/deactived tabs 
            toActive(internal_link);

            disActive(external_link);
            disActive(rising_link);
            disActive(roof_link);
            //end

            //display block/none content of tabs
            displayOn(internal);

            displayNone(external);
            displayNone(rising);
            displayNone(roof);
            //end
            
        }

        if (target.classList.contains('external_lnk')){
            //event.preventDefault();
            //activited/deactived tabs
            toActive(external_link);

            disActive(roof_link);
            disActive(internal_link);
            disActive(rising_link);
            //end

            //display block/none content of tabs
            displayOn(external);

            displayNone(internal);
            displayNone(rising);
            displayNone(roof);
            //end

        }

        if (target.classList.contains('rising_lnk')){
            //event.preventDefault();

            //activited/deactived tabs
            toActive(rising_link);

            disActive(roof_link);
            disActive(internal_link);
            disActive(external_link);
            //end

            //display block/none content of tabs
            displayOn(rising);

            displayNone(internal);
            displayNone(external);
            displayNone(roof);
            //end
            
        }

        if (target.classList.contains('roof_lnk')){
            //event.preventDefault();

            //activited/deactived tabs
            toActive(roof_link);

            disActive(external_link);
            disActive(internal_link);
            disActive(rising_link);
            //end

            //display block/none content of tabs
            displayOn(roof);

            displayNone(internal);
            displayNone(external);
            displayNone(rising);
            //end
        }
    });

}


/*let tab = document.querySelectorAll('.info-header-tab'),
info = document.querySelector('.info-header'),
tabContent = document.querySelectorAll('.info-tabcontent');

//функция скрывающая табы
const hideTabContent = (a) => {
for (let i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
}
};
hideTabContent(1);

//функция показывающая tabContent
const showTabContent = (b) => {
for (let i = b; i < tabContent.length; i++) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }

}
};

//назначение обработчика событий при клике на каждый из табов
info.addEventListener('click', (event) => {
let target = event.target; //делегирование события
if (target && target.classList.contains('info-header-tab')) { //делегирование события
    for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
            hideTabContent(0);
            showTabContent(i);
            break;
        }
    }
}
});*/