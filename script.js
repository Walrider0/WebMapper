let x = 0;
let y = 0;

function move(dx, dy, r) {
    x += dx;
    y += dy;
    nyil.style.marginLeft = x + "px";
    nyil.style.marginTop = y + "px";

    if(r == 1)
        nyil.style.rotate = 0 + "deg";
    if(r == 2)
        nyil.rotate = 180 + "deg";
    if(r == 3)
        nyil.style.rotate = 270 + "deg";
    if(r == 4)
        nyil.rotate = 90 + "deg";
}
