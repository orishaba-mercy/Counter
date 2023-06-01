let add = document.getElementById('increament');
let deleting = document.getElementById('decreament')
 
let int = document.getElementById("number");
let integer = 0;

add.addEventListener('click',function(){
   integer +=1;
   int.innerHTML=integer;
});
deleting.addEventListener('click',function(){
    integer -=1;
    int.innerHTML=integer;
})