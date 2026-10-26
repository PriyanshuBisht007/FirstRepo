let btn=document.getElementsByClassName("btn")[0]
let boy=document.getElementsByClassName("boy")[0]
let girl=document.getElementsByClassName("girl")[0]
let arr1=["shivesh","prsainjit","priyanshu","sahil","paaji","taraank","vaibhav","shobhit","saurav","suraj","sujal"]
let arr2=["sara","sneha","neha","simran","shruti","radhika","khushi","sakshi","monika","shiristi","suhani"]





btn.addEventListener("click",()=>{
    let x=Math.floor(Math.random()*(arr1.length-1));
    boy.innerHTML=arr1[x]

})
btn.addEventListener("click",()=>{
    let y=Math.floor(Math.random()*(arr2.length-1));
     girl.innerHTML=arr2[y]
})
