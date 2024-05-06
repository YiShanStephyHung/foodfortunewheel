let pointer = document.getElementById("pointer");
let turntable = document.getElementsByClassName("panel");
let rotateAngle = 0; // random angle per click
let lastAngle = 0; // last angle
let turns = 4; // number of turns

pointer.addEventListener("click", function () {
    rotateAngle = Math.floor(Math.random() * 1000);
    Array.from(turntable).forEach(p => {
        p.style.transform = `rotate(${rotateAngle + lastAngle + 360 * turns}deg)`;
        p.style.transition = `all 5s cubic-bezier(0.42, 0, 0.2, 0.91)`
    });
    lastAngle += rotateAngle + 360 * turns;
});

/*
1. 獎項角度 0~360deg
2. 為了畫面多轉 turns 圈，取角度後都再加 360 * turns deg
3. 每次取完角度後不歸零，因此必須加上上一個角度
*/