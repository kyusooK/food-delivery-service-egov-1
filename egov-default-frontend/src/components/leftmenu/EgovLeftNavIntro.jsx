import React from 'react';

import { NavLink } from 'react-router-dom';
import URL from 'constants/url';

function EgovLeftNavIntro() {

    const lastSegment = window.parent.location.href.split('/').pop();
    
    if (lastSegment === 'orders'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>OrderManagement</h2>
                    <ul className="menu4">
                        <li><NavLink to="/orderManagement/orders" className={({ isActive }) => (isActive ? "cur" : "")}>Order</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    if (lastSegment === 'riders'){
        return (
            <div className="nav">
                <div className="inner">
                    <h2>RiderManagement</h2>
                    <ul className="menu4">
                        <li><NavLink to="/riderManagement/riders" className={({ isActive }) => (isActive ? "cur" : "")}>Rider</NavLink></li>
                    </ul>
                </div>
            </div>
        );
    }
    return null;
}

export default EgovLeftNavIntro;