import React from 'react';
import { Link } from 'react-router-dom';

const links = [
    {
        name: 'My Account',
        linkTo: '/user/dashboard'
    },
    {
        name: 'User Information',
        linkTo: '/user/cart'
    },
    {
        name: 'My Cart',
        linkTo: '/user/dashboard'
    }
]

const userLayout = (props) => {


    const generateLinks = (links) => (
        links.map((link, index) => (<Link to={link.linkTo} key={index}>{link.name}</Link>)
        )
    )


    return (
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2>My Account</h2>
                    <div className="links">
                        {generateLinks(links)}
                    </div>
                </div>
                <div className="user_right_nav">
                {props.children}
                </div>
            </div>
        </div>
    );
};

export default userLayout;