const gallerySlider = document.getElementById('gallerySlider');
const galleryItems = gallerySlider.querySelectorAll('.carousel-item');

const MIN_SLIDES_PER_ITEM = 3;

function cloneAndClassifyCarouselItem(item, index) {
    const clone = item.cloneNode(true);
    if (index === 1) {
        clone.children[0].classList.add('carousel-centered-item');
    } else if (index === 2) {
        clone.children[0].classList.add('carousel-right-item');
    }
    return clone.children[0];
}

galleryItems.forEach((item) => {
    let nextItem = item.nextElementSibling;
    for (let i = 1; i < MIN_SLIDES_PER_ITEM; i++) {
        if (!nextItem) {
            nextItem = galleryItems[0];
        }
        const newChild = cloneAndClassifyCarouselItem(nextItem, i);
        item.appendChild(newChild);
        nextItem = nextItem.nextElementSibling;
    }
});