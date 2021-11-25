const apiWeb = "https://api.giphy.com/v1/gifs/search";
const apiKey = "z56j7qt1NchrW75KsQCI2ysX5sfLWZtJ";
const limit = 10;

export const getGifs = async (category) => {
    const url = `${apiWeb}?limit=${limit}&q=${encodeURI(
        category
    )}&api_key=${apiKey}`;

    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map((img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        };
    });

    // console.log(gifs);
    // setImages(gifs);
    return gifs;
    // console.log(images);
};