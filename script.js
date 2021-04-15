let craigPhoto = document.querySelector('.craig-photo')
let imagePlaceholder = document.querySelector('.image-placeholder')
 craigPhoto.style.left = Math.round(imagePlaceholder.getBoundingClientRect().left).toString()+"px";
// craigPhoto.style.top = Math.round(imagePlaceholder.getBoundingClientRect().top).toString()+"px";


let domRectSample = craigPhoto.getBoundingClientRect();




function outOfView() {
    console.log('scrolling')
    let elementBounding = craigPhoto.getBoundingClientRect();
    if(elementBounding.top <= 20) {
        craigPhoto.classList.add("craig-photo-scrolled")
        document.querySelector('.green-box').classList.add("greenbox-p-visible")
    } else if(elementBounding.top > 20) {
        craigPhoto.classList.remove('craig-photo-scrolled')
        document.querySelector('.green-box').classList.remove("greenbox-p-visible")
    }
}

window.addEventListener('scroll', outOfView);

