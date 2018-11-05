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
                div.style.backgroundImage = "none";
            }
           

            const toBig = () => {
                e.preventDefault();
                section_sub.style.display = "block";
                div.style.display = 'block';
            };

            if(target.classList.contains('a_img_one')){
                toBig();
                div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
            }

            if(target.classList.contains('a_img_two')){
                toBig();   
                div.style.background = "url(img/our_works/big_img/2.png) no-repeat";
            }

            if(target.classList.contains('a_img_three')){
                toBig();
                div.style.background = "url(img/our_works/big_img/3.png) no-repeat";
            }

            if(target.classList.contains('a_img_four')){
                toBig();
                div.style.background = "url(img/our_works/big_img/4.png) no-repeat";
            }

            if(target.classList.contains('a_img_five')){
                toBig();
                div.style.background = "url(img/our_works/big_img/5.png) no-repeat";
            }

            if(target.classList.contains('a_img_six')){
                toBig();
                div.style.background = "url(img/our_works/big_img/6.png) no-repeat";
            }

            if(target.classList.contains('a_img_seven')){
                toBig();
                div.style.background = "url(img/our_works/big_img/7.png) no-repeat";
            }

            if(target.classList.contains('a_img_eight')){
                toBig();
                div.style.background = "url(img/our_works/big_img/8.png) no-repeat";
            }
        });

}