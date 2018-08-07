import React, {Component, Fragment} from 'react';
import Nav from 'components/Nav';

class App extends Component{
    render(){
        return (
            <Fragment>
                <Nav current="home" />
                <h1>Home</h1>
            </Fragment>
        );
    }
}

export default App;