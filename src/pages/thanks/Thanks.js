import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Container } from 'reactstrap'

export default function Thanks() {
  // const [reloaded, setReloaded] = useState(false);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!reloaded) {
  //     setReloaded(true);
  //     // Điều hướng đến cùng trang để thực hiện làm mới
  //     navigate(0);
  //   }
  // }, [reloaded, navigate]);
  return (
    <Container>
        <h1>You have successfully purchased</h1>
        <Link to='/product'>
        <Button>
            Go to Home
        </Button>
        </Link>
        
    </Container>
  )
}
