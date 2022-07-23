// function fruits() {
//   if (true) {
//     var fruit1 = 'Apple';
//     let fruit2 = 'Kiwi';
//     const fruit3 = 'Banana';  
//   }
//   console.log(fruit1);
//   console.log(fruit2);
//   console.log(fruit3);
// }

// fruits();


let interruptor = true;

function rotar (e){
  if(interruptor){
    e.style.transform = "rotate(180deg)";
    interruptor = false;
  }
  else{
    e.style.transform = "rotate(0deg)";
    interruptor = true;
  }
}


let link_nav = document.getElementById('link-nav');
link_nav.addEventListener('click', function(e){
  console.log(e);
});