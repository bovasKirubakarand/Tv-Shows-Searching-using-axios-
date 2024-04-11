const form = document.querySelector('#searchform');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})
const div = document.querySelector('#tv')
const makeImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            const newDiv = document.createElement('DIV');
            newDiv.append(img);
            div.append(newDiv);
        }
    }
}
function clearImages() {
    var images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
    }
}

