const div = document.querySelector('div', {mode: 'cors'});

    async function getGIFS() {
        const response = await fetch('https://api.giphy.com/v1/gifs/search?api_key=i3Pr1NOafNmcxCgKSFMef6dtsjkdlEFO&q=light yagami&limit=25&offset=0&rating=g&lang=en', {mode: 'cors'});
        const jsonGIF = await response.json();
        const dataGIFS = await jsonGIF.data;
        dataGIFS.map(gif => {
            const image = document.createElement('img');
            image.setAttribute('title', gif.title);
            image.setAttribute('src', `https://media0.giphy.com/media/${gif.id}/giphy.gif`);
            div.appendChild(image);
        });
    }

getGIFS();