document.getElementsByClassName('btn-4')[0].addEventListener('click', () => {
    document.getElementsByClassName('container-success')[0].classList.remove('hidden')
    document.getElementsByClassName('container-error')[0].classList.add('hidden')
}, false)

document.getElementsByClassName('btn-6')[0].addEventListener('click', () => {
    document.getElementsByClassName('container-success')[0].classList.add('hidden')
    document.getElementsByClassName('container-error')[0].classList.remove('hidden')
}, false)