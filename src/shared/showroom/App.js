import React, {Component, Fragment} from 'react';
import Nav from 'components/Nav';

class App extends Component{
    render(){
        return (
            <Fragment>
                <Nav current="showroom" />
                <h1>Show Room</h1>
            </Fragment>
        );
    }
}

export default App;