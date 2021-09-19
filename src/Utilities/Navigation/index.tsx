import React from 'react';
import { NavWrap, Nav, NavItem, DropDown } from './navigation.style'
import { NavLink } from "react-router-dom";



export const Navigation:React.FC = () => {
    return (
        <NavWrap>
            <Nav>
                <NavItem>
                    <p>Pagination</p>
                    <DropDown className="dropdown">
                        <NavLink exact to="/">
                            Faker
                        </NavLink>
                        <NavLink to="/pagination/api">
                            API
                        </NavLink>
                    </DropDown>
                </NavItem>
                <NavItem>
                    <p>Infinite-scroll</p>
                    <DropDown className="dropdown">
                        <NavLink to="/infinite-scroll/faker">
                            Faker
                        </NavLink>
                        <NavLink  to="/infinite-scroll/api">
                            API
                        </NavLink>
                    </DropDown>
                </NavItem>
                <NavItem>
                    <p>Virtualized</p>
                    <DropDown className="dropdown">
                        <NavLink to="/virtualized/faker">
                            Faker
                        </NavLink>
                        <NavLink to="/virtualized/api">
                            API
                        </NavLink>
                    </DropDown>
                </NavItem>
                <NavItem>
                    <p>Window</p>
                    <DropDown className="dropdown">
                        <NavLink to="/window/faker">
                            Faker
                        </NavLink>
                        <NavLink to="/window/api">
                            API
                        </NavLink>
                    </DropDown>
                </NavItem>
            </Nav>
        </NavWrap>
    )
}
