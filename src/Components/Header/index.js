import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  count: state.commonReducer.count,
});
class Header extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    const { isOpen } = this.state;
    this.setState({
      isOpen: !isOpen,
    });
  };
  render() {
    const { isOpen } = this.state;
    const { path, count } = this.props;
    console.log('header Props', this.props);
    return (
      <header className="bg-dark">
        <div className="container">
          <Navbar dark expand="md">
            <NavbarBrand href="/">BrandLogo</NavbarBrand>
            {path === '/about-us' ? <span className="headerCount">{count}</span> : null}
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about-us">About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/menu">Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/cart">Cart</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/login">Login</NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Account
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link to="/login" className="dropdown-item">Login</Link>
                    <Link to="/book-list" className="dropdown-item">Book list</Link>
                    <Link to="/book-detail" className="dropdown-item">Book Detail</Link>
                    <DropdownItem divider />
                    <Link to="/" className="dropdown-item">Logout</Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </header>
    );
  }
}

export default connect(mapStateToProps, null)(Header);