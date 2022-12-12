import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Container, NavLink } from 'reactstrap';
import logo from '../../assets/images/logos/logo_title@1024.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const toggle = () => setIsOpen(!isOpen);
    return (
        <div className="topbar" id="top">
            <div className="header6">
                <Container className="po-relative">
                    <Navbar className="navbar-expand-lg h6-nav-bar">
                        <NavbarBrand href="/">
                            <Image src={logo} alt="byte3" width={100} height={100} />
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle}>
                            <span className="ti-menu"></span>
                        </NavbarToggler>
                        <Collapse isOpen={isOpen} navbar className="hover-dropdown ml-auto" id="h6-info">
                            <Nav navbar className="ml-auto">
                                <NavItem>
                                    <Link href="#services">
                                        <a className={'nav-link'}>Services</a>
                                    </Link>
                                </NavItem>
                            </Nav>
                            <div className="act-buttons">
                                <NavLink
                                    href="mailto:hello@byte3.cloud"
                                    className="btn btn-light font-14"
                                    target="_blank"
                                >
                                    Contact
                                </NavLink>
                            </div>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </div>
    );
};

export default Header;
