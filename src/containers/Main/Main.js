import React from 'react';
import { Switch, Route } from 'react-router'
import Login from '../../components/Login/Login'
import App from '../../containers/App/App'

export default class Main extends React.Component {
    render() {
        console.log('RENDER MAIN')
        return (
                <div>
                    <Switch>
                        <Route exact path="/login" component={Login}/>
                        <Route  path="/dashboard" component={App}/>
                        <Route  path="/user" component={App}/>
                        <Route  path="/table" component={App}/>
                        <Route  path="/dashboard" component={App}/>
                        <Route  path="/dashboard" component={App}/>
                        <Route  path="/dashboard" component={App}/>
                        <Route  path="/dashboard" component={App}/>

                    </Switch>
                </div>
        );
    }
}
