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
        // this.debounceEvent = this.debounceEvent.bind(this);
    }

    // debounceEvent(...args) {
    //     this.debouncedEvent = debounce(...args);
    //     return e => {
    //         e.persist();
    //         return this.debouncedEvent(e);
    //     }
    // }

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

    handleExpand() {
        this.setState({active: true});
    }

    handleFetchResults() {
        return debounce( () => {
        this.props.fetchSearchResults(this.state)
            .then(() => this.props.history.push('/search'))}, 200)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.input !== this.state.input) {
            this.handleFetchResults();
        }
        else if (prevState.input !== "" && this.state.input === "") {
            this.props.history.push('/browse')
        }
    }

    render() {
        let value = this.state.input === "" ? "Titles, descriptions, genres" : this.state.input

        return(
            <div className="search_container">
                <button onClick={this.handleExpand} className="search_button"><i className="fas fa-search"></i></button>
                <form onSubmit={this.handleSubmit} className="search_form">
                    {/* <div className="search_form_box"> */}
                        <input type="text" value={this.state.input} placeholder="Titles, descriptions, genres" onChange={this.update('input')} className="search_form_input"/>
                    {/* <input type="submit" value={this.props.formType} /> */}
                        <button className="search_form_input_clear_button" onClick={this.handleClear}><i className="fas fa-times"></i></button>
                    {/* </div> */}
                </form>
            </div>
        )
    }
}

export default Search;