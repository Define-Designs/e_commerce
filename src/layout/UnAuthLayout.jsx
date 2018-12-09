import React, {Component, Fragment} from 'react';
import './UnAuth.css';
import {} from 'react-bootstrap';
import NavbarComponent from '../components/navbarComponent/NavbarComponent';

class UnAuthComponent extends Component {

    render () {
        return(
        <Fragment>
            <header className="App-header">
            <NavbarComponent/>
            </header>
            <div className="App-Body"></div>
            <div className="App-footer"></div>
        </Fragment>
        );
    }
}

export default UnAuthComponent;