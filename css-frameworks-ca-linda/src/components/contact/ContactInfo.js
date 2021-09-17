import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

function ContactInfo() {
  return (
    <ListGroup>
        <ListGroup.Item>
            <div className="info-symbol"><i class="fas fa-envelope"></i></div>
            <div className="info-item">hello@yay.com</div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className="info-symbol" ><i class="fas fa-phone"></i></div>
            <div className="info-item" >123 456 7890</div>
        </ListGroup.Item>
        <ListGroup.Item>
            <div className="info-symbol"><i class="fas fa-map-marker-alt"></i></div>
            <div className="info-item">
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
