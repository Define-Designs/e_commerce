import React, {Component, Fragment} from 'react';
import './Carousel.css';
import {Carousel} from 'react-bootstrap';
import black from '../../assets/black.jpg';
import white from '../../assets/white.jpg';
import grey from '../../assets/grey.jpg';
class CarouselComponent extends Component {

    render () {
        return(
            <Fragment>
              
                    <Carousel>
                    <Carousel.Item>
                        <img maxWidth={900} maxHeight={500} alt="900x500" src={black} />
                        
                    </Carousel.Item>
                    </Carousel>   
            </Fragment>
        );
    }
}

export default CarouselComponent;