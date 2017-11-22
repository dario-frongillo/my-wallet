import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

export  default class Login extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            height: '800px',
            openErrorDialog: false,
            errorMessage: '',
            errorTitle:'',
            username: '',
            password: '',
            errorTextUsername: '',
            errorTextPassword: '',
            showResendVerificationMailButton:false
        };

    };
     responseFacebook = (response) => {
        console.log(response);

    }

    responseGoogle = (response) => {
        console.log(response);
    }
    render() {

        return(
            <div className="container">

                <div className="omb_login">
                    <img id="profile-img" className="profile-img-card" src="/img/pig_logo.png" />
                    <h3 className="omb_authTitle">Login or <a href="#">Sign up</a></h3>
                    <div className="row omb_row-sm-offset-3 omb_socialButtons">
                        <div className="col-xs-6 col-md-4 col-lg-4">

                            <FacebookLogin
                                appId="1088597931155576"
                                autoLoad={true}
                                textButton={"Facebook"}
                                fields="name,email,picture"
                                callback={this.responseFacebook}
                                cssClass="loginBtn loginBtn--facebook"
                            />
                        </div>


                        <div className="col-xs-6 col-md-4 col-lg-4">
                            <GoogleLogin
                                clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                buttonText="Facebook"
                                onSuccess={this.responseGoogle}
                                onFailure={this.responseGoogle}
                                className="loginBtn loginBtn--google"
                            />
                        </div>
                    </div>

                    <div className="row omb_row-sm-offset-3 omb_loginOr">
                        <div className="col-xs-12 col-sm-6">
                            <hr className="omb_hrOr"/>
                                <span className="omb_spanOr">or</span>
                        </div>
                    </div>

                    <div className="row omb_row-sm-offset-3">
                        <div className="col-xs-12 col-sm-6">
                            <form className="omb_loginForm" action="" autocomplete="off">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" className="form-control" name="username" placeholder="email address"/>
                                </div>
                                <span className="help-block"></span>

                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input  type="password" className="form-control" name="password" placeholder="Password"/>
                                </div>
                                <span className="help-block">Password error</span>

                                <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                            </form>
                        </div>
                    </div>



                </div>

            </div>
        )
    }

}