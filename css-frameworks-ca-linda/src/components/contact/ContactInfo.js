import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function ContactInfo() {
  return (
    <ListGroup>
        <ListGroup.Item>
            <div className="info__symbol"><i class="fas fa-envelope"></i></div>
            <div className="info__item">hello@yay.com</div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className="info__symbol" ><i class="fas fa-phone"></i></div>
            <div className="info__item" >123 456 7890</div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className="info__symbol"><i class="fas fa-map-marker-alt"></i></div>
            <div className="info__item">
                <div>123 Some Street</div>
                <div>Somewhere</div>
                <div>Some City</div>
                <div>10000</div>
            </div>
        </ListGroup.Item>
    </ListGroup>
  )
}

export default ContactInfo
