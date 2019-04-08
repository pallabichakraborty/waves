import React, { Component } from 'react';
import PageTop from '../utils/pageTop';
import CollapseCheckBox from '../utils/collapseCheckBox';

import { connect } from 'react-redux';
import { getBrands, getWoods } from '../../redux/actions/product_actions';
import { frets } from '../utils/Form/fixedCategories';

class Shop extends Component {

    state={
        grid:'',
        limit:6,
        skip:0,
        filter:{
            brand:[],
            frets:[],
            wood:[],
            price:[]
        }
    }
    componentDidMount = () => {
        this.props.dispatch(getBrands());
        this.props.dispatch(getWoods());
    }

    handleFilters = (filters,type) => {
            const newFilters={...this.state.filter}
            newFilters[type]=filters;

            this.setState(
                {
                    filter:newFilters
                }
            )

    }

    render() {
        console.log(this.state.filter);
        
        const product = this.props.product;
        return (
            <div>
                <PageTop
                    title="Browse Products"
                />
                <div className="container">
                    <div className="shop_wrapper">
                        <div className="left">
                            <CollapseCheckBox
                                initState={true}
                                title="Brands"
                                list={product.brands}
                                handleFilters={(filters) => this.handleFilters(filters,'brand')}
                            />
                             <CollapseCheckBox
                                initState={true}
                                title="Frets"
                                list={frets}
                                handleFilters={(filters) => this.handleFilters(filters,'frets')}
                            />
                            <CollapseCheckBox
                                initState={true}
                                title="Wood"
                                list={product.wood}
                                handleFilters={(filters) => this.handleFilters(filters,'wood')}
                            />
                        </div>
                        <div className="right">
                            right
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return (
        {
            product:state.product
        }
    )

}
export default connect(mapStateToProps)(Shop);