const API_KEY = '46483266-76bdcaf2ff3adfe100a8b1f15'; // Вставте свій ключ доступу сюди
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const data = await response.json();
        return data.hits;
    } catch (error) {
        throw error;
    }
}
