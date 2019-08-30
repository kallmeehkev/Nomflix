import React from 'react';
import { Link } from 'react-router-dom';
import {debounce} from 'lodash';
class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: "",
            active: false,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.handleFetchResults = this.handleFetchResults.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.search = debounce( (text) => {
            this.handleFetchResults(text);
        }, 400)
        this.search = this.search.bind(this);
    }

    update(type) {
        return (e) => {
            this.setState({ [type]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleClear(e) {
        e.preventDefault();
        this.setState({input: ""});
    }

    handleClick(e) {
        e.stopPropagation();
        if (this.state.active) {
            if (this.node.contains(e.target)) {
                return;
            } else {
                this.setState({active: false});
            }
        }
    }

    handleExpand() {
        this.setState({active: true});
    }

    handleFetchResults(text) {
        let input = {input: text};
        if (text !== "") {
            this.props.fetchSearchResults(input)
                .then(() => this.props.history.push('/search'))
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClick, false);
    }

    componentWillUnMount() {
        document.removeEventListener('mousedown', this.handleClick, false);
    }

    componentDidUpdate(prevProps, prevState) {
        // if (prevState.input !== this.state.input) {
        //     // this.handleFetchResults();
        // }
        if (prevState.input !== "" && this.state.input === "") {
            this.props.clearSearchResults();
            this.props.history.push('/browse');
        }
    }

    render() {
        let expanded = 
            <div className="search_box">
                    {/* <button onClick={this.handleExpand} className="search_button"><i className="fas fa-search"></i></button> */}
                    <button className="search_button"><i className="fas fa-search"></i></button>
                    <form onSubmit={this.handleSubmit} className="search_form" ref={node => this.node = node}>
                        <input type="text" value={this.state.input} placeholder="Titles, descriptions, genres" 
                        onChange={this.update('input')} onKeyUp={e => this.search(e.target.value)} 
                        className="search_form_input" />
                        <button className="search_form_input_clear_button" onClick={this.handleClear}><i className="fas fa-times"></i></button>
                    </form>
            </div>
        let compressed = <button onClick={this.handleExpand} className="search_button"><i className="fas fa-search"></i></button>
        let search = this.state.active ? expanded : compressed;
        let containerState = this.state.active ? "search_container active_search" : "search_container";
        return(
            <div className={containerState}>
                {search}
            </div>
        )
    }
}

export default Search;