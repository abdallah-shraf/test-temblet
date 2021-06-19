let landing_page = document.querySelector(".landing_page");

let imgs_Array = [ "aa.jpg" , "ab.jpg" ," ac.jpg", "an1.jpg", "ag.jpg"];

setInterval(() => {
   let random_Number = Math.floor(Math.random() * imgs_Array.length);

   landing_page.style .backgroundImage  = 'url("img/' + imgs_Array[random_Number] + '")';

// console.log(random_Number);
   
},1000);