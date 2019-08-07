import { NavLink } from 'react-router-dom';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navbar, Nav  } from 'react-bootstrap';
class header extends Component {
    render() {
    	const categories = this.props.categories;
        //console.log(this.props.categories);
        const categoryList = (categories) ? (
				categories.categories.map(category =>{
					return(
						<React.Fragment>
							<NavLink className="ml-2 text-white" to={"/"+category.seo}>{category.name}</NavLink>
						</React.Fragment>
						)
				})):(<React.Fragment></React.Fragment>)
        return (
            <React.Fragment>
            	<Navbar bg="primary" variant="dark" expand="md">
                    <Navbar.Brand className="navbar-brand logo_h">PK TECH ZONE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
        			<Nav className="navbar navbar-expand-lg navbar-light w-100 mr-auto">
                        <NavLink className="ml-2 text-white" exact to="/">Home</NavLink>
                        <NavLink className="ml-2 text-white" to="/shop">Shop</NavLink>
                        {categoryList}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
const mapStateToProps = state => ({
    categories: state.products.items,
})
export default connect(mapStateToProps)(header);
