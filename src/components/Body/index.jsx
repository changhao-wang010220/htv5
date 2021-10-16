import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import About from '../../pages/About'
import Market from '../../pages/Market'
import Community from '../../pages/Community'
import Sign_in from '../../pages/Sign_in'

export default function Body() {
    return (
        <div>
            <div className="p-5"></div>
            <Switch>
                <Route path='/about' component={About}/>
                <Route path='/market' component={Market}/>
                <Route path='/community' component={Community}/>
                <Route path='/sign_in' component={Sign_in}/>
                <Redirect to='/about'/>
            </Switch> 
        </div>
    )
}
