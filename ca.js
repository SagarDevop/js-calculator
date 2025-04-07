let string = "";
let btns = document.querySelectorAll(".btn");
 let inpt = document.querySelector("input");
Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(
            e.target.innerHTML == "="
        ){
            string = eval(string);
            inpt.value = string;
        }
       else if(
            e.target.innerHTML == "c"
        ){
            string = "";
            inpt.value = string;
        }
        
        else{
        string = string + e.target.innerHTML;
        inpt.value = string;
  }
  })
})  