const thumbnailSlider = document.getElementById('thumbnailSlider');
const thumbnailItems = thumbnailSlider.querySelectorAll('.carousel-item');

thumbnailItems.forEach((item, index) => {
    let itemDescriptionDiv = item.querySelector('.item-description');
    itemDescriptionDiv.textContent = `Image ${index + 1}`;
});