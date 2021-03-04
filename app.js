const s1=document.getElementById("s1");
const s2=document.getElementById("s2");
const s3=document.getElementById("s3");
const s4=document.getElementById("s4");
const s5=document.getElementById("s5");

const small_img=document.querySelector(".small_img");
const fir_img=document.querySelector(".fir_img");

s2.addEventListener('click',function(){
	s1.src=s2.src;
});
s3.addEventListener('click',function(){
	s1.src=s3.src;
});
s4.addEventListener('click',function(){
	s1.src=s4.src;
});
s5.addEventListener('click',function(){
	s1.src=s5.src;
});