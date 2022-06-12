


export const getImages = async (searching) => {

    const url = `https://pixabay.com/api/?key=27697443-1338a563d541fa6de163e7505&q=${encodeURI(searching)}&image_type=photo`
    const resp = await fetch(url);
    const { hits } = await resp.json();

    const images = hits.map(img => {
        return {
            id: img.id,
            likes: img.likes,
            views: img.views,
            user: img.user,
            user_imagen: img.userImageURL,
            title: img.tags,
            img: img.largeImageURL
        }
    })

    return images;
}

