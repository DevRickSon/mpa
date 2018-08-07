import React, {Component, Fragment} from 'react';
import Nav from 'components/Nav';
import {Route} from 'react-router-dom';
import {Hatchbag, Sedan, Suv} from 'pages';
import NavShowroom from 'components/NavShowroom';

class App extends Component{
    render(){
        return (
            <Fragment>
                <Nav current="showroom" />
                <h1>Show Room</h1>
                <hr />
                <div>
                    <NavShowroom />
                    <Route exact path="/showroom" component={Hatchbag} />
                    <Route path="/showroom/sedan" component={Sedan} />
                    <Route path="/showroom/suv" component={Suv} />
                </div>
            </Fragment>
        );
    }
}

export default App;