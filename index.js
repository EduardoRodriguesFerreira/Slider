var botãoir = document.querySelector("#btnir")
var botãoir = document.querySelector("#btnir")
var botãovoltar = document.querySelector("#btnvoltar")
var mario = document.querySelector("#mario")
var tlou2 = document.querySelector("#thelast")
var detroit = document.querySelector("#detroit")

botãoir.addEventListener('click', function(){
  


   if(  mario.style.visibility == "visible" || tlou2.style.visibility =="visible" 
   ){   
      tlou2.style.visibility ="visible"
      tlou2.style.marginLeft ="-576px"
      tlou2.style.marginTop ="-236px"
      tlou2.style.transition ="1s"
      tlou2.style.filter = "blur(6px)"
      mario.style.width = "665px"
      tlou2.style.width = "490px"
      detroit.style.height = "390px"
      mario.style.filter = "blur(6px)"
      detroit.style.visibility="visible"
      detroit.style.marginLeft ="-525px"
      detroit.style.marginTop ="-186px"
      detroit.style.transition ="1s"
   
      
        
   }
  
   else if(mario.style.visibility = "visible" ||   tlou2.style.visibility =="visible"){
      tlou2.style.visibility ="visible"
      tlou2.style.marginLeft ="-576px"
      tlou2.style.marginTop ="-236px"
      tlou2.style.transition ="1s"
      tlou2.style.filter = "blur(0px)"
      mario.style.width = "665px"
      tlou2.style.width = "490px"
      mario.style.filter = "blur(6px)"
      detroit.style.visibility="hidden"
      tlou2.classList.add("puse")
      detroit.classList.add("puse")
    
}



 
}

)
          
botãovoltar.addEventListener('click', function(){
  
      if(  detroit.style.visibility=="visible"&&tlou2.style.visibility =="visible"
      ){   
         tlou2.style.visibility ="visible"
         tlou2.style.marginLeft ="-576px"
         tlou2.style.marginTop ="-236px"
         tlou2.style.filter = "blur(0px)"
         mario.style.width = "665px"
         tlou2.style.width = "490px"
         detroit.style.height = "390px"
         mario.style.filter = "blur(6px)"
         detroit.style.visibility="hidden"
         detroit.style.marginLeft ="-525px"
         detroit.style.marginTop ="-186px"
         detroit.style.transition ="0s"
        
       
      }
     
      else if(tlou2.style.visibility=="visible"||detroit.style.visibility =="visible"){
         tlou2.style.visibility ="hidden"
         tlou2.style.marginLeft ="-576px"
         tlou2.style.marginTop ="-236px"
         tlou2.style.filter = "blur(0px)"
         mario.style.width = "665px"
         tlou2.style.width = "490px"
         mario.style.filter = "blur(0px)"
         detroit.style.visibility="hidden"
        
       
   }
   
 })