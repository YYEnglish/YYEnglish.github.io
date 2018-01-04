var Cg = document.getElementsByClassName('Cg');
console.log(Cg);
for(var i=0; i<Cg.length;i++){
    if(i%2 != 0){
        Cg[i].style.backgroundColor = "#eee";
    }
}