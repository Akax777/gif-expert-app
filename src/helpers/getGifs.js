export const getGifs= async (categories)=>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=c8XKc3SE3aYWJ80NaKAwlfh9K3glKKAg&q=${categories}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url,
    }))
    
    console.log(data);
    return gifs;
}