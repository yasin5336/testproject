const myBtn = document.querySelector(".myBtn")
const textDiv = document.querySelector(".text")
const myBtn2 = document.querySelector(".myBtn2")
function loadText (){
    var xhr =new XMLHttpRequest
    xhr.open("GET","text.txt",true)
    xhr.onload=function(){
        if(xhr.status==200){
            textDiv.innerHTML=this.response
        }
    }
    xhr.send()
}
function deleteText(){
   textDiv.innerHTML=""
} 
myBtn.addEventListener("click",loadText)
myBtn2.addEventListener("click",deleteText)