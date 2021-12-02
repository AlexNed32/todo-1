import React from 'react'
import {
    Navbar,
    Nav,
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

export const Header = () => {
    return (
        <Navbar color="dark" dark className="mb-1">
            <Container>
                <NavbarBrand href="/">TODO</NavbarBrand>
                {/* <Nav>
                    <NavItem>
                        <Link to="/"></Link
                    </NavItem>
                </Nav> */}
            </Container>
        </Navbar>
    )
}
