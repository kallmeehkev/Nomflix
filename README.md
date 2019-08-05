# Nomflix

[Live Demo][heroku]

[heroku]: https://nomflix-aa-sf-may-19.herokuapp.com/#/

Inspired by Netflix, Nomflix hosts food videos for your entertainment.  It was made using Rails/PostgreSQL for the backend and React.js and Redux for the frontend.

## Features
  * Secure frontend to backend user authentication using BCrypt.
  * Logged in Users can see list of available videos
  * Videos are sorted by Genre in a horizontal list for each Genre
  * Hovering over video enlarges video, giving users access to a few buttons. Clicking will drop down a more detailed view of the video
  * Logged in users can filter videos by genre
  * First row will show filtered videos by genre from profile's myList
  
 ### Homepage with index of available videos sorted by genre
 
The homepage displays rows of videos available for the user to watch.  Each row only displays videos associated with the specific genre.  Each thumbnail has visual effects when hovered over or clicked on for an interactive experience.  When hovering over a video, a dropdown button appears allowing the user to click on which will then drop down a detailed display of the video.  Clicking on a separate thumbnail updates the dropped down detailed display with the new video's details.  Clicking on either the thumbnail, or the dropped down detail view navigates the user to the video play page.

This was accomplished by keeping a local state for when a thumbnail is clicked and utilizing two 

```jsx
    handleOpen(i) {
        this.setState({videoIdx: i, open: true})
    }

    handleClose() {
        this.setState({open: false})
    }

    render() {
        if (this.props.genreVideos[this.props.genreVideos.length-1]) {
            let videos = this.props.genreVideos.map((video, i) => {
                let active = (this.state.open && this.state.videoIdx === i) ? "active" : ""
                return <GalleryShowItem video={video} key={i + (this.props.genre.id * 10)} handleOpen={() => this.handleOpen(i)} active={active}/>
            })
            let rowTitle = this.props.genreShow ? <div>Trending Now for {this.props.genre.name}</div> : <div>{this.props.genre.name}</div>
            return (
                <div className="browse_row_container">
                    <h2><span className="browse_row_title">{rowTitle}</span></h2>
                    <div className="browse_row_content">
                        <div className="browse_row_slider">
                            <div className="browse_row_slider_wrapper">
                                {videos}
                            </div>
                        </div>
                    </div>
                    <div className={this.state.open ? "show_row_item_content active" : "show_row_item_content"}>
                        <GalleryShowRowItemContent content={this.props.genreVideos[this.state.videoIdx]} handleClose={this.handleClose}/>
                    </div>
                </div>
            )
        }
```

And results in this flexible drop down section

![Dropdown snip](https://media.giphy.com/media/mGQRu1D8jhy0IMp8pR/giphy.gif)

### Randomize background thumbnail for every genre show page

I feature I wanted to implement was showing a different video of the selected genre every time a user visited that genre page.  Initially the background thumbnail was flickering between two random imanges each time the component was rendered.  The randomness was the purpose, but not the flickering.  After realizing the randomness resulted from generating the random video in my container component, which regenerated every time the component was rendered, I tried storing the first generated random video to the local state of the component and only using the local state's stored video to render.  This solved the flickering effect, but resulted in the same thumbnail being displayed for every genre page show.  To finally implement the intended feature without any of the unintended bugs, I generated the random id of a video in the container component and stored it in the local state.  Then by comparing the previous state to the current state, we update our local state to the currently generated random id, and rendered the video for this ID.  This ensured that when we came to a new page, the thumbnail would update without causing a flicker of random images.

Following code results in the flicker effect

```js
class GalleryFPVideo extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {video: null}
        this.state = {randId: this.props.randId}
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps.genreId !== this.props.genreId ) {
    //         // let video = this.props.fetchRandVideo(this.props.genreId)
    //         // this.setState({video: video})
    //         this.setState({randId: this.props.randId})
    //     }
    // }

    render() {
        // const randFPVideo = this.props.media[this.state.randId];
        // if (randFPVideo === undefined) return null;
        if (this.props.randFPVideo.id !== 0 || this.props.browseVid.id !== 0) {
            let video = this.props.pageType === 'genreShow' ? this.props.randFPVideo : this.props.browseVid
```
```js
const msp = (state, ownProps) => {
    return {
        // randId: Selectors.randGenreVideoId(state, ownProps.genreId) || 0,
        randFPVideo: state.entities.media[Selectors.randGenreVideoId(state, ownProps.genreId)] || {id: 0},
        pageType: ownProps.pageType,
        browseVid: ownProps.browseVid || { id: 0 },
        genre: state.entities.genres[ownProps.genreId],
        media: state.entities.media,
    }
}
```
![flicker](https://media.giphy.com/media/f5Sqb3XqajoTXf1csz/giphy.gif)


This resolves both issues of flickering or only displaying one thumbnail.

```js
class GalleryFPVideo extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {video: null}
        this.state = {randId: this.props.randId}
    }

    componentDidUpdate(prevProps) {
        if (prevProps.genreId !== this.props.genreId ) {
            // let video = this.props.fetchRandVideo(this.props.genreId)
            // this.setState({video: video})
            this.setState({randId: this.props.randId})
        }
    }

    render() {
        const randFPVideo = this.props.media[this.state.randId];
        if (randFPVideo === undefined) return null;
        if (randFPVideo.id !== 0 || this.props.browseVid.id !== 0) {
            let video = this.props.pageType === 'genreShow' ? randFPVideo : this.props.browseVid
```
```js
const msp = (state, ownProps) => {
    return {
        randId: Selectors.randGenreVideoId(state, ownProps.genreId) || 0,
        // randFPVideo: state.entities.media[Selectors.randGenreVideoId(state, ownProps.genreId)] || {id: 0},
        pageType: ownProps.pageType,
        browseVid: ownProps.browseVid || { id: 0 },
        genre: state.entities.genres[ownProps.genreId],
        media: state.entities.media,
    }
}
```

And here it is in full animated display:
![no flicker](https://media.giphy.com/media/jRNI0lMl3uBIctfDDn/giphy.gif)

## Project Design

Nomflix was broken down into 4 main MVP's for user experience after being able to log in or sign up.  Given the 10 day timeframe to work on this project, more time towards the tail end of the timeframe was allotted towards styling and user experience.  Features that will be included in future updates includes: 1. user being able to create/edit/delete a profile with a maturity preference 2.  user able to add videos to their MyList to be watched later.  3.  users able to search for videos based on matches with various factors.

## Technologies

Backend: Rails + Postgresql.  Rails was used for its ease of implementation.  RESTful routes went a long way towards developing this app quickly.

Frontend: React + Redux.  These were used for rendering the right components based on user interaction without the need for rendering different html pages.
