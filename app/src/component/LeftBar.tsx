import React from 'react'
import { Button } from '@mui/material';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {}

const LeftBar = (props: Props) => {

  library.add(faCoffee);
    
  return (
    <>
      <div>LeftBar</div>
      <Button variant='contained' color='primary'>
      Hello from Material UI
      </Button>
      <FontAwesomeIcon icon="coffee" />
    </>
  )
}

export default LeftBar