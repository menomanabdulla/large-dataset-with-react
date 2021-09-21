import React,{ FC,useEffect, useState } from 'react';
import { RouteMessageWrap } from './route-message.style'
import { useLocation } from "react-router-dom";

export const RouteMessage:FC = () => {
    const location = useLocation();
    const [message, setMessage] = useState<string>();
    useEffect(() => {
        setMessage(location.pathname)
    }, [location]);
    return (
        <RouteMessageWrap>
            <h2>{message == undefined || message == '/' ?  "Pagination Faker" : message.replace(/\/(.)/g, (_, c) => ' ' + c.toUpperCase() )}</h2>
        </RouteMessageWrap>
    )
}
