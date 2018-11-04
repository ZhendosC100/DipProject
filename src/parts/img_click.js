export default function img_click(){
    
    let body_img = document.querySelector('body'),
        works = document.querySelector('.works'),
        div = document.createElement('div'),
        section_sub = works.querySelector('.section_header_sub'); 
        div.classList.add('big_image');
        works.appendChild(div);
        console.log(div);        

        body_img.addEventListener('click', function(e){
            let target = e.target;
            //console.log(e.target);

            if(target.classList.contains('section_header_sub')){
            
                section_sub.style.display = "none";
                div.style.display = 'none';
            }
           
           /* if(target.tagName == 'IMG'){
            //if(target.classList.contains('col-lg-3')){
                e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                //div.style.background = "url(img/our_works/big_img/1.png)";
            }*/

            if(target.classList.contains('a_img_one')){
                e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                div.style.backgroundImage = "url(img/our_works/big_img/1.png)";
            }

            if(target.classList.contains('a_img_two')){
            e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';    
                div.style.background = "url(img/our_works/big_img/2.png)";
            }

            if(target.classList.contains('a_img_three')){
            e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                div.style.background = "url(img/our_works/big_img/3.png)";
            }

            if(target.classList.contains('a_img_four')){
            e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                div.style.background = "url(img/our_works/big_img/4.png)";
            }

            if(target.classList.contains('a_img_five')){
            e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                div.style.background = "url(img/our_works/big_img/5.png)";
            }

            if(target.classList.contains('a_img_six')){
            e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                div.style.background = "url(img/our_works/big_img/6.png)";
            }

            if(target.classList.contains('a_img_seven')){
            e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                div.style.background = "url(img/our_works/big_img/7.png)";
            }

            if(target.classList.contains('a_img_eight')){
            e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
                div.style.background = "url(img/our_works/big_img/8.png)";
            }
        });

}