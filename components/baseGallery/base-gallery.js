document.addEventListener('DOMContentLoaded', function() {
    const searchIcons = document.querySelectorAll('.bi-search');

    searchIcons.forEach(function(icon) {
        icon.addEventListener('click', function() {
            const imageId = icon.dataset.imageId;
            const imageSrc = icon.dataset.imageSrc;
            const modalImage = document.getElementById('modal-image');

            modalImage.src = imageSrc;
            modalImage.alt = imageId;
        });
    });
});