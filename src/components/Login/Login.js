import React from 'react';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';
import {FACEBOOK_SETTINGS, GOOGLE_SETTINGS} from "../../config/index";
import {connect} from 'react-redux';

import {Tabs, Tab} from 'material-ui/Tabs';
const styles = {
    headline: {
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
};


const TABS = {
    LOGIN:0,
    SIGNUP:1
}
 class Login extends React.Component {
    constructor (props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            isLoading: false,
            showErrorDialog: false,
            username: '',
            password: '',
            tabSelected: TABS.LOGIN,
            signupUsername :'',
            signupPassword:'',
            signupConfirmPassword:'',
            signupEmail:''
        };
    };
     responseFacebook = (response) => {
        console.log(response);

    }
    handleChangeTabSelected = (value) => {
        if(value == TABS.LOGIN) {
            this.setState({
                tabSelected: value,
                signupUsername :'',
                signupPassword:'',
                signupConfirmPassword:'',
                signupEmail:''
            });
        }else{
            this.setState({
                tabSelected: value,
            });
        }

    };

    onSubmit = (params) => {
        console.log( 'onSubmit',this.state);
    }

    onSubmitSignUp= (params) => {
        console.log( 'onSubmit',this.state);
    }

    responseGoogle = (response) => {
        console.log(response);
    }
    render() {

        console.log('props',this.props)
        const defaultStyle = {
            height: 502,
            width: 340,
            textAlign: 'center',
            display: 'inline-block',
        };

        const signupDiv = {
            height: 600,
            width: 340,
            display: 'inline-block',

        };

        return(
            <div className="login-background">
                <div className="loginDiv ">
                    <Paper style={defaultStyle} zDepth={5} rounded={true}>

                        <div className="login-paper-header">
                            <br/>
                            <img id="profile-img" className="login-logo-card" src="/img/pig_logo.png" />
                            <h3 style={{fontWeight:"bold", marginTop:10, color:"white"}}>

                                    myWallet

                            </h3>

                        </div>

                        <div>
                            <Tabs
                                value={this.state.tabSelected}
                                onChange={this.handleChangeTabSelected}
                            >
                                <Tab label="Log In" value={TABS.LOGIN}>
                                    <div style={defaultStyle} >
                                        <p style={{marginTop:10,fontWeight:"bold"}}>Login with:</p>
                                        <FacebookLogin
                                            appId={FACEBOOK_SETTINGS.appId}
                                            autoLoad={true}
                                            textButton={ <span className="hidden-xs" style={{color:"white"}}>Facebook</span> }
                                            fields="name,email,picture"
                                            callback={this.responseFacebook}
                                            icon={ <i className="fa fa-facebook visible-xs"></i>}
                                            cssClass="loginBtn loginBtn--facebook"
                                        />

                                        <GoogleLogin
                                            clientId={GOOGLE_SETTINGS.clientId}
                                            buttonText={<div><span className="hidden-xs"style={{color:"white"}}>Google+</span><i className="fa fa-google-plus visible-xs"></i> </div>}
                                            onSuccess={this.responseGoogle}
                                            onFailure={this.responseGoogle}
                                            className="loginBtn loginBtn--google"
                                        />

                                        <p style={{marginTop:10,fontWeight:"bold"}}>Or:</p>
                                        <Divider />


                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-user"></i></span>
                                            <input id="user" type="text" className="form-control" name="user" value={this.state.username} onChange={e => this.setState({username:e.target.value})} placeholder="User"/>
                                        </div>

                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="glyphicon glyphicon-lock"></i></span>
                                            <input id="password" type="password" className="form-control"
                                                   name="password" value={this.state.password}
                                                   onChange={e => this.setState({password:e.target.value})} placeholder="Password"/>
                                        </div>


                                        <div style={{marginTop:40}}>
                                            <FlatButton label="LOGIN ->"
                                                        backgroundColor="#00838F"
                                                        hoverColor="#00B0FF"
                                                        labelStyle={{color:"white"}}
                                                        fullWidth={true}
                                                        style={{height:70}}
                                                        onClick={this.onSubmit}

                                            />

                                        </div>
                                    </div>
                                </Tab>
                                <Tab label="Sign Up" value={TABS.SIGNUP}>
                                    <div style={signupDiv} >
                                        <div style={{marginTop:10, marginLeft:10}}>
                                            <label>
                                                Username(*)
                                            </label>
                                            <input type="text" className="form-control input-sm"
                                                   value={this.state.signupUsername} onChange={e => this.setState({signupUsername:e.target.value})}
                                                   id="signupUsername" placeholder="" style={{width:310}}
                                            />
                                        </div>

                                        <div style={{marginTop:10, marginLeft:10}}>
                                            <label>
                                                Password(*)
                                            </label>
                                            <input  type="password" className="form-control input-sm"
                                                   value={this.state.signupPassword} onChange={e => this.setState({signupPassword:e.target.value})}
                                                   id="signupPassword" placeholder="" style={{width:310}}/>
                                        </div>

                                        <div style={{marginTop:10, marginLeft:10}}>
                                            <label>
                                                Confirm Password(*)
                                            </label>
                                            <input  type="password" className="form-control input-sm"
                                                   value={this.state.signupConfirmPassword} onChange={e => this.setState({signupConfirmPassword:e.target.value})}
                                                   id="signupConfirmPassword" placeholder="" style={{width:310}}/>
                                        </div>

                                        <div style={{marginTop:10, marginLeft:10}}>
                                            <label>
                                                Email
                                            </label>
                                            <input type="email" className="form-control input-sm"
                                                   value={this.state.signupEmail} onChange={e => this.setState({signupEmail:e.target.value})}
                                                   id="signupEmail" placeholder="" style={{width:310}}/>
                                        </div>
                                        <div style={{marginTop:20}}>
                                            <FlatButton label="SIGN UP ->"
                                                        backgroundColor="#00838F"
                                                        hoverColor="#00B0FF"
                                                        labelStyle={{color:"white"}}
                                                        fullWidth={true}
                                                        style={{height:70}}
                                                        onClick={this.onSubmitSignUp}

                                            />

                                        </div>
                                    </div>
                                </Tab>
                            </Tabs>
                        </div>


                    </Paper>

                </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        intl: state.intl,
    }
}

export default connect(mapStateToProps, null)(Login);