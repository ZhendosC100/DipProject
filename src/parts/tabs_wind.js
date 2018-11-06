export default function tabs_wind() {
    let glazing_slider = document.querySelector('.glazing_slider'),
        tree_link = glazing_slider.querySelector('.tree_link'),
        aluminum_link = glazing_slider.querySelector('.aluminum_link'),
        plastic_link = glazing_slider.querySelector('.plastic_link'),
        french_link = glazing_slider.querySelector('.french_link'),
        rise_link = glazing_slider.querySelector('.rise_link'),

        tree = document.querySelector('.tree'),
        aluminum = document.querySelector('.aluminum'),
        plastic = document.querySelector('.plastic'),
        french = document.querySelector('.french'),
        rise = document.querySelector('.rise');

    //Activating tabs 
    const tabActive = (a) => {
        a.classList.add('active');
    };

    //Deactivating tabs
    const tabDeactive = (d) => {
        d.classList.remove('active');
    };

    //Displaing content
    const contDisplay = (e) => {
        e.style.display = 'block';
    };

    //Hiding content
    const contDisplayNone = (n) => {
        n.style.display = 'none';
    };

    glazing_slider.addEventListener('click', function (e) {
        let target = e.target;

        //tree active
        if (target.classList.contains('tree_link')) {
            //link active/deactive
            tabActive(tree_link);

            tabDeactive(aluminum_link);
            tabDeactive(plastic_link);
            tabDeactive(french_link);
            tabDeactive(rise_link);
            //end

            //content display/none
            contDisplay(tree);

            contDisplayNone(aluminum);
            contDisplayNone(plastic);
            contDisplayNone(french);
            contDisplayNone(rise);
            //end
        }

        //aluminum active
        if (target.classList.contains('aluminum_link')) {
            //link active/deactive
            tabActive(aluminum_link);

            tabDeactive(tree_link);
            tabDeactive(plastic_link);
            tabDeactive(french_link);
            tabDeactive(rise_link);
            //end

            //content display/none
            contDisplay(aluminum);

            contDisplayNone(tree);
            contDisplayNone(plastic);
            contDisplayNone(french);
            contDisplayNone(rise);
            //end
        }

        //plastic active
        if (target.classList.contains('plastic_link')) {
            //link active/deactive
            tabActive(plastic_link);

            tabDeactive(tree_link);
            tabDeactive(aluminum_link);
            tabDeactive(french_link);
            tabDeactive(rise_link);
            //end

            //content display/none
            contDisplay(plastic);

            contDisplayNone(tree);
            contDisplayNone(aluminum);
            contDisplayNone(french);
            contDisplayNone(rise);
            //end
        }

        //french active
        if (target.classList.contains('french_link')) {
            //link active/deactive
            tabActive(french_link);

            tabDeactive(tree_link);
            tabDeactive(aluminum_link);
            tabDeactive(plastic_link);
            tabDeactive(rise_link);
            //end

            //content display/none
            contDisplay(french);

            contDisplayNone(tree);
            contDisplayNone(aluminum);
            contDisplayNone(plastic);
            contDisplayNone(rise);
            //end
        }

        //rise active
        if (target.classList.contains('rise_link')) {
            //link active/deactive
            tabActive(rise_link);

            tabDeactive(tree_link);
            tabDeactive(aluminum_link);
            tabDeactive(plastic_link);
            tabDeactive(french_link);
            //end

            //content display/none
            contDisplay(rise);

            contDisplayNone(tree);
            contDisplayNone(aluminum);
            contDisplayNone(plastic);
            contDisplayNone(french);
            //end
        }
    });

}