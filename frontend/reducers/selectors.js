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

export const genreVideos = (state, genreId) => {
    let mediaGenres = Object.values(state.entities.mediaGenres).filter( (mediaGenre) => {
        return mediaGenre.genreId === genreId;
    })
    let genreVideos= mediaGenres.map( (mediaGenre, i) => {
        if (state.entities.media[mediaGenre.mediaId]) {
            return state.entities.media[mediaGenre.mediaId]
        } 
        else {
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

export const randGenreVideo = genreVideos => {
    return genreVideos[Math.floor(Math.random() * genreVideos.length)]
}

export const randGenreVideoId = (state, genreId) => {
    let mediaGenres = Object.values(state.entities.mediaGenres).filter((mediaGenre) => {
        return mediaGenre.genreId == genreId;
    })
    if (mediaGenres.length === 0) return 0;
    return mediaGenres[Math.floor(Math.random() * mediaGenres.length)].mediaId;
}

export const randVideo = (state, genreId) => {
    let mediaGenres = Object.values(state.entities.mediaGenres).filter((mediaGenre) => {
        return mediaGenre.genreId == genreId;
    })
    if (mediaGenres.length === 0) return 0;
    return state.entities.media[mediaGenres[Math.floor(Math.random() * mediaGenres.length)].mediaId];
}

export const myListsHashByMediaId = (state) => {
    let hash = {};
    Object.values(state.entities.myLists).forEach( myList => {
        hash[myList.mediaId] = myList;
    })
    return hash;
}

export const myListsVideos = (state) => {
    let myListsHash = myListsHashByMediaId(state);
    let videos = Object.keys(myListsHash).map( mediaId => {
        return state.entities.media[mediaId];
    })
    return videos;
}

export const searchResultVideos = state => {
    let videos = [];
    state.entities.searchResults.forEach( videoId => {
        videos.push(state.entities.media[videoId]);
    })
    return videos;
}

const thumbnailArr = [
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon1.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon2.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon3.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon4.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon5.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon6.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon7.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon8.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon9.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon10.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon11.png",
"https://nomflix-seed.s3-us-west-1.amazonaws.com/profilephotos/netflixProfileIcon12.png"
]

export const randomProfileThumbnail = () => {
    return thumbnailArr[Math.floor(Math.random() * thumbnailArr.length)]
}