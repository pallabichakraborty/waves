import React, { Component } from 'react';

import HomeSlider from './homeSlider';
import HomePromotion from './homePromotion';
import CardBlock from '../utils/cardBlock';

import { connect } from 'react-redux';
import {getProductByArrival, getProductBySell } from '../../redux/actions/product_actions'

class Home extends Component {

    componentDidMount = () => {
        this.props.dispatch(getProductByArrival());
        this.props.dispatch(getProductBySell());
    }
    render() {
        return (
            <div>
                <HomeSlider />
                <CardBlock 
                list={this.props.product.bySell}
                title="Best Selling Guitars"
                />
                <HomePromotion />
                <CardBlock 
                list={this.props.product.byArrival}
                title="New Arrivals"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return(
        {
            product:state.product
        }
    )
}

export default connect(mapStateToProps)(Home);