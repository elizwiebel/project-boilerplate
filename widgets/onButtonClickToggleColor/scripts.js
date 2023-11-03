const btn = document.querySelector('.js-toggle-btn');
const content = document.querySelector('.js-toggle-content');

function btnClickHandler() {
    console.log('click')
    content.classList.toggle('--red')

    // This check also works but it not as clean
    // if (content.style.color === 'red') {
    //     // content.style.color = '' // This also works but leaves the style attribute in the HTML
    //     content.removeAttribute('style')
    // } else {
    //     content.style.color = 'red'
    // }
}

btn.addEventListener('click', btnClickHandler)
