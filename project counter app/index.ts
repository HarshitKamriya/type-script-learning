let inc = document.querySelector(".inc") as HTMLElement;
let dec = document.querySelector(".dec") as HTMLElement;
let reset = document.querySelector(".reset") as HTMLElement;
let value = document.querySelector(".values") as HTMLElement;
let count = 0;

function updatecounter(){
    if(value) value.textContent = count.toString();
}

inc?.addEventListener('click', function(){
    count++;
    updatecounter();
});

dec?.addEventListener('click', function(){
    count--;
    updatecounter();
});

reset?.addEventListener('click', function(){
    count = 0;
    updatecounter();
});