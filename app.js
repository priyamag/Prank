let btn = document.getElementById("btn");
let st = document.getElementById("st");
let bf = document.getElementById("bf");
let ctn = document.getElementById("ctn");
let img = document.getElementById("img");
let n;
 let arr = [];
 function startit(){
     n = prompt("How Many Friends You Have");
     for (i = 0; i < n; i++){
         arr[i] = prompt("Write Their Names: ") 
     }
     for(i=0;i<arr.length;i++){
        var p=document.createElement("p");
        p.innerHTML=arr[i];
        ctn.appendChild(p);
        p.style.color="black";
        p.style.textAlign = "center";

     }
     st.style.visibility="hidden";
     btn.style.visibility = "visible";
 }
 function show(){
     bf.innerHTML="Your Best Friend Is : "+arr[Math.floor(Math.random() * arr.length)];
     bf.style.fontSize="40px";
     bf.style.color = "black";
     btn.style.visibility="hidden";
     img.style.visibility="visible";
     img.style.textAlign="center";
     

 }