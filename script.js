// disable button
document.getElementById('card-1').addEventListener('click', function () {
    disablebutton('card-1');
})
document.getElementById('card-2').addEventListener('click', function () {
    disablebutton('card-2');
})
document.getElementById('card-3').addEventListener('click', function () {
    disablebutton('card-3');
})
document.getElementById('card-4').addEventListener('click', function () {
    disablebutton('card-4');
})
document.getElementById('card-5').addEventListener('click', function () {
    disablebutton('card-5');
})
document.getElementById('card-6').addEventListener('click', function () {
    disablebutton('card-6');
})




document.getElementById('submit-btn').addEventListener('click', function () {
    const input = document.getElementById('input-id');
    const inputid = input.value;
    input.value = '';
    if (inputid === 'hero') {
        window.location.href = 'https://www.programming-hero.com/';
    }
    else {
        disablebutton('submit-btn')
        return alert('please enter the accurate name');
    }
})
