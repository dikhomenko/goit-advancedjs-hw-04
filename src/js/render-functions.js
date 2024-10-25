import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

export function renderGallery(images) {
    const galleryContainer = document.getElementById('gallery');
    const markup = images.map(image => `
        <a href="${image.largeImageURL}" class="gallery-item">
            <img src="${image.webformatURL}" alt="${image.tags}">
            <div class="info">
                <p>Likes: ${image.likes}</p>
                <p>Views: ${image.views}</p>
                <p>Comments: ${image.comments}</p>
                <p>Downloads: ${image.downloads}</p>
            </div>
        </a>
    `).join('');

    galleryContainer.insertAdjacentHTML('beforeend', markup);
    new SimpleLightbox('.gallery a').refresh();
}

export function showError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
    });
}

export function showLoader() {
    document.getElementById('loader').style.display = 'block';
}

export function hideLoader() {
    document.getElementById('loader').style.display = 'none';
}

export function toggleLoadMoreButton(show) {
    const loadMoreBtn = document.getElementById('load-more');
    if (show) {
        loadMoreBtn.style.display = 'block';
    } else {
        loadMoreBtn.style.display = 'none';
    }
}

export function scrollToNextGroup() {
    const { height: cardHeight } = document.querySelector('.gallery').firstElementChild.getBoundingClientRect();
    window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
    });
}
