import React from 'react';
import { withRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.demoLogin = this.demoLogin.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user).then(() => this.props.setCurrentProfile(1));
    }

    update(field) {
        return (e) => this.setState({[field]: e.target.value})
    }

    demoLogin() {
        const demoUser = { email: "user@email.com", password: "password" }
        this.props.login(demoUser).then(() => this.props.setCurrentProfile(2))//.then(() => this.props.history.push('/browse'));
    }

    componentWillUnmount() {
        this.props.clearSessionErrors();
    }

    render() {
        let {currentUser, formType} = this.props;
        let authRouteText, authRoute, form;
        let errors = this.props.errors.map((error, i) => {
            return (<li key={i}>{error}</li>)
        })
        if (this.props.match.path === '/login') {
            authRouteText = "Not signed up?";
            authRoute = <Link to='/signup'>Sign up here</Link>;
        } else {
            authRouteText = "Already a user?";
            authRoute = <Link to="/login">Log in here</Link>;
        }


        let loginForm = (
            <div className="login_body">
                <div className="login_form">
                    <div className="login_form_content">
                        <h1>{formType}</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <input type="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} className="login_form_input a" />
                            </div>
                            <div >
                                <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} className="login_form_input b" />
                            </div>
                            <input type="submit" value={formType} className="login_form_buttons not_demo_button" />
                        </form>
                        <button className="login_form_buttons demo_button" onClick={this.demoLogin}>Demo Login</button>
                        <div className="login_errors">
                            <ul>
                                {errors}
                            </ul>
                        </div>
                        <div>
                            <span className="login_redirect">{authRouteText} <span>{authRoute}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        )
        let signupForm = (
            <div className="signup_body">
                <button className="signup_form_buttons demo_button" onClick={this.demoLogin}>Don't want to enter your CC info? <strong className="strong">Click here.</strong></button>
                <div className="signup_form">
                    <div className="login_form_content">
                        <h1>Sign up to start watching</h1>
                        <h3>One more step and you can Nom!</h3>
                        <h3>You know you want to.</h3>
                        <h2>Create your account.</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <input type="email" value={this.state.email} placeholder="Email" onChange={this.update('email')} className="signup_form_input a" />
                            </div>
                            <div >
                                <input type="password" value={this.state.password} placeholder="Password" onChange={this.update('password')} className="signup_form_input b" />
                            </div>
                            <input type="submit" value={formType} className="login_form_buttons not_demo_button" />
                        </form>
                        <div className="signup_errors">
                            <ul>
                                {errors}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )



        form = (this.props.match.path === '/login' ? loginForm : signupForm);
        return (
            <div>{form}</div>
        )
    }

}

export default withRouter(SessionForm);