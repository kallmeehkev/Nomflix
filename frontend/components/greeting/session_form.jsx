import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)//.then( () => this.props.history.push('/'));
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    render() {
        let {currentUser, formType} = this.props;
        // if (currentUser) {
        //     return <Redirect to="/" />
        // }
        //Will either use this redirect or history.push to redirect after logging or signing up
        let status = this.props.match.path === '/login' ? 
            <Link to='/signup'>Sign Up</Link> : <Link to="/login">Log In</Link>;
        let errors = this.props.errors.map( (error, i) => {
            return (<li key={i}>{error}</li>)
        })
        return (
            <div>
                {status}
                <h2>{formType} page</h2>
                
                <form onSubmit={this.handleSubmit}>
                    <label>username
                        <input type="text" value={this.state.username} onChange={this.update('username')}/>
                    </label>
                    <label>password
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <input type="submit" value={formType}/>
                </form>
                <ul>
                    {errors}
                </ul>
            </div>
        )
    }

}

export default withRouter(SessionForm);