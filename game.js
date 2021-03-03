var numsquares=6;
var colors=colorpicker(numsquares);
var head=document.getElementById("heading");
var reset=document.getElementById("reset");

var easy= document.getElementById("easy");

 easy.classList.remove("btn");

var hard= document.getElementById("hard");
hard.classList.remove("btn");
easy.addEventListener("click",function(){
 numsquares=3;
 easy.classList.add("btn");
 hard.classList.remove("btn");
 colors=colorpicker(numsquares);
 colorsel();
 random=Math.floor(Math.random()*3);
 colordisplay.innerHTML=colors[random];
 head.style.backgroundColor="steelblue";
});
hard.addEventListener("click",function(){
numsquares=6;
colors=colorpicker(numsquares);
hard.classList.add("btn");
easy.classList.remove("btn");
 colorsel();
 random=Math.floor(Math.random()*6);
 colordisplay.innerHTML=colors[random];
 head.style.backgroundColor="steelblue";
});



var squares=document.querySelectorAll(".square");
var message= document.getElementById("message");
var colordisplay=document.getElementById("colorDisplay");
var random=Math.floor(Math.random() * 6);
colordisplay.innerHTML=colors[random];
colorsel();
reset.addEventListener("click",function(){
	message.innerHTML="";
	reset.innerHTML="new colors";
	colors=colorpicker(numsquares);
	random=Math.floor(Math.random() * numsquares);
    colordisplay.innerHTML=colors[random];
    head.style.backgroundColor="steelblue";
    colorsel();

});

function colorpicker(num){
     var arr=[];
     var a=0;
     var b=0;
     var c=0;

     for(i=0;i<num;i++){
     	a=Math.floor(Math.random()*255);
     	b=Math.floor(Math.random()*255);
     	c=Math.floor(Math.random()*255);
     	arr[i]="rgb("+a+", "+b+", "+c+")";
     }

     return arr;


}

function colorsel(){
    	
	 
	for(i=0;i<squares.length;i++){
	    if(colors[i]){
	    	squares[i].style.display="block";
	    	squares[i].style.backgroundColor=colors[i];

	    	squares[i].addEventListener("click",function(){
	    	
		 
				if(this.style.backgroundColor==colors[random]){
			 		message.innerHTML="color matched";
			 		reset.innerHTML="try again ?";
			 	

			 		for(j=0;j<colors.length;j++){
			 			squares[j].style.backgroundColor=colors[random];
			 		}
			 		head.style.backgroundColor=colors[random];

			 	} else {
			 
			 		this.style.backgroundColor="rgb(38, 38, 38)";
			 		message.innerHTML="try again";
			 		reset.innerHTML="new colors";
				}
		 
			});
		}else{
			squares[i].style.display="none"

		} 
	}
}	