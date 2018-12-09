import React, {Component} from 'react';
import './ImageBlock.css';
import {Grid,Row,Col,Thumbnail} from 'react-bootstrap';
import bluebk from '../../assets/bluebk.jpg'
import brownf from '../../assets/brownf.jpg'
import orange from '../../assets/orange.jpg'



class ImageBlockComponent extends Component {

    render () {
        return(
<Grid>
        <Row>
            <Col xs={6} md={4}>
                 <Thumbnail href="#" alt="171x180" src={bluebk} />
            </Col>
            <Col xs={6} md={4}>
                 <Thumbnail href="#" alt="171x180" src={brownf} />
            </Col>
            <Col xs={6} md={4}>
                 <Thumbnail href="#" alt="171x180" src={brownf} />
            </Col>
        </Row>
</Grid>
        );
    }
}

export default ImageBlockComponent;