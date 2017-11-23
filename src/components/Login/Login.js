import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

export  default class Login extends React.Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            isLoading: false,
            showErrorDialog: false,
            username: '',
            password: ''
        };

    };
     responseFacebook = (response) => {
        console.log(response);

    }

    onSubmit = (params) => {
         debugger;
        console.log(params);
        console.log( this.state);
    }

    responseGoogle = (response) => {
        console.log(response);
    }
    render() {

        return(
            <div className="container">
                {!this.state.isLoading && !this.state.showErrorDialog &&
                    <div className="omb_login">
                        <img id="profile-img" className="profile-img-card" src="/img/pig_logo.png" />
                        <h3 className="omb_authTitle">Login or <a href="#">Sign up</a></h3>

                        <div className="row omb_row-sm-offset-3 omb_socialButtons">
                            <div className="col-xs-4 col-sm-2">
                                <FacebookLogin
                                    appId="1088597931155576"
                                    autoLoad={true}
                                    textButton={ <span className="hidden-xs" style={{color:"white"}}>Facebook</span> }
                                    fields="name,email,picture"
                                    callback={this.responseFacebook}
                                    icon={ <i className="fa fa-facebook visible-xs"></i>}
                                    cssClass="btn btn-lg btn-block omb_btn-facebook"
                                />

                            </div>
                            <div className="col-xs-4 col-sm-2">

                                <a href="#" className="btn btn-lg btn-block omb_btn-twitter">
                                    <i className="fa fa-twitter visible-xs"></i>
                                    <span className="hidden-xs">Twitter</span>
                                </a>
                            </div>
                            <div className="col-xs-4 col-sm-2">
                                <GoogleLogin
                                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                    buttonText={<div><span className="hidden-xs"style={{color:"white"}}>Google+</span><i className="fa fa-google-plus visible-xs"></i> </div>}
                                    onSuccess={this.responseGoogle}
                                    onFailure={this.responseGoogle}
                                    className="btn btn-lg btn-block omb_btn-google"
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
                                <form className="omb_loginForm" onSubmit={this.onSubmit} autocomplete="off">
                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                        <input type="text" className="form-control" name="username" placeholder="email address"
                                               onChange={e => this.setState({username:e.target.value})}
                                               value={this.state.username}
                                        />
                                    </div>
                                    <span className="help-block"></span>

                                    <div className="input-group">
                                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                        <input  type="password" className="form-control" name="password" placeholder="Password"
                                                onChange={e => this.setState({password:e.target.value})}
                                                value={this.state.password}
                                        />
                                    </div>

                                    <button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>
                                </form>
                            </div>
                        </div>



                    </div>
                }


            </div>
        )
    }

}