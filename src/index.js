import modal from './parts/modal';
import forms_modal from './parts/forms_modal';
import calc from './parts/calc';
import tabs_wind from './parts/tabs_wind';
import tabs_finish from './parts/tabs_finish';
import timer from './parts/timer';
import img_click from './parts/img_click';

window.addEventListener('DOMContentLoaded', function(){
    modal();
    forms_modal();
    calc();
    tabs_wind();
    tabs_finish();
    timer();
    img_click();
});
