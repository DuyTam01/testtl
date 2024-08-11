import React, { useContext, useState } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Input,
  Button,
  Form
} from 'reactstrap';
import logo from "../../images/Dt.gif"
import "../../css/header.css"
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const { items } = useSelector(state => state.cart)

  return (
    <div className='header'>

      <Navbar expand="md" >
        <Link to="/home">
          <img
            alt="Card cap"
            src={logo}
            width="100px"
          />
        </Link>
        <NavbarToggler onClick={toggle} danger />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <Link to="/home">Home  </Link>
            </NavItem>
            <NavItem>
              <Link to="/product">Product</Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/register">Register</Link>
            </NavItem> */}
            <NavItem>
              <Link to="/Contact">Contact</Link>
            </NavItem>

          </Nav>
          {/* <div class="form-input"> */}
          {/* <form class="search-fr" action="/search">  */}
          {/* <div class="form-input"> */}

          <Link to="/signin" className='signin'> <i class="fa-solid fa-user"></i></Link>
          <Form className="form-input">
            <Input name="q" id="search" placeholder="Searching..." value="" type="text" required="required" />
            <Button type="submit">
              <i class="fa fa-search"></i> </Button>

          </Form>

          {/* </div> */}
          {/* </form>
          </div> */}
        </Collapse>
        <Link to="/cart">   <i class="fa-solid fa-cart-shopping"> <span className='count-items'>{items.length}</span></i></Link>

      </Navbar>



      {/* <span>{cart.length}</span> */}



    </div>

  )
}

