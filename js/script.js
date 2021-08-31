new CircleType(document.querySelector('.header'));
new CircleType(document.querySelector('.portfolio'));
ScrollReveal().reveal('.header', { delay: 300 });
ScrollReveal().reveal('.head', { delay: 300 });
ScrollReveal().reveal('.elfsight-app-547fb5b5-9c84-47b1-81f5-16da866996e4', { delay: 300 });
options = {
    "cursorOuter": "disable",
    "hoverEffect": "pointer-overlay",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
};
magicMouse(options);
LottieInteractivity.create({
    mode: "scroll",
    player: '#firstLottie',
    actions: [{
        visibility: [0, 1],
        type: "seek",
        frames: [0, 90],
    }, ]
});