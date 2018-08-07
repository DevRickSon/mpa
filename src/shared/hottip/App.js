import React, {Component, Fragment} from 'react';
import Nav from 'components/Nav';
import ListContainer from 'containers/ListContainer';

class App extends Component{
    render(){
        return (
            <Fragment>
                <Nav current="hottip" />
                <h1>Hottip</h1>
                <hr />
                <ListContainer />
            </Fragment>
        );
    }
}

export default App;