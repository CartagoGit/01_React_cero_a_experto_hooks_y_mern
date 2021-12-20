const getImage = async() => {
    try {
        const apiKey = 'z56j7qt1NchrW75KsQCI2ysX5sfLWZtJ';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
        const { data: { images: { original: { url } } } } = await respuesta.json();
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error);
    }

};
getImage().then(console.log);


// const apiKey = 'z56j7qt1NchrW75KsQCI2ysX5sfLWZtJ';

// const peticion = fetch(`https://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);

// peticion
//     .then((resp) => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn);