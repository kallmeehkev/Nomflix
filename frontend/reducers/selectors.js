export const defaultTenVideos = state => {
    let newArr = [];
    let defaultVideo = {};
    for(let i = 0; i< 10; i++) {
        defaultVideo = {
            id: i,
            description: "",
            title: "",
            duration: 0,
            maturityRating: "PG",
            thumbnailUrl: "",
            mediaUrl: ""
        }
        newArr.push(defaultVideo)
    }
    return newArr;
}
export const firstTenVideos = state => {
    let Arr = Object.values(state.entities.media)
    let newArr = [];
    for (let i = 0; i < 10; i++) {
        newArr.push(Arr[i])
    }
    return newArr;
}

export const genreVideos = (state, genre) => {
    let mediaGenres = Object.values(state.entities.mediaGenres).filter( (mediaGenre) => {
        return mediaGenre.genreId === genre.id;
    })
    let genreVideos= mediaGenres.map( (mediaGenre, i) => {
        if (state.entities.media[mediaGenre.mediaId]) {
        return state.entities.media[mediaGenre.mediaId]
        } 
        else {
            // debugger
            return {
                id: i,
                description: "",
                title: "",
                duration: 0,
                maturityRating: "PG",
                thumbnailUrl: "",
                mediaUrl: ""
            }
        }
    });
    return genreVideos;
}