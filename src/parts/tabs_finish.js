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
        d.style.display = 'none';
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