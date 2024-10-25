import iziToast from "izitoast";
import SimpleLightbox from "simplelightbox";

export function renderGallery(images) {
    const galleryContainer = document.getElementById('gallery');
    galleryContainer.innerHTML = '';  // Очищуємо галерею

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

    // Оновлюємо SimpleLightbox після додавання нових зображень
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
