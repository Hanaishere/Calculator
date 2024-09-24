let string="";
let buttons= document.querySelectorAll('.button');
//query selector karega ki jin jin ki query button hai  unn sabko select kar lega
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
        }
        else if(e.target.innerHTML == 'AC'){
          string ="";
        }
        else{
        console.log(e.target)
        string =  string + e.target.innerHTML ;
        document.querySelector('input').value = string;
        }
    })

})