import axios from 'axios';

import {
    GET_PRODUCT_BY_SELL,
    GET_PRODUCT_BY_ARRIVAL
} from './types';

import { PRODUCT_SERVER } from '../../components/utils/misc';

export function getProductByArrival() {
    //?sortBy=createdAt&order=desc&limit=4
    const request = axios.get(`${PRODUCT_SERVER}/products?sortBy=createdAt&order=desc&limit=4`)
        .then(response => response.data);

    return {
        type: GET_PRODUCT_BY_ARRIVAL,
        payload: request
    }
}

export function getProductBySell() {
    //?sortBy=sold&order=desc&limit=4
    const request = axios.get(`${PRODUCT_SERVER}/products?sortBy=sold&order=desc&limit=4`)
        .then(response => response.data);

    return {
        type: GET_PRODUCT_BY_SELL,
        payload: request
    }
}
