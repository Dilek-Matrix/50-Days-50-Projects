const progress = document.getElementById('progress');
const circles = document.querySelectorAll(".circle");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

let currentActive = 1;

next.addEventListener("click", () => {
    currentActive++;

    if(currentActive > circles.length){
        currentActive = circles.length
    }

    update();    
});

prev.addEventListener("click", () => {
    currentActive--;

    if(currentActive < 1){
        currentActive = 1;
    }

    update(); 
});

function update(){
    circles.forEach((circle, index) => {
        if(index < currentActive){
            circle.classList.add('active');
        } else{
            circle.classList.remove('active');
        }
    })

    const actives = document.querySelectorAll(".active"); /*yazarak "Bana o an active etiketine sahip kaç tane daire varsa onların sayısını getir" demiş oluyoruz.

    Özetle; active sınıfı, JavaScript'in CSS'e "Hey, kullanıcı bu adıma ulaştı, bu daireyi pembe yap!" deme yöntemidir.*/

     //console.log(actives.length, circles.length);
     //console.log(actives.length / circles.length);
     //console.log((actives.length / circles.length) *100);
     //console.log((actives.length -1) / (circles.length -1) *100);
     //console.log((actives.length -1) / (circles.length -1) *100 + '%');

     progress.style.width = (actives.length -1) / (circles.length -1)*100 + '%';

     if(currentActive === 1){
        prev.disabled = true;
     }else if(currentActive === circles.length){
        next.disabled = true;
     }else{
        prev.disabled = false;
        next.disabled = false;
     }
}
