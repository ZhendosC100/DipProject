export default function img_click() {

    let body_img = document.querySelector('body'),
        works = document.querySelector('.works'),
        div = document.createElement('div'),
        section_sub = works.querySelector('.section_header_sub'),
        lupa = works.querySelectorAll('.lupa');
    div.classList.add('big_image');
    works.appendChild(div);


    works.addEventListener('mouseover', function (e) { //lupa display
        let target = e.target;
        e.preventDefault();

        if (target.classList.contains('img')) {
            target.previousElementSibling.style.display = 'block';
        }
    });

    const hideLupa = () => {
        for (let i = 0; i < lupa.length; i++) {
            lupa[i].style.display = 'none';
        }
    };


    works.addEventListener('mouseover', function (e) {
        let target = e.target;

        if (target.classList.contains('col-lg-3') || target.classList.contains('container')) {
            hideLupa();
        }


    });

    body_img.addEventListener('click', function (e) {
        let target = e.target;

        if (target.classList.contains('big_image')) {

            section_sub.style.display = "none";
            div.style.display = 'none';
            div.style.backgroundImage = "none";
            hideLupa();
        }


        const toBig = () => {
            section_sub.style.display = "block";
            div.style.display = 'block';
        };

        if (target.classList.contains('a_img_one') || target.classList.contains('lupa_one')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
        }

        if (target.classList.contains('a_img_two') || target.classList.contains('lupa_two')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/2.png) no-repeat";
        }

        if (target.classList.contains('a_img_three') || target.classList.contains('lupa_three')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/3.png) no-repeat";
        }

        if (target.classList.contains('a_img_four') || target.classList.contains('lupa_four')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/4.png) no-repeat";
        }

        if (target.classList.contains('a_img_five') || target.classList.contains('lupa_five')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/5.png) no-repeat";
        }

        if (target.classList.contains('a_img_six') || target.classList.contains('lupa_six')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/6.png) no-repeat";
        }

        if (target.classList.contains('a_img_seven') || target.classList.contains('lupa_seven')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/7.png) no-repeat";
        }

        if (target.classList.contains('a_img_eight') || target.classList.contains('lupa_eight')) {
            e.preventDefault();
            toBig();
            div.style.background = "url(img/our_works/big_img/8.png) no-repeat";
        }
    });

}