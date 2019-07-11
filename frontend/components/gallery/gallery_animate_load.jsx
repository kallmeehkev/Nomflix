import React from 'react';
import GalleryDescription from './gallery_description';
//source for animating loading https://tech.gadventures.com/simple-react-transitions-a5f6bbb680a9

const GalleryAnimateLoad = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props)
            this.state = { didMount: false }
        }
        componentDidMount() {
            setTimeout(() => {
                this.setState({ didMount: true })
            }, 5000)
        }
        render() {
            const { didMount } = this.state
            return (
                <div className={`fade-out ${didMount && 'invisible'}`}>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
}

export default GalleryAnimateLoad(GalleryDescription);