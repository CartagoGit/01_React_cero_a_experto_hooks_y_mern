const apiKey = 'z56j7qt1NchrW75KsQCI2ysX5sfLWZtJ';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

// peticion.then((resp => {
//         resp.json().then((data) => {
//             console.log(data);
//         });
//     }))
//     .catch(console.warn);

peticion
    .then((resp) => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);