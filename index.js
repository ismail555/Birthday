let body = document.querySelector("body");
let divText = document.querySelector("div.center");
let input = document.getElementById('input');

function changeBackgroundColor() {
    let colorArray = [
        '#659dbd',
        '#000000',
        '#83677B',
        '#D79922',
        '#EFE2BA',
        '#AC3B61',
        '#116466',
        '#14A76C'
    ];
    body.style.background = colorArray[input.value];
    input.value++;
    if (input.value === (colorArray.length).toString()) {
        input.value = 0;
    }
}

window.addEventListener('keydown', function(e) {
    changeBackgroundColor();
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
});