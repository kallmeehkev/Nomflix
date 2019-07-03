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
        this.demoLogin = this.demoLogin.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then( () => this.props.history.push('/browse'));
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    demoLogin(e) {
        const demoUser = { username: "user2", password: "password" }
        this.props.processForm(demoUser).then(() => this.props.history.push('/browse'));
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
            <div className="login_body">
                <div className="login_form">
                    <div className="login_form_content">
                        <h1>{formType}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <input type="text" value={this.state.username} placeholder="Email" onChange={this.update('username')} className="login_form_input"/>
                            </div>
                            <div >
                                <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} className="login_form_input"/>
                            </div>
                                <input type="submit" value={formType} className="login_form_buttons not_demo_button"/>
                        </form>
                        <button className="login_form_buttons demo_button" onClick={this.demoLogin}>Demo Login</button>
                    <ul>
                        {errors}
                    </ul>
                    </div>
                </div>
            </div>
        )
    }

}

export default withRouter(SessionForm);