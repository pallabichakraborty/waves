import {
    GET_PRODUCT_BY_SELL,
    GET_PRODUCT_BY_ARRIVAL,
    GET_WOOD,
    GET_BRANDS
} from '../actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case GET_PRODUCT_BY_SELL:
            return { ...state, bySell: action.payload };
        case GET_PRODUCT_BY_ARRIVAL:
            return { ...state, byArrival: action.payload };
        case GET_WOOD:
            return { ...state, wood: action.payload };
        case GET_BRANDS:
            return { ...state, brands: action.payload };
        default:
            return state;
    }
}