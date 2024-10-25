import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showError, showLoader, hideLoader } from './js/render-functions.js';

document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('search-input').value.trim();

    if (!query) {
        showError('Please enter a search term');
        return;
    }

    showLoader();
    try {
        const images = await fetchImages(query);
        hideLoader();

        if (images.length === 0) {
            showError('Sorry, there are no images matching your search query. Please try again!');
        } else {
            renderGallery(images);
        }
    } catch (error) {
        hideLoader();
        showError('Failed to fetch images. Please try again later.');
    }
});
