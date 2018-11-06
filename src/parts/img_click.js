export default function img_click(){
    
    let body_img = document.querySelector('body'),
        works = document.querySelector('.works'),
        div = document.createElement('div'),
        section_sub = works.querySelector('.section_header_sub'),
        lupa = works.querySelectorAll('.lupa'); 
        div.classList.add('big_image');
        works.appendChild(div);   
        
        works.addEventListener('mouseout', function(e) {
            let target = e.target;

            if(target.classList.contains('lupa')){
                
                const delayOff = () => {
                    for(let i = 0; i < lupa.length; i++){
                        lupa[i].classList.remove('lupa_on');
                    }
                }; 
                setTimeout(delayOff, 2000);
            }
            
            if(target.classList.contains('img')){
                
                
                    for(let i = 0; i < lupa.length; i++){
                        lupa[i].classList.remove('lupa_on');
                    }
                
                
            }
        });
        
        works.addEventListener('mouseover', function(e){
            let target = e.target;
            
            if(target.classList.contains('img')){
                for(let i = 0; i < lupa.length; i++){
                    lupa[i].classList.add('lupa_on');
                }
            } 
        });


        body_img.addEventListener('click', function(e){
            let target = e.target;

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

            if(target.classList.contains('a_img_one') || target.classList.contains('lupa')){
                toBig();
                div.style.background = "url(img/our_works/big_img/1.png) no-repeat";
            }

            if(target.classList.contains('a_img_two') || target.classList.contains('lupa')){
                toBig();   
                div.style.background = "url(img/our_works/big_img/2.png) no-repeat";
            }

            if(target.classList.contains('a_img_three') || target.classList.contains('lupa')){
                toBig();
                div.style.background = "url(img/our_works/big_img/3.png) no-repeat";
            }

            if(target.classList.contains('a_img_four' || target.classList.contains('lupa'))){
                toBig();
                div.style.background = "url(img/our_works/big_img/4.png) no-repeat";
            }

            if(target.classList.contains('a_img_five' || target.classList.contains('lupa'))){
                toBig();
                div.style.background = "url(img/our_works/big_img/5.png) no-repeat";
            }

            if(target.classList.contains('a_img_six') || target.classList.contains('lupa')){
                toBig();
                div.style.background = "url(img/our_works/big_img/6.png) no-repeat";
            }

            if(target.classList.contains('a_img_seven' || target.classList.contains('lupa'))){
                toBig();
                div.style.background = "url(img/our_works/big_img/7.png) no-repeat";
            }

            if(target.classList.contains('a_img_eight' || target.classList.contains('lupa'))){
                toBig();
                div.style.background = "url(img/our_works/big_img/8.png) no-repeat";
            }
        });

}