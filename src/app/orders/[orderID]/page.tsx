import { Order,Status } from '@/model/order';
import { useState } from 'react';

const data :Order[] = [
    {
        id:"123",
        details: "demo fake",
        status: Status.TODO,
        created: new Date(),
        due: new Date(),
        image: {
            src: "../orders/image.png",
            alt: "Sample image"
        },
        comments: "nvjnsdknclksdn",
        assignee: "fdsfs",
    }
];

// async function getOrder(orderId: string): Promise<Order>{
//     return {

//     }
// }

export default async function OrderDetails( {params}:{
    params: {
        orderID: string,
    }
} ) {
    // const order = await getOrder(params.orderID);
    return (
    <form>
    <div>
      <label>Order ID: {params.orderID}</label>
    </div>
    <div>
      <label>Details: </label>
    </div>
    <div>
      <label>Status:</label>
    </div>
    <div>
      <label>Date of Request:</label>
    </div>
    <div>
      <label>Date Due:</label>
    </div>
    <div>
      <label>Image/Video:</label>
    </div>
    <div>
      <label>Comments:</label>
    </div>
    <div>
      <label>Assignee:</label>
    </div>
    </form>
    )
}