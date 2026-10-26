const buttons = document.querySelectorAll('.boxes');
const body= document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id==="red"){
            body.style.backgroundColor="red";
        }
        if(e.target.id==='green'){
            body.style.backgroundColor='green';
        } if(e.target.id==='blue'){
            body.style.backgroundColor='blue';
    } if(e.target.id==='grey'){
            body.style.backgroundColor='grey';
    }
});
});
