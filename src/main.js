import { fetchImages } from './js/pixabay-api.js';
import { renderGallery, showError, showLoader, hideLoader, toggleLoadMoreButton, scrollToNextGroup } from './js/render-functions.js';

let query = '';
let page = 1;
let totalHits = 0;

document.getElementById('search-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    query = document.getElementById('search-input').value.trim();

    if (!query) {
        showError('Please enter a search term');
        return;
    }

    resetGallery();
    page = 1;
    await searchImages();
});

document.getElementById('load-more').addEventListener('click', async () => {
    page += 1;
    await searchImages();
});

async function searchImages() {
    showLoader();
    try {
        const { hits, totalHits: total } = await fetchImages(query, page);
        hideLoader();
        totalHits = total;

        if (hits.length === 0) {
            showError('Sorry, there are no images matching your search query. Please try again!');
            return;
        }

        renderGallery(hits);
        toggleLoadMoreButton(totalHits > document.querySelectorAll('.gallery-item').length);

        if (page > 1) {
            scrollToNextGroup();
        }

        if (totalHits <= document.querySelectorAll('.gallery-item').length) {
            toggleLoadMoreButton(false);
            showError("We're sorry, but you've reached the end of search results.");
        }
    } catch (error) {
        hideLoader();
        showError('Failed to fetch images. Please try again later.');
    }
}

function resetGallery() {
    document.getElementById('gallery').innerHTML = '';
    toggleLoadMoreButton(false);
}
