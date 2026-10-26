let b1=document.getElementById("b1");
let b2=document.getElementById("b2");
let b3=document.getElementById("b3");
let b4=document.getElementById("b4");
let b5=document.getElementById("b5");
let b6=document.getElementById("b6");

b1.addEventListener("mouseover",()=>{
    let x=Math.floor(Math.random()*100);
    b1.innerHTML=x;
});
b1.addEventListener("mouseout",()=>{
    b1.innerHTML=1;
});
b2.addEventListener("click",()=>{
      let x=Math.floor(Math.random()*255);
      let y=Math.floor(Math.random()*255);
      let z=Math.floor(Math.random()*255);
      b2.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
})
b3.addEventListener("click",()=>{
      let x=Math.floor(Math.random()*255);
      let y=Math.floor(Math.random()*255);
      let z=Math.floor(Math.random()*255);
      b1.innerHTML=x;
      b2.innerHTML=y;
      b4.innerHTML=z;
})
b4.addEventListener("click",()=>{
      let x=Math.floor(Math.random()*255);
      let y=Math.floor(Math.random()*255);
      let z=Math.floor(Math.random()*255);
      b2.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
      b1.style.backgroundColor = `rgb(${y}, ${z}, ${x})`;
      b3.style.backgroundColor = `rgb(${z}, ${x}, ${y})`;
})
b5.addEventListener("click",()=>{
 b5.addEventListener("click",()=>{
      let x=Math.floor(Math.random()*195);
     
      setTimeout(()=>{
       b1.style.backgroundColor = "white";
      },1000);
        b1.style.backgroundColor = `rgb(${x},40,50)`;
      setTimeout(()=>{
       b2.style.backgroundColor = "white";
      },2000);
        b2.style.backgroundColor = `rgb(${x},40,50)`;
      setTimeout(()=>{
       b3.style.backgroundColor = "white";
      },3000);
        b3.style.backgroundColor = `rgb(${x},40,50)`;
      setTimeout(()=>{
       b4.style.backgroundColor = "white";
      },4000);
        b4.style.backgroundColor = `rgb(${x},40,50)`;
      setTimeout(()=>{
       b5.style.backgroundColor = "white";
      },5000);
        b5.style.backgroundColor = `rgb(${x},40,50)`;
      setTimeout(()=>{
       b6.style.backgroundColor = "white";
      },6000);
        b6.style.backgroundColor = `rgb(${x},40,50)`;
})
})
b6.addEventListener("click",()=>{
       b6.innerText("do no click");
   
})