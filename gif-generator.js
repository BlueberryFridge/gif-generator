const div = document.querySelector('div', {mode: 'cors'});

fetch('https://api.giphy.com/v1/gifs/search?api_key=i3Pr1NOafNmcxCgKSFMef6dtsjkdlEFO&q=light yagami&limit=25&offset=0&rating=g&lang=en')
    .then(response => response.json())
    .then(response => {
        console.log(response.data);
        const data = response.data;
        response.data.map(image => {
            const gif = document.createElement('img');
            gif.setAttribute('src', `https://media0.giphy.com/media/${image.id}/giphy.gif`);
            gif.setAttribute('title', image.title);
            div.appendChild(gif);

        });
        console.log(Object.keys(data[3]), Object.values(data[3]));
    });



