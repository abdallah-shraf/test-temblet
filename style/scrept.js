//check if there is local storage color option
let main_color = localStorage.getItem("color_option");


if (main_color !== null){
   
   document.documentElement.style.setProperty('--main-color',main_color);

   //remove class active from colors list item
   document.querySelectorAll(".colors_list li").forEach(element => {
      element.classList.remove("active"); 

      //add class active on element with data-color ===local storage item
      if (element.dataset.color ===main_color){
         //add class active
         element.classList.add("active");
      }
   });
   
}

//Buckground opthion

let background_option = true;

//variable to control thi interval

let background_Interval;

//check if there is local storage background item
let background_Item =localStorage.getItem("background_Opttion");

//check if random background local is not empty
if (background_Item !== null) {

   
   if (background_Item === 'true') {

      background_option = true;

   }else{

      background_option =false;

   }

  //remove class active all span
  document.querySelectorAll(".random_background span").forEach(element => {

     element.classList.remove("active");

  });

  if(background_Item =='true'){

   document.querySelector(".random_background .yes").classList.add("active");

  }else{

     document.querySelector(".random_background .no").classList.add("active");
     
  }
}

//click on togle setting gear
document.querySelector(".toggel_settings .fas").onclick = function(){
   //Toggle class fa-spin for rotation on self
   this.classList.toggle("fa-spin");
   //Toggle class open on main setting box
   document.querySelector(".setting_box").classList.toggle("open");


};
//swich color

const colorLi=document.querySelectorAll(".colors_list li");
//loop on all list iems
colorLi.forEach(li => {
   //click on event list item
   li.addEventListener("click",(e) => {
      //set color on root
      document.documentElement.style.setProperty('--main-color', e.target.dataset.color);
      //set color on local storage
      localStorage.setItem("color_option", e.target.dataset.color);

      handleActive(e);
       

   });
});
//switch background
const backgroundEl=document.querySelectorAll(".random_background span");
//loop on all span
backgroundEl.forEach(span => {
   //click on event span
   span.addEventListener("click",(e) => {
      
      handleActive(e);

      if(e.target.dataset.background === 'yes'){
        
         background_option= true;
         
         
         randomize_Img();
         
         localStorage.setItem("background_Opttion", true);


      }else{
      
         background_option= false;
        clearInterval(background_Interval);
        localStorage.setItem("background_Opttion", false);
      }

   });
});

// select landing page element
let landing_page = document.querySelector(".landing_page");
//get array of imgs
let imgs_Array = [ "aa.jpg" , "ab.jpg" ,"an1.jpg", "ag.jpg","an2.jpg"];



//function to randomize img

function randomize_Img () {
   
   if (background_option ===true){

      background_Interval= setInterval(() => {
         //get random number
         let random_Number = Math.floor(Math.random() * imgs_Array.length);

         //change background imge 
         landing_page.style .backgroundImage  = 'url("style/img/' + imgs_Array[random_Number] + '")';

      },2000);

   }

}

randomize_Img ();

//select skills selector

let our_Skills=document.querySelector(".skills");

window.onscroll = function () {
   
   //skills offset top

   let skills_top =our_Skills.offsetTop;

   //skills outer height
   let skills_high=our_Skills.offsetHeight;

   //window Hight
   let windo_hight =this.innerHeight;

   //window scroll top
   let window_scroll= this.pageYOffset;

   if (window_scroll >(skills_top + skills_high - windo_hight)) {
      
      let all_skill =document.querySelectorAll(".skills_box .skills_proress span");

      all_skill.forEach(skill => {
         
         skill.style.width = skill.dataset.progress;

      });
   }
};

//creat popup the imge
let our_gallery = document.querySelectorAll(".gallery img");

our_gallery.forEach(img => {

   img.addEventListener('click', (e) => {

      //creat overlay element
      let overlay=document.createElement("div");

      //add class to overlay
      overlay.className = 'popup_overlay';

      //append overlay to the body
      document.body.appendChild(overlay);

      //creat poup

      let popup_box = document.createElement("div");

      //add class to the popup box

      popup_box.className = 'popup_Box';

      if(img.alt !== null){

         //creat heading
         let img_heading =document.createElement("h3");

         //creat text for heading
         let img_text =document.createTextNode(img.alt);

         //creat the text to the heading
         img_heading.appendChild(img_text);

         //append the heading to the popup box
         popup_box.appendChild(img_heading); 

      }

      //creat img

      let popup_img = document.createElement("img");
      //set image source
      popup_img.src = img.src;

      popup_box.appendChild(popup_img);

      //append the popup box to body
      document.body.appendChild(popup_box);

      //creat the close span 
      let close_button =document.createElement("span");

      //creat text to close button text
      let close_text=document.createTextNode("X");

      //crea the close button
      close_button.appendChild(close_text);

      //add class button 
      close_button.className='close';

      //add close button to the box
      popup_box.appendChild(close_button);


   });
});

//close popup

document.addEventListener("click", function(e){

   if(e.target.className == 'close'){
   //remove the current popup
   e.target.parentNode.remove();

   //reove overlay
   document.querySelector(".popup_overlay").remove();
   }

});

function scroll_somWhere(element){

   element.forEach(ele => {

      ele.addEventListener("click" , (e) => {
         e.preventDefault();
         
         
      
           document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: 'smooth'
           });
      });
   
   });
   
   

}

//select all bullets
const all_bullet =document.querySelectorAll(".nav_pulets .bullet");

scroll_somWhere(all_bullet);


//select all links
const all_link =document.querySelectorAll(".link a");

scroll_somWhere(all_link);



//handle Active state
function handleActive(event){
   event.target.parentElement.querySelectorAll(".active").forEach(element => {
      element.classList.remove("active");

   });

   event.target.classList.add('active')
}


let bullet_span= document.querySelectorAll(".bullets_option span");

let bullets_container = document.querySelector(".nav_pulets");

let bullet_local = localStorage.getItem("bullets_option");

if (bullet_local !== null) {
   
   bullet_span.forEach(span => {
      span.classList.remove("active");
   });

   if (bullet_local === 'block') {
      
      bullets_container.style.display = 'block';
      
      document.querySelector(".bullets_option .yes").classList.add("active");

   }else{
      bullets_container.style.display = 'none';

      document.querySelector(".bullets_option .no").classList.add("active");

   }

}

bullet_span.forEach(span => {
   span.addEventListener("click", (e) => {

      if (span.dataset.display === 'show') {

         bullets_container.style.display = 'block';

         localStorage.setItem("bullets_option" , 'block');

         
      }else{
         bullets_container.style.display = 'none';

         localStorage.setItem("bullets_option",'none');
      }

      handleActive(e); 
   });
});

//reset button

document.querySelector(".reset_option").onclick = function(){
   
   //remove localstorage
   localStorage.clear();

   //reset window
   window.location.reload();

}