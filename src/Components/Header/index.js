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
import { Link, NavLink as RRNavLink } from 'react-router-dom';
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
                  <NavLink exact to="/" activeClassName='active' tag={RRNavLink}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/about-us" activeClassName='active' tag={RRNavLink}>About Us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/menu" activeClassName='active' tag={RRNavLink}>Menu</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/cart" activeClassName='active' tag={RRNavLink}>Cart</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/sass" activeClassName='active' tag={RRNavLink}>Sass</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/login" activeClassName='active' tag={RRNavLink}>Login</NavLink>
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