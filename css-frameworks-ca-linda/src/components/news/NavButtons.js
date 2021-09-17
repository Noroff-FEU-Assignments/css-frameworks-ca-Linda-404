import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function NavButtons() {
  return (
    <ButtonGroup aria-label="Basic example">
        <Button variant="selected">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
        <Button variant="secondary">4</Button>
    </ButtonGroup>
  )
}

export default NavButtons
