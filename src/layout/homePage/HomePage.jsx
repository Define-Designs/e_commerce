import React, {Component, Fragment} from 'react';
import './HomePage.css';
import {Button} from 'react-bootstrap';
import CarouselComponent from '../../components/carouselComponent/CarouselComponent';
import ImageBlockComponent from '../../components/imageBlockComponent/ImageBlockComponent'
class HomePage extends Component {

    render () {
        const ctaStyles = { maxWidth: 400, margin: '50px auto 50px'};
        const buttonStyle = { backgroundColor:'green'}
        return(
        <Fragment>
           <CarouselComponent></CarouselComponent>
            <div className="cta" style={ctaStyles}>
                <Button bsStyle="alert" bsSize="large" style={buttonStyle} block>
                    Block level button
                </Button>
            </div>
            <ImageBlockComponent></ImageBlockComponent>
        </Fragment>
        );
    }
}

export default HomePage;