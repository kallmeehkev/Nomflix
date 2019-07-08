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

export const genreMedia = (state, genreId) => {
    let mediaGenres = Object.values(state.entities.mediaGenres).filter( (mediaGenre) => {
        return mediaGenre.genreId === genreId
    })
    // debugger
    return mediaGenres.map( (mediaGenre, i) => {
        if (mediaGenre) {
        return state.entities.media[mediaGenre.mediaId]
        } else {
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
}