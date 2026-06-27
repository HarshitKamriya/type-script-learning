"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let reset = document.querySelector(".reset");
let value = document.querySelector(".values");
let count = 0;
function updatecounter() {
    if (value)
        value.textContent = count.toString();
}
inc?.addEventListener('click', function () {
    count++;
    updatecounter();
});
dec?.addEventListener('click', function () {
    count--;
    updatecounter();
});
reset?.addEventListener('click', function () {
    count = 0;
    updatecounter();
});
//# sourceMappingURL=index.js.map