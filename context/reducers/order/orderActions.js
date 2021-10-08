import {Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../../services/api'

export const ORDER_LOADING = "ORDER_LOADING";
export const ORDER_FAILURE = "ORDER_FAILURE";
export const FETCH_ORDER = "FETCH_ORDER";
export const ADD_ORDER = "ADD_ORDER";
export const ERROR = "ERROR";

const orderMapKey = '@QRNC:orderMap'

export const fetchOrders = (
    orderItems
) => {
    return async ({orderDispatch, refreshToken}, state) => {
        await refreshToken();
        const url = 'order&cust_token=' + state.access
        const response = await api.get(url);
        if (response.data.error) {
            Alert.alert(
                "Fetch orders failed",
                "Please try later or contact support",
                [
                    {
                        text: "Ok",
                        style: "cancel"
                    }
                ])
        } else {
            const {orders} = response.data.data;
            orderDispatch({type: FETCH_ORDER, orderData: orders})
            await AsyncStorage.setItem(orderMapKey, JSON.stringify(orders));
        }

    }
}

//Express order
export const expressOrder = (
    orderItems
) => {
    return async ({orderDispatch}, state) => {
        orderDispatch({type: ORDER_LOADING});

        const params = new URLSearchParams()
        orderItems.forEach((item, index) => {
            params.append(`product[${index}][product_id]`, item.item.productId)
            params.append(`product[${index}][quantity]`, item.quantity)
        })
        const response = await api.post(`/order/express&cust_token=${state.access}`, params)
        if (response.status !== 200) {
            orderDispatch({type: ORDER_FAILURE});
            throw(new Error("Something went wrong!"));
        } else if (response.data.error) {
            orderDispatch({type: ORDER_FAILURE});
            throw(new Error(response.data.error));
        } else {
            orderDispatch({
                type: ADD_ORDER,
                orderItem: {order_id: response.data.order_id},
            });
        }
    };
};
