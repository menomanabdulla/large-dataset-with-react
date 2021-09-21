import React from 'react';
import { NavWrap, Nav, NavItem, DropDown } from './navigation.style'
import { NavLink, Link } from "react-router-dom";


interface NavItemType {
    title: string;
    methods: string[]
}


const NavItemData: NavItemType[] = [
    {
        title: 'Pagination',
        methods: ['faker', 'api']
    },
    {
        title: 'Infinite-scroll',
        methods: ['faker', 'api']
    },
    {
        title: 'Virtualized',
        methods: ['faker', 'api']
    },
    {
        title: 'Window',
        methods: ['faker', 'api']
    }
]


export const Navigation:React.FC = () => {
    return (
        <NavWrap>
            <Nav>
                 {
                    NavItemData.map((item: NavItemType,i) => 
                    <NavItem key={i}>
                        <p>{item.title}</p>
                        <DropDown className="dropdown">
                            {item.methods.map((method,j) =>
                                <Link 
                                    key={j}  
                                    to={(i === 0 &&  j === 0) ? "/" : 
                                    `/${item.title.toLowerCase()}/${method.toLowerCase()}`} 
                                > 
                                    {method.toUpperCase()}
                                </Link>
                            )}
                        </DropDown>
                    </NavItem>
                   )
                } 
            </Nav>
        </NavWrap>
    )
}
