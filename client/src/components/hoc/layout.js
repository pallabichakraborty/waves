import React, { Component } from 'react';

import Header from '../header_footer/header';
import Footer from '../header_footer/footer';

class Layout extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <div className="page_container">
                    {this.props.children}
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default Layout;